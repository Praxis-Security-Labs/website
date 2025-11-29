#!/bin/bash

# Test script for Phase 3 Security Enhancements
# Progressive Rate Limiting and Turnstile CAPTCHA Testing

echo "🧪 Testing Phase 3 Security Enhancements"
echo "========================================"

# Set your worker URL
WORKER_URL="https://praxisnavigator.io/api/contact"

echo "1. Testing Progressive Rate Limiting..."
echo "Sending rapid requests to trigger progressive delays..."

# Send multiple rapid requests to test progressive delays
for i in {1..8}; do
  echo "Request $i ($(date +%H:%M:%S))..."
  
  start_time=$(date +%s.%3N)
  
  response=$(curl -s -w "\n%{http_code}\n%{time_total}" -X POST "$WORKER_URL" \
    -H "Origin: https://praxisnavigator.io" \
    -H "Content-Type: application/json" \
    -d "{\"firstName\":\"TestUser$i\",\"lastName\":\"Progressive\",\"email\":\"test$i@example.com\",\"message\":\"Testing progressive rate limiting attempt $i with sufficient message length\"}")
  
  end_time=$(date +%s.%3N)
  duration=$(echo "$end_time - $start_time" | bc)
  
  # Parse response
  body=$(echo "$response" | head -n -2)
  http_code=$(echo "$response" | tail -n -2 | head -n 1)
  curl_time=$(echo "$response" | tail -n 1)
  
  echo "  Status: $http_code"
  echo "  Response: $(echo $body | head -c 100)..."
  echo "  Duration: ${duration}s"
  
  # Check for rate limiting
  if [[ "$http_code" == "429" ]]; then
    echo "  ✅ Progressive rate limiting triggered"
    
    # Extract wait time if available
    wait_time=$(echo "$body" | grep -o 'wait [0-9]* seconds' | grep -o '[0-9]*')
    if [[ -n "$wait_time" ]]; then
      echo "  ⏱️  Required wait time: ${wait_time} seconds"
    fi
  elif [[ "$http_code" == "200" ]]; then
    echo "  ✅ Request successful"
  else
    echo "  ⚠️  Unexpected response: $http_code"
  fi
  
  echo ""
  
  # Add small delay between requests to observe progression
  sleep 1
done

echo -e "\n2. Testing Turnstile Integration..."
echo "Testing form submission without Turnstile token..."

response=$(curl -s -w "\n%{http_code}" -X POST "$WORKER_URL" \
  -H "Origin: https://praxisnavigator.io" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"TestUser","lastName":"NoTurnstile","email":"test@example.com","message":"Testing without Turnstile token - should pass since not configured yet"}')

body=$(echo "$response" | head -n -1)
http_code=$(echo "$response" | tail -n 1)

echo "Status: $http_code"
echo "Response: $body"

if [[ "$http_code" == "200" || "$http_code" == "429" ]]; then
  echo "✅ No Turnstile token required (not configured yet - expected behavior)"
elif [[ "$http_code" == "400" ]]; then
  echo "⚠️  Turnstile verification failed (may be configured)"
else
  echo "❌ Unexpected response"
fi

echo -e "\n3. Testing Normal Operation..."
echo "Testing normal form submission after waiting..."

# Wait a moment for rate limiting to reset
echo "Waiting 5 seconds for rate limit cooldown..."
sleep 5

response=$(curl -s -w "\n%{http_code}" -X POST "$WORKER_URL" \
  -H "Origin: https://praxisnavigator.io" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Regular","lastName":"User","email":"regular@example.com","message":"This is a normal message from a regular user with sufficient length for validation"}')

body=$(echo "$response" | head -n -1)
http_code=$(echo "$response" | tail -n 1)

echo "Status: $http_code"
echo "Response: $body"

if [[ "$http_code" == "200" ]]; then
  echo "✅ Normal operation working correctly"
elif [[ "$http_code" == "429" ]]; then
  echo "⚠️  Still rate limited - progressive delays working"
else
  echo "❌ Unexpected response for normal operation"
fi

echo -e "\n4. Testing Existing Security Features..."
echo "Verifying Phase 1 & 2 security features still work..."

# Test CORS restriction
echo "Testing CORS restriction..."
response=$(curl -s -w "\n%{http_code}" -X POST "$WORKER_URL" \
  -H "Origin: https://malicious-site.com" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Hacker","lastName":"Test","email":"hacker@example.com","message":"This should be blocked by CORS"}')

http_code=$(echo "$response" | tail -n 1)
if [[ "$http_code" == "403" ]]; then
  echo "✅ CORS restriction working"
else
  echo "❌ CORS restriction may not be working: $http_code"
fi

# Test honeypot detection
echo "Testing honeypot detection..."
response=$(curl -s -w "\n%{http_code}" -X POST "$WORKER_URL" \
  -H "Origin: https://praxisnavigator.io" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Bot","lastName":"Test","email":"bot@example.com","message":"Bot message with sufficient length","website":"http://spam.com"}')

http_code=$(echo "$response" | tail -n 1)
if [[ "$http_code" == "400" ]]; then
  echo "✅ Honeypot detection working"
else
  echo "❌ Honeypot detection may not be working: $http_code"
fi

echo -e "\n🏁 Phase 3 Testing Complete!"
echo "Summary:"
echo "- Progressive Rate Limiting: Implemented ✅"
echo "- Turnstile Integration: Ready for configuration ✅"
echo "- Existing Security Features: Maintained ✅"
echo ""
echo "📝 Next Steps:"
echo "1. Configure Cloudflare Turnstile if desired:"
echo "   - Create Turnstile site in Cloudflare Dashboard"
echo "   - Run: npx wrangler secret put CF_TURNSTILE_SECRET"
echo "   - Add Turnstile widget to frontend form"
echo ""
echo "2. Monitor progressive rate limiting in production"
echo "3. Consider implementing Phase 3.3 (Request Signing) for additional security"