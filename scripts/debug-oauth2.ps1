# Debug Microsoft Graph OAuth2 Token Request
# This script provides detailed debugging for the token request

param(
    [Parameter(Mandatory=$false)]
    [string]$ClientSecret
)

# Your configuration
$TenantId = "a20b61a2-aab5-4c9c-8a77-287f373759c8"
$ClientId = "f478fc43-befa-4990-940e-de3e575aae95"

# Prompt for client secret if not provided
if (-not $ClientSecret) {
    $SecretSecure = Read-Host "Enter Client Secret" -AsSecureString
    $ClientSecret = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($SecretSecure))
}

Write-Host "🔍 Debugging Microsoft Graph OAuth2 Token Request..." -ForegroundColor Green
Write-Host ""

# Display what we're using
Write-Host "Configuration:" -ForegroundColor Cyan
Write-Host "  Tenant ID: $TenantId" -ForegroundColor White
Write-Host "  Client ID: $ClientId" -ForegroundColor White
Write-Host "  Secret Length: $($ClientSecret.Length) characters" -ForegroundColor White
Write-Host "  Secret First 4 chars: $($ClientSecret.Substring(0, [Math]::Min(4, $ClientSecret.Length)))..." -ForegroundColor White
Write-Host ""

try {
    # Test 1: Basic token request with verbose output
    Write-Host "🧪 Test 1: Token Request with Verbose Logging" -ForegroundColor Yellow
    
    $tokenUrl = "https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token"
    Write-Host "  Token URL: $tokenUrl" -ForegroundColor Gray
    
    $tokenBody = @{
        grant_type    = "client_credentials"
        client_id     = $ClientId
        client_secret = $ClientSecret
        scope         = "https://graph.microsoft.com/.default"
    }
    
    Write-Host "  Request Body:" -ForegroundColor Gray
    $tokenBody.GetEnumerator() | ForEach-Object {
        if ($_.Key -eq "client_secret") {
            Write-Host "    $($_.Key): ***HIDDEN***" -ForegroundColor Gray
        } else {
            Write-Host "    $($_.Key): $($_.Value)" -ForegroundColor Gray
        }
    }
    Write-Host ""

    $tokenResponse = Invoke-RestMethod -Uri $tokenUrl -Method POST -Body $tokenBody -ContentType "application/x-www-form-urlencoded" -Verbose
    
    Write-Host "✅ SUCCESS! Token received" -ForegroundColor Green
    Write-Host "  Token Type: $($tokenResponse.token_type)" -ForegroundColor Cyan
    Write-Host "  Expires In: $($tokenResponse.expires_in) seconds" -ForegroundColor Cyan
    Write-Host "  Scope: $($tokenResponse.scope)" -ForegroundColor Cyan
    Write-Host ""
    
    # Test 2: Verify token claims
    Write-Host "🧪 Test 2: Decode Token Claims (first part only)" -ForegroundColor Yellow
    $tokenParts = $tokenResponse.access_token.Split('.')
    $headerBytes = [Convert]::FromBase64String(($tokenParts[0] + '==').Substring(0, ($tokenParts[0].Length + 3) -band -4))
    $header = [System.Text.Encoding]::UTF8.GetString($headerBytes) | ConvertFrom-Json
    
    Write-Host "  Token Algorithm: $($header.alg)" -ForegroundColor Cyan
    Write-Host "  Token Type: $($header.typ)" -ForegroundColor Cyan
    Write-Host ""
    
    # Test 3: Check if we can access Microsoft Graph
    Write-Host "🧪 Test 3: Test Microsoft Graph Access" -ForegroundColor Yellow
    
    $headers = @{
        'Authorization' = "Bearer $($tokenResponse.access_token)"
        'Content-Type'  = 'application/json'
    }
    
    # Try to get the app's own details first (should always work)
    $appResponse = Invoke-RestMethod -Uri "https://graph.microsoft.com/v1.0/applications/$ClientId" -Method GET -Headers $headers
    Write-Host "✅ App details retrieved successfully" -ForegroundColor Green
    Write-Host "  App Display Name: $($appResponse.displayName)" -ForegroundColor Cyan
    Write-Host ""

    Write-Host "🎉 All tests passed! The OAuth2 setup is working correctly." -ForegroundColor Green
    Write-Host "The issue might be with the email sending endpoint or Exchange RBAC." -ForegroundColor Yellow

} catch {
    Write-Host "❌ Error occurred!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    
    if ($_.ErrorDetails.Message) {
        try {
            $errorObj = $_.ErrorDetails.Message | ConvertFrom-Json
            Write-Host "Detailed Error Information:" -ForegroundColor Yellow
            Write-Host "  Error Code: $($errorObj.error)" -ForegroundColor White
            Write-Host "  Description: $($errorObj.error_description)" -ForegroundColor White
            Write-Host "  Trace ID: $($errorObj.trace_id)" -ForegroundColor Gray
            Write-Host "  Correlation ID: $($errorObj.correlation_id)" -ForegroundColor Gray
            Write-Host ""
            
            # Specific troubleshooting based on error
            switch ($errorObj.error) {
                "invalid_client" {
                    Write-Host "💡 Troubleshooting Steps for 'invalid_client':" -ForegroundColor Cyan
                    Write-Host "  1. Verify Client ID is correct (should be from App Registration)" -ForegroundColor White
                    Write-Host "  2. Verify Client Secret is correct and not expired" -ForegroundColor White
                    Write-Host "  3. Check that app registration exists and is enabled" -ForegroundColor White
                    Write-Host "  4. Ensure you're using the correct tenant ID" -ForegroundColor White
                }
                "unauthorized_client" {
                    Write-Host "💡 Troubleshooting Steps for 'unauthorized_client':" -ForegroundColor Cyan
                    Write-Host "  1. Check that client credentials grant type is enabled" -ForegroundColor White
                    Write-Host "  2. Verify application permissions are properly configured" -ForegroundColor White
                }
                "invalid_scope" {
                    Write-Host "💡 Troubleshooting Steps for 'invalid_scope':" -ForegroundColor Cyan
                    Write-Host "  1. Check that Microsoft Graph permissions are added" -ForegroundColor White
                    Write-Host "  2. Verify admin consent has been granted" -ForegroundColor White
                }
                default {
                    Write-Host "💡 General troubleshooting:" -ForegroundColor Cyan
                    Write-Host "  1. Check app registration configuration in Entra ID" -ForegroundColor White
                    Write-Host "  2. Verify all IDs and secrets are correct" -ForegroundColor White
                    Write-Host "  3. Ensure admin consent is granted" -ForegroundColor White
                }
            }
        } catch {
            Write-Host "Raw error response: $($_.ErrorDetails.Message)" -ForegroundColor Yellow
        }
    }
}

Write-Host ""
Write-Host "Debug completed." -ForegroundColor White