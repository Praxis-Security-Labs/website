#!/bin/bash

# Test script for Praxis Contact Form Security Fixes
# Run this script to validate the security implementations

echo "🧪 Testing Praxis Contact Form Security Implementation"
echo "=================================================="

# Set your worker URL
WORKER_URL="https://your-worker.your-subdomain.workers.dev/api/contact"

echo "1. Testing CORS Origin Validation..."
# Should fail - invalid origin
curl -X POST "$WORKER_URL" \
  -H "Origin: https://malicious-site.com" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"This should fail"}' \
  && echo "❌ CORS check failed" || echo "✅ CORS properly blocked invalid origin"

echo -e "\n2. Testing Valid Origin..."
# Should succeed
curl -X POST "$WORKER_URL" \
  -H "Origin: https://praxisnavigator.com" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a valid test message with sufficient length"}' \
  && echo "✅ Valid request processed" || echo "❌ Valid request blocked"

echo -e "\n3. Testing Honeypot Detection..."
# Should fail silently
curl -X POST "$WORKER_URL" \
  -H "Origin: https://praxisnavigator.com" \
  -H "Content-Type: application/json" \
  -d '{"name":"Bot","email":"bot@example.com","message":"Bot message","website":"http://spam.com"}' \
  && echo "❌ Honeypot check failed" || echo "✅ Honeypot properly detected"

echo -e "\n4. Testing Content Filtering..."
# Should fail - malicious content
curl -X POST "$WORKER_URL" \
  -H "Origin: https://praxisnavigator.com" \
  -H "Content-Type: application/json" \
  -d '{"name":"Hacker","email":"hacker@example.com","message":"<script>alert(\"xss\")</script>"}' \
  && echo "❌ Content filter failed" || echo "✅ Malicious content properly blocked"

echo -e "\n5. Testing Rate Limiting..."
echo "Sending 5 rapid requests to trigger rate limit..."
for i in {1..5}; do
  echo "Request $i..."
  curl -X POST "$WORKER_URL" \
    -H "Origin: https://praxisnavigator.com" \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"Test $i\",\"email\":\"test$i@example.com\",\"message\":\"Test message number $i with sufficient length\"}"
  echo ""
done

echo -e "\n6. Testing Field Validation..."
# Should fail - message too short
curl -X POST "$WORKER_URL" \
  -H "Origin: https://praxisnavigator.com" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"short"}' \
  && echo "❌ Validation failed" || echo "✅ Short message properly rejected"

echo -e "\n🏁 Testing complete!"
echo "Review the responses above to verify security implementations are working."
echo ""
echo "📝 To test in production:"
echo "1. Update WORKER_URL variable with your actual worker domain"
echo "2. Update origins in the code with your actual domains"
echo "3. Deploy the worker to Cloudflare"
echo "4. Run this script"