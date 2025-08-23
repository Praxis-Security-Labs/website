import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url, redirect }) => {
  try {
    // Extract UTM parameters from query string
    const searchParams = url.searchParams;
    const utmSource = searchParams.get('utm_source') || 'website';
    const utmMedium = searchParams.get('utm_medium') || 'trial_explainer';
    const utmCampaign = searchParams.get('utm_campaign') || 'trial_signup';
    const utmContent = searchParams.get('utm_content') || 'en';

    // Log conversion event for analytics
    console.log('Azure Marketplace Redirect:', {
      timestamp: new Date().toISOString(),
      utm: {
        source: utmSource,
        medium: utmMedium,
        campaign: utmCampaign,
        content: utmContent,
      },
      referrer: searchParams.get('ref') || 'direct',
      userAgent: searchParams.get('ua') || 'unknown',
    });

    // Build Azure Marketplace URL with UTM parameters
    const azureMarketplaceBaseUrl =
      'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/praxis-security.praxis-navigator';
    const azureMarketplaceUrl = new URL(azureMarketplaceBaseUrl);

    // Preserve UTM parameters for tracking
    azureMarketplaceUrl.searchParams.set('utm_source', utmSource);
    azureMarketplaceUrl.searchParams.set('utm_medium', utmMedium);
    azureMarketplaceUrl.searchParams.set('utm_campaign', utmCampaign);
    azureMarketplaceUrl.searchParams.set('utm_content', utmContent);

    // Add Praxis-specific tracking parameters
    azureMarketplaceUrl.searchParams.set('praxis_ref', 'trial_explainer');
    azureMarketplaceUrl.searchParams.set(
      'praxis_timestamp',
      Date.now().toString()
    );

    // In production, you might want to:
    // 1. Record this conversion event in analytics
    // 2. Update conversion tracking database
    // 3. Send webhook to marketing automation
    // 4. Track user journey for attribution

    // Redirect to Azure Marketplace
    return redirect(azureMarketplaceUrl.toString(), 302);
  } catch (error) {
    console.error('Marketplace redirect error:', error);

    // Fallback to direct Azure Marketplace URL
    const fallbackUrl =
      'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/praxis-security.praxis-navigator';
    return redirect(fallbackUrl, 302);
  }
};
