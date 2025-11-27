# Exchange Online RBAC Setup Script for Cloudflare Contact Forms
# This script implements the modern RBAC for Applications approach

param(
    [Parameter(Mandatory=$true)]
    [string]$ClientId,
    
    [Parameter(Mandatory=$true)]
    [string]$ServicePrincipalObjectId,
    
    [Parameter(Mandatory=$true)]
    [string]$SenderEmail,
    
    [Parameter(Mandatory=$false)]
    [string]$ScopeName = "CloudflareMailSenders"
)

Write-Host "Setting up Exchange Online RBAC for Applications..." -ForegroundColor Green

try {
    # Check if already connected to Exchange Online
    $session = Get-PSSession | Where-Object {$_.ConfigurationName -eq "Microsoft.Exchange"}
    if (-not $session) {
        Write-Host "Connecting to Exchange Online..." -ForegroundColor Yellow
        Connect-ExchangeOnline -ShowProgress $true
    }

    # 1. Create Management Scope
    Write-Host "Creating Management Scope: $ScopeName" -ForegroundColor Yellow
    $scope = Get-ManagementScope -Identity $ScopeName -ErrorAction SilentlyContinue
    if (-not $scope) {
        New-ManagementScope -Name $ScopeName -RecipientRestrictionFilter "EmailAddresses -like '*$SenderEmail'"
        Write-Host "✓ Management Scope '$ScopeName' created successfully" -ForegroundColor Green
    } else {
        Write-Host "✓ Management Scope '$ScopeName' already exists" -ForegroundColor Green
    }

    # 2. Create Service Principal in Exchange Online
    Write-Host "Creating Service Principal for app: $ClientId" -ForegroundColor Yellow
    $servicePrincipal = Get-ServicePrincipal -Identity $ClientId -ErrorAction SilentlyContinue
    if (-not $servicePrincipal) {
        New-ServicePrincipal -AppId $ClientId -ObjectId $ServicePrincipalObjectId -DisplayName "CloudflareMailSender"
        Write-Host "✓ Service Principal created successfully" -ForegroundColor Green
    } else {
        Write-Host "✓ Service Principal already exists" -ForegroundColor Green
    }

    # 3. Create Role Assignment
    Write-Host "Creating Role Assignment for Application Mail.Send..." -ForegroundColor Yellow
    $assignmentName = "CloudflareContactFormAccess"
    $assignment = Get-ManagementRoleAssignment -RoleAssignee $ClientId -Role "Application Mail.Send" -ErrorAction SilentlyContinue
    if (-not $assignment) {
        New-ManagementRoleAssignment `
            -App $ClientId `
            -Role "Application Mail.Send" `
            -CustomResourceScope $ScopeName `
            -Name $assignmentName
        Write-Host "✓ Role Assignment '$assignmentName' created successfully" -ForegroundColor Green
    } else {
        Write-Host "✓ Role Assignment already exists" -ForegroundColor Green
    }

    # 4. Test the Configuration
    Write-Host "Testing Service Principal Authorization..." -ForegroundColor Yellow
    $testResult = Test-ServicePrincipalAuthorization -Identity $ClientId -Resource $SenderEmail
    
    Write-Host "`nTest Results:" -ForegroundColor Cyan
    $testResult | ForEach-Object {
        $inScopeStatus = if ($_.InScope -eq $true) { "✓ ALLOWED" } else { "✗ DENIED" }
        $color = if ($_.InScope -eq $true) { "Green" } else { "Red" }
        Write-Host "  Role: $($_.RoleName) | Permission: $($_.GrantedPermissions) | Status: $inScopeStatus" -ForegroundColor $color
    }

    Write-Host "`nSetup completed successfully!" -ForegroundColor Green
    Write-Host "Your Cloudflare Worker now has scoped Mail.Send permission for: $SenderEmail" -ForegroundColor Green

} catch {
    Write-Error "Setup failed: $($_.Exception.Message)"
    Write-Host "Please check your permissions and try again." -ForegroundColor Red
} finally {
    Write-Host "`nTo find your Service Principal Object ID:" -ForegroundColor Yellow
    Write-Host "1. Go to Entra admin center → Enterprise applications" -ForegroundColor White
    Write-Host "2. Search for 'CloudflareMailSender'" -ForegroundColor White
    Write-Host "3. Copy the Object ID from the Enterprise application" -ForegroundColor White
    Write-Host "`nExample usage:" -ForegroundColor Yellow
    Write-Host ".\setup-exchange-rbac.ps1 -ClientId 'your-client-id' -ServicePrincipalObjectId 'your-object-id' -SenderEmail 'your-email@domain.com'" -ForegroundColor White
}