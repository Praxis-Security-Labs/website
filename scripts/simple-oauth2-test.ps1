# Simple OAuth2 Test - Pass secret as parameter
# Usage: .\simple-oauth2-test.ps1 "your-full-client-secret-here"

param(
    [Parameter(Mandatory=$true)]
    [string]$ClientSecret
)

# Your configuration
$TenantId = "a20b61a2-aab5-4c9c-8a77-287f373759c8"
$ClientId = "f478fc43-befa-4990-940e-de3e575aae95"
$Sender = "kai@praxissecuritylabs.com"

Write-Host "Testing OAuth2 with provided secret..." -ForegroundColor Green
Write-Host "Secret length: $($ClientSecret.Length) characters" -ForegroundColor Cyan

try {
    # Get OAuth2 Token
    $tokenBody = @{
        grant_type    = "client_credentials"
        client_id     = $ClientId
        client_secret = $ClientSecret
        scope         = "https://graph.microsoft.com/.default"
    }

    $tokenResponse = Invoke-RestMethod -Uri "https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token" -Method POST -Body $tokenBody -ContentType "application/x-www-form-urlencoded"
    
    Write-Host "✅ Token obtained successfully!" -ForegroundColor Green
    
    # Test email sending
    $emailBody = @{
        message = @{
            subject = "🎉 OAuth2 Test Success!"
            body = @{
                contentType = "Text"
                content = "Your OAuth2 + RBAC email system is working perfectly! Sent at $(Get-Date)"
            }
            toRecipients = @(
                @{
                    emailAddress = @{
                        address = $Sender
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

    Invoke-RestMethod -Uri "https://graph.microsoft.com/v1.0/users/$Sender/sendMail" -Method POST -Body ($emailBody | ConvertTo-Json -Depth 4) -Headers $headers

    Write-Host "🎉 EMAIL SENT SUCCESSFULLY!" -ForegroundColor Green
    Write-Host "Check your inbox at: $Sender" -ForegroundColor Cyan

} catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.ErrorDetails.Message) {
        Write-Host "Details: $($_.ErrorDetails.Message)" -ForegroundColor Yellow
    }
}