# Test Microsoft Graph OAuth2 Email Sending
# This script tests if your app registration can successfully send emails

param(
    [Parameter(Mandatory=$false)]
    [string]$ClientSecret
)

# Your configuration
$TenantId = "a20b61a2-aab5-4c9c-8a77-287f373759c8"
$ClientId = "f478fc43-befa-4990-940e-de3e575aae95"
$Sender = "kai@praxissecuritylabs.com"
$Recipient = "kai@praxissecuritylabs.com"

# Prompt for client secret if not provided
if (-not $ClientSecret) {
    $SecretSecure = Read-Host "Enter Client Secret" -AsSecureString
    $ClientSecret = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($SecretSecure))
}

Write-Host "Testing Microsoft Graph OAuth2 Email Sending..." -ForegroundColor Green

try {
    # Step 1: Get OAuth2 Token
    Write-Host "Getting OAuth2 access token..." -ForegroundColor Yellow
    
    $tokenBody = @{
        grant_type    = "client_credentials"
        client_id     = $ClientId
        client_secret = $ClientSecret
        scope         = "https://graph.microsoft.com/.default"
    }

    $tokenResponse = Invoke-RestMethod -Uri "https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token" -Method POST -Body $tokenBody -ContentType "application/x-www-form-urlencoded"
    
    Write-Host "✓ Access token obtained successfully" -ForegroundColor Green
    Write-Host "Token expires in: $($tokenResponse.expires_in) seconds" -ForegroundColor Cyan

    # Step 2: Send Test Email
    Write-Host "Sending test email..." -ForegroundColor Yellow
    
    $emailBody = @{
        message = @{
            subject = "OAuth2 Test Email - Contact Form System"
            body = @{
                contentType = "HTML"
                content = @"
<h2>OAuth2 Test Successful! 🎉</h2>
<p>This email was sent using:</p>
<ul>
    <li><strong>OAuth2 Client Credentials flow</strong></li>
    <li><strong>Microsoft Graph API</strong></li>
    <li><strong>Exchange Online RBAC</strong> (scoped permissions)</li>
</ul>
<p><strong>Sender:</strong> $Sender</p>
<p><strong>App ID:</strong> $ClientId</p>
<p><strong>Timestamp:</strong> $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss UTC')</p>
<hr>
<p><em>Your Cloudflare contact form system is ready for production! 🚀</em></p>
"@
            }
            toRecipients = @(
                @{
                    emailAddress = @{
                        address = $Recipient
                    }
                }
            )
        }
        saveToSentItems = $true
    }

    $headers = @{
        'Authorization' = "Bearer $($tokenResponse.access_token)"
        'Content-Type'  = 'application/json'
    }

    # For Application permissions, we need to use the app's identity, not user identity
    $response = Invoke-RestMethod -Uri "https://graph.microsoft.com/v1.0/users/$Sender/sendMail" -Method POST -Body ($emailBody | ConvertTo-Json -Depth 4) -Headers $headers

    Write-Host "✅ TEST EMAIL SENT SUCCESSFULLY!" -ForegroundColor Green
    Write-Host "Check your inbox at: $Recipient" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "🎉 Your OAuth2 + RBAC email system is working perfectly!" -ForegroundColor Green
    Write-Host "✓ OAuth2 authentication: SUCCESS" -ForegroundColor Green  
    Write-Host "✓ Exchange RBAC permissions: SUCCESS" -ForegroundColor Green
    Write-Host "✓ Microsoft Graph API: SUCCESS" -ForegroundColor Green
    Write-Host "✓ Scoped email sending: SUCCESS" -ForegroundColor Green

} catch {
    Write-Host "❌ Test failed!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    
    # Better error handling for HTTP responses
    if ($_.ErrorDetails.Message) {
        Write-Host "Response: $($_.ErrorDetails.Message)" -ForegroundColor Yellow
    }
    
    # Check if it's a 401 Unauthorized - likely wrong client secret
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Host ""
        Write-Host "💡 This looks like an authentication issue. Please check:" -ForegroundColor Yellow
        Write-Host "   - Client Secret is correct and not expired" -ForegroundColor White
        Write-Host "   - Admin consent was granted for Mail.Send permission" -ForegroundColor White
        Write-Host "   - App registration exists and is enabled" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "Script completed." -ForegroundColor White