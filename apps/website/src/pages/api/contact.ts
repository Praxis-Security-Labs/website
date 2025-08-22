import type { APIRoute } from 'astro';

// Type definition for form data
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle?: string;
  phone?: string;
  message?: string;
  segment?: string;
  formType?: string;
  language?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  employeeCount?: string;
  preferredContactTime?: string;
}

// Norwegian cultural considerations for business communication
const getNorwegianFormattedData = (formData: ContactFormData) => {
  return {
    ...formData,
    // Norwegian name formatting preferences
    fullName: `${formData.firstName} ${formData.lastName}`,
    // Norwegian phone number validation if provided
    phone: formData.phone?.replace(/\s/g, ''), // Remove spaces for storage
    // Norwegian business hours consideration
    preferredContactTime:
      formData.language === 'no'
        ? '08:00-16:00 CET'
        : formData.preferredContactTime,
    // Norwegian cultural preferences
    culturalPreferences:
      formData.language === 'no'
        ? {
            communicationStyle: 'direct_factual',
            meetingStyle: 'punctual_efficient',
            decisionMaking: 'consensus_oriented',
            followUpFrequency: 'weekly_structured',
          }
        : undefined,
  };
};

// Email template selection based on language
const getEmailTemplateConfig = (language: string) => {
  const templates = {
    en: {
      confirmation: 'contact_confirmation_en',
      notification: 'new_lead_notification_en',
      followUp: 'lead_followup_en',
    },
    no: {
      confirmation: 'contact_confirmation_no',
      notification: 'new_lead_notification_no',
      followUp: 'lead_followup_no',
    },
  };

  return templates[language as keyof typeof templates] || templates.en;
};

export const POST: APIRoute = async ({ request }) => {
  let language = 'en'; // Default language for error messages

  try {
    const rawFormData = await request.json();

    // Capture language for potential error messages
    language = rawFormData.language || 'en';

    // Basic validation
    if (
      !rawFormData.email ||
      !rawFormData.firstName ||
      !rawFormData.lastName ||
      !rawFormData.company
    ) {
      return new Response(
        JSON.stringify({
          error:
            rawFormData.language === 'no'
              ? 'Manglende obligatoriske felt'
              : 'Missing required fields',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Norwegian cultural formatting
    const formData = getNorwegianFormattedData(rawFormData);

    // Email template configuration
    const emailTemplates = getEmailTemplateConfig(formData.language || 'en');

    // Enhanced form data for CRM with language and cultural preferences
    const enhancedFormData = {
      ...formData,
      // HubSpot/CRM properties
      leadSource: 'website_contact_form',
      leadStatus: 'new',
      language: formData.language,
      formType: formData.formType,
      segment: formData.segment,
      timestamp: new Date().toISOString(),
      // Norwegian compliance
      gdprConsent: true,
      personalDataLawCompliance: formData.language === 'no',
      dataProcessingBasis:
        formData.language === 'no'
          ? 'consent_personopplysningsloven'
          : 'consent_gdpr',
      // Email template preferences
      emailTemplateSet: emailTemplates,
      // UTM and marketing data
      utmSource: formData.utmSource,
      utmMedium: formData.utmMedium,
      utmCampaign: formData.utmCampaign,
      // Norwegian business context
      businessContext:
        formData.language === 'no'
          ? {
              timeZone: 'Europe/Oslo',
              currency: 'NOK',
              vatNumber: null, // To be collected later if needed
              complianceFrameworks: ['GDPR', 'Personopplysningsloven'],
              preferredLanguage: 'no',
            }
          : undefined,
    };

    // In a real implementation, you would:
    // 1. Send to HubSpot CRM with language tagging
    // 2. Send localized notification emails
    // 3. Store in database with Norwegian compliance flags
    // 4. Trigger appropriate language-specific marketing automation
    // 5. Schedule follow-up in Norwegian business hours

    // For now, we'll log the enhanced submission
    console.log('Enhanced form submission received:', {
      formType: enhancedFormData.formType,
      segment: enhancedFormData.segment,
      email: enhancedFormData.email,
      company: enhancedFormData.company,
      language: enhancedFormData.language,
      culturalPreferences: enhancedFormData.culturalPreferences,
      emailTemplateSet: enhancedFormData.emailTemplateSet,
      businessContext: enhancedFormData.businessContext,
      timestamp: enhancedFormData.timestamp,
    });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return localized success response
    const successMessage =
      formData.language === 'no'
        ? 'Skjema sendt vellykket'
        : 'Form submitted successfully';

    return new Response(
      JSON.stringify({
        success: true,
        message: successMessage,
        id: `contact_${Date.now()}`,
        language: formData.language,
        emailTemplateSet: emailTemplates,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    const errorMessage =
      language === 'no' ? 'Intern serverfeil' : 'Internal server error';

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
