# Microsoft Graph OAuth2 with RBAC Setup for Contact Forms

## Overview
This guide walks you through setting up OAuth2 authentication with Microsoft Graph and modern Exchange Online RBAC for secure email sending from contact forms. This uses the latest security practices, replacing both deprecated app passwords and legacy Application Access Policies.

## Prerequisites
- Microsoft 365 or Office 365 account with admin privileges  
- Access to Entra admin center (Azure AD)
- PowerShell with Exchange Online Management module (v3.2.0+ for REST API support)
- Exchange Administrator role in Entra ID

cloudflare environment variables
CF_M365_TENANT_ID=your-tenant-id-from-entra-id
CF_M365_CLIENT_ID=your-client-id-from-app-registration
CF_M365_CLIENT_SECRET=your-client-secret-from-app-registration
CF_M365_SENDER=your-authorized-sender-email@yourdomain.com
RECIPIENT_EMAIL=kai@praxissecuritylabs.com

## Step 1: Create App Registration in Entra ID

### A. Register the Application
1. Go to [Entra admin center](https://entra.microsoft.com) → Identity → Applications → App registrations
2. Click **New registration**
3. Configure:
   - **Name**: `CloudflareMailSender`
   - **Supported account types**: Accounts in this organizational directory only (Single tenant)
   - **Redirect URI**: Leave blank
4. Click **Register** and save the following values:
   - **Tenant ID** (Directory ID)
   - **Client ID** (Application ID)

### B. Create Client Secret
1. In the app registration → **Certificates & secrets**
2. Click **New client secret**
3. Add description: "Contact Forms Worker Secret"
4. Set expiration: 24 months (recommended)
5. Click **Add** and **immediately copy the secret value** (you cannot retrieve it later)

## Step 2: Configure API Permissions

1. In the app registration → **API permissions**
2. Click **Add a permission** → **Microsoft Graph**
3. Choose **Application permissions**
4. Search and add: **Mail.Send**
5. Click **Grant admin consent for [Your Organization]**
6. Verify the permission shows "Granted for [Your Organization]"

## Step 3: Configure Application RBAC (Recommended Modern Approach)

Exchange Online RBAC for Applications provides granular, scoped permissions replacing the legacy Application Access Policies. This approach is more secure and future-proof.

### A. Create Management Scope (Optional - for targeting specific users)

If you want to restrict the app to only send mail for specific users, create a management scope. For our use case where we want to restrict to a single sender, we'll create a simple scope:

1. Connect to Exchange Online PowerShell:
```powershell
Connect-ExchangeOnline
```

2. Create a management scope targeting your intended sender:
```powershell
New-ManagementScope -Name "CloudflareMailSenders" -RecipientRestrictionFilter "EmailAddresses -like '*your-sender-email@yourdomain.com'"
```

### B. Create Service Principal in Exchange Online

1. Create a pointer to your Entra ID app registration:
```powershell
# Replace with your actual values from Step 1
New-ServicePrincipal -AppId "YOUR_CLIENT_ID" -ObjectId "YOUR_SERVICE_PRINCIPAL_OBJECT_ID" -DisplayName "CloudflareMailSender"
```

**Finding Service Principal Object ID:**
- Go to Entra admin center → Enterprise applications  
- Search for your app name ("CloudflareMailSender")
- Copy the **Object ID** from the Enterprise application (NOT the App registration)

### C. Assign Application Role with Scope

```powershell
New-ManagementRoleAssignment `
  -App "YOUR_CLIENT_ID" `
  -Role "Application Mail.Send" `
  -CustomResourceScope "CloudflareMailSenders" `
  -Name "CloudflareContactFormAccess"
```

### D. Test the RBAC Assignment

```powershell
Test-ServicePrincipalAuthorization -Identity "YOUR_CLIENT_ID" -Resource "your-sender-email@yourdomain.com"
```

The result should show `InScope: True` for your intended sender email.

## Step 4: Configure Environment Variables

Set these environment variables in Cloudflare Pages:

```
CF_M365_TENANT_ID=your-tenant-id-from-step-1
CF_M365_CLIENT_ID=your-client-id-from-step-1  
CF_M365_CLIENT_SECRET=your-client-secret-from-step-1
CF_M365_SENDER=your-email@yourdomain.com
RECIPIENT_EMAIL=kai@praxissecuritylabs.com
```

## Important Security Notes

- **Uses modern RBAC** - Replaces deprecated Application Access Policies with Exchange Online RBAC
- **Future-proof approach** - Built on Microsoft's current recommendation for application permissions
- **Granular scoping** - Can restrict access to specific mailboxes using Management Scopes
- **Store secrets securely** in Cloudflare environment variables only
- **Rotate client secrets regularly** (recommended every 24 months)
- **Monitor app access** in Entra ID sign-in logs
- **Use least privilege** - the app gets only Mail.Send permission with scope restrictions

## Troubleshooting

### "Insufficient privileges to complete the operation"
- Verify admin consent was granted for Mail.Send permission in Microsoft Graph
- Check that you have Exchange Administrator role in Entra ID
- Ensure the Management Scope includes your target sender email

### "Service Principal not found" 
- Verify you used the correct Enterprise Application Object ID (not App Registration Object ID)
- Check that the Service Principal was created successfully with `Get-ServicePrincipal -Identity "YOUR_CLIENT_ID"`
- Ensure the app registration exists and is enabled in Entra ID

### "Access Denied" for Specific User
- Run `Test-ServicePrincipalAuthorization` to verify user has access
- Check the Management Scope filter includes the target email address
- Verify the role assignment was created successfully

### Token Request Fails  
- Verify network connectivity to login.microsoftonline.com
- Check that client secret is valid and not expired
- Ensure proper URL encoding in token request
- Verify Tenant ID, Client ID, and Client Secret are correct

### RBAC Assignment Issues
- Ensure you're using PowerShell with Exchange Online module v3.2.0+
- Check that you have Organization Management role or Exchange Administrator role
- Verify the app's Service Principal exists in both Entra ID and Exchange Online

## Migration Benefits

This modern RBAC approach provides:
- **Latest security standards** compliant with Microsoft's current recommendations
- **Replaces deprecated features** - no more Application Access Policies
- **Enhanced granular control** with Management Scopes and Application Roles  
- **Better monitoring** through Entra ID sign-in logs and Exchange audit logs
- **Future-proof architecture** built on Microsoft's current RBAC framework
- **Simplified management** with unified Exchange Online RBAC
- **Conditional access** policy support

## Environment Variables Summary

After completing this setup, configure these variables in Cloudflare Pages:

```
CF_M365_TENANT_ID=your-tenant-id
CF_M365_CLIENT_ID=your-client-id
CF_M365_CLIENT_SECRET=your-client-secret
CF_M365_SENDER=your-email@yourdomain.com
RECIPIENT_EMAIL=kai@praxissecuritylabs.com
```