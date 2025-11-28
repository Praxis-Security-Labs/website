import React, { useState } from 'react';
import { validateBusinessEmail } from '@/utils/email-validation';

interface ComplianceContactSectionProps {
  currentLanguage?: string;
}

export const ComplianceContactSection: React.FC<
  ComplianceContactSectionProps
> = ({ currentLanguage = 'en' }) => {
  const isNorwegian = currentLanguage === 'no';
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    urgency: 'normal',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, email: value }));

    if (value) {
      const validation = validateBusinessEmail(
        value,
        currentLanguage as 'en' | 'no'
      );
      setEmailError(validation.isValid ? '' : validation.message || '');
    } else {
      setEmailError('');
    }
  };

  const content = {
    en: {
      title: 'Enterprise Compliance Support',
      subtitle:
        'Get direct access to our compliance team for vendor risk assessments, audit support, and regulatory inquiries.',
      contactMethods: [
        {
          type: 'Compliance Team',
          icon: '📋',
          email: 'compliance@praxisnavigator.io',
          responseTime: '24 hours',
          description:
            'General compliance questions, vendor risk assessments, and documentation requests.',
          use: [
            'Security questionnaires',
            'Vendor risk assessments',
            'Compliance documentation',
            'Audit support',
          ],
        },
        {
          type: 'Data Protection Officer',
          icon: '🔒',
          email: 'dpo@praxisnavigator.io',
          responseTime: '48 hours',
          description:
            'GDPR compliance, data subject rights, and privacy impact assessments.',
          use: [
            'GDPR compliance',
            'Data subject rights',
            'Privacy impact assessments',
            'Data processing agreements',
          ],
        },
        {
          type: 'Legal Team',
          icon: '⚖️',
          email: 'legal@praxisnavigator.io',
          responseTime: '72 hours',
          description:
            'Contract negotiations, legal compliance, and regulatory interpretation.',
          use: [
            'Contract negotiations',
            'Legal compliance',
            'Regulatory questions',
            'Terms and conditions',
          ],
        },
        {
          type: 'Security Team',
          icon: '🛡️',
          email: 'security@praxisnavigator.io',
          responseTime: '12 hours',
          description:
            'Security architecture, incident response, and technical security questions.',
          use: [
            'Security architecture',
            'Incident response',
            'Penetration testing',
            'Technical security',
          ],
        },
      ],
      form: {
        title: 'Compliance Inquiry Form',
        subtitle:
          "Submit a detailed inquiry and we'll route it to the appropriate team member.",
        fields: {
          name: 'Full Name *',
          title: 'Job Title *',
          company: 'Company *',
          email: 'Email Address *',
          phone: 'Phone Number',
          inquiryType: 'Inquiry Type *',
          message: 'Message *',
          urgency: 'Priority Level',
        },
        inquiryTypes: [
          { value: 'vendor-assessment', label: 'Vendor Risk Assessment' },
          { value: 'security-questionnaire', label: 'Security Questionnaire' },
          { value: 'gdpr-compliance', label: 'GDPR Compliance' },
          { value: 'audit-support', label: 'Audit Support' },
          { value: 'contract-review', label: 'Contract Review' },
          { value: 'documentation-request', label: 'Documentation Request' },
          { value: 'incident-response', label: 'Security Incident' },
          { value: 'other', label: 'Other' },
        ],
        urgencyLevels: [
          { value: 'low', label: 'Low Priority (5 business days)' },
          { value: 'normal', label: 'Normal Priority (2-3 business days)' },
          { value: 'high', label: 'High Priority (24 hours)' },
          { value: 'urgent', label: 'Urgent (Same day response)' },
        ],
        submit: 'Submit Inquiry',
        submitting: 'Submitting...',
        success:
          "Thank you! Your inquiry has been submitted successfully. We'll respond within the specified timeframe.",
        error: 'Please fill in all required fields.',
      },
      sla: {
        title: 'Response Time Commitments',
        subtitle:
          'Our compliance team is committed to timely responses based on inquiry type and urgency.',
        commitments: [
          {
            type: 'Security Incidents',
            time: 'Within 2 hours',
            description:
              'Critical security matters requiring immediate attention',
            coverage: '24/7 on-call security team',
          },
          {
            type: 'Vendor Assessments',
            time: 'Within 24 hours',
            description: 'Security questionnaires and vendor risk evaluation',
            coverage: 'Business hours (9 AM - 6 PM CET)',
          },
          {
            type: 'GDPR Inquiries',
            time: 'Within 48 hours',
            description: 'Data protection and privacy compliance questions',
            coverage: 'Business hours with DPO availability',
          },
          {
            type: 'General Compliance',
            time: 'Within 72 hours',
            description:
              'Documentation requests and general compliance questions',
            coverage: 'Standard business hours response',
          },
        ],
      },
      escalation: {
        title: 'Escalation Process',
        description:
          'If you need to escalate a compliance matter or are not satisfied with the initial response:',
        steps: [
          {
            step: '1',
            title: 'Primary Contact',
            description:
              'Start with the appropriate team contact based on your inquiry type.',
          },
          {
            step: '2',
            title: 'Team Lead Escalation',
            description:
              'If not resolved within SLA, your inquiry is automatically escalated to team leads.',
          },
          {
            step: '3',
            title: 'Executive Escalation',
            description:
              'Critical matters can be escalated directly to our Chief Compliance Officer.',
          },
        ],
        executiveContact: {
          title: 'Executive Escalation',
          email: 'cco@praxisnavigator.io',
          name: 'Chief Compliance Officer',
          description:
            'For critical compliance matters requiring executive attention.',
        },
      },
    },
    no: {
      title: 'Bedriftssamsvar Støtte',
      subtitle:
        'Få direkte tilgang til vårt samsvarteam for leverandør risikovurderinger, revisjonstøtte og regulatoriske forespørsler.',
      contactMethods: [
        {
          type: 'Samsvarteam',
          icon: '📋',
          email: 'compliance@praxisnavigator.io',
          responseTime: '24 timer',
          description:
            'Generelle samsvarsspørsmål, leverandør risikovurderinger og dokumentasjonsforespørsler.',
          use: [
            'Sikkerhetsspørreskjemaer',
            'Leverandør risikovurderinger',
            'Samsvarsdokumentasjon',
            'Revisjonstøtte',
          ],
        },
        {
          type: 'Personvernombud',
          icon: '🔒',
          email: 'dpo@praxisnavigator.io',
          responseTime: '48 timer',
          description:
            'GDPR-samsvar, datasubjektrettigheter og personvernskonsekvensanalyser.',
          use: [
            'GDPR-samsvar',
            'Datasubjektrettigheter',
            'Personvernskonsekvensanalyser',
            'Databehandlingsavtaler',
          ],
        },
        {
          type: 'Juridisk Team',
          icon: '⚖️',
          email: 'legal@praxisnavigator.io',
          responseTime: '72 timer',
          description:
            'Kontraktsforhandlinger, juridisk samsvar og regulatorisk tolkning.',
          use: [
            'Kontraktsforhandlinger',
            'Juridisk samsvar',
            'Regulatoriske spørsmål',
            'Vilkår og betingelser',
          ],
        },
        {
          type: 'Sikkerhetsteam',
          icon: '🛡️',
          email: 'security@praxisnavigator.io',
          responseTime: '12 timer',
          description:
            'Sikkerhetsarkitektur, hendelsesrespons og tekniske sikkerhetsspørsmål.',
          use: [
            'Sikkerhetsarkitektur',
            'Hendelsesrespons',
            'Penetrasjonstesting',
            'Teknisk sikkerhet',
          ],
        },
      ],
      form: {
        title: 'Samsvar Forespørselsskjema',
        subtitle:
          'Send inn en detaljert forespørsel og vi vil rute den til riktig teammedlem.',
        fields: {
          name: 'Fullt Navn *',
          title: 'Stilling *',
          company: 'Bedrift *',
          email: 'E-postadresse *',
          phone: 'Telefonnummer',
          inquiryType: 'Forespørselstype *',
          message: 'Melding *',
          urgency: 'Prioritetsnivå',
        },
        inquiryTypes: [
          { value: 'vendor-assessment', label: 'Leverandør Risikovurdering' },
          { value: 'security-questionnaire', label: 'Sikkerhetsspørreskjema' },
          { value: 'gdpr-compliance', label: 'GDPR-samsvar' },
          { value: 'audit-support', label: 'Revisjonstøtte' },
          { value: 'contract-review', label: 'Kontraktsgjennomgang' },
          {
            value: 'documentation-request',
            label: 'Dokumentasjonsforespørsel',
          },
          { value: 'incident-response', label: 'Sikkerhetshendelse' },
          { value: 'other', label: 'Annet' },
        ],
        urgencyLevels: [
          { value: 'low', label: 'Lav Prioritet (5 arbeidsdager)' },
          { value: 'normal', label: 'Normal Prioritet (2-3 arbeidsdager)' },
          { value: 'high', label: 'Høy Prioritet (24 timer)' },
          { value: 'urgent', label: 'Hastesaket (Samme dag respons)' },
        ],
        submit: 'Send inn Forespørsel',
        submitting: 'Sender inn...',
        success:
          'Takk! Din forespørsel har blitt sendt inn. Vi vil svare innen den spesifiserte tidsrammen.',
        error: 'Vennligst fyll ut alle obligatoriske felter.',
      },
      sla: {
        title: 'Responstid Forpliktelser',
        subtitle:
          'Vårt samsvarteam forplikter seg til retttidige svar basert på forespørselstype og prioritet.',
        commitments: [
          {
            type: 'Sikkerhetshendelser',
            time: 'Innen 2 timer',
            description:
              'Kritiske sikkerhetssaker som krever umiddelbar oppmerksomhet',
            coverage: '24/7 vaktordning sikkerhetsteam',
          },
          {
            type: 'Leverandørvurderinger',
            time: 'Innen 24 timer',
            description:
              'Sikkerhetsspørreskjemaer og leverandør risikoevaluering',
            coverage: 'Kontortid (9:00 - 18:00 CET)',
          },
          {
            type: 'GDPR-forespørsler',
            time: 'Innen 48 timer',
            description: 'Databeskyttelse og personvernsamsvarspørsmål',
            coverage: 'Kontortid med personvernombud tilgjengelighet',
          },
          {
            type: 'Generell Samsvar',
            time: 'Innen 72 timer',
            description:
              'Dokumentasjonsforespørsler og generelle samsvarsspørsmål',
            coverage: 'Standard kontortid respons',
          },
        ],
      },
      escalation: {
        title: 'Eskaleringsprosess',
        description:
          'Hvis du trenger å eskalere en samsvarssak eller ikke er fornøyd med den første responsen:',
        steps: [
          {
            step: '1',
            title: 'Primærkontakt',
            description:
              'Start med riktig teamkontakt basert på din forespørselstype.',
          },
          {
            step: '2',
            title: 'Teamleder Eskalering',
            description:
              'Hvis ikke løst innen SLA, eskaleres forespørselen automatisk til teamledere.',
          },
          {
            step: '3',
            title: 'Ledereskalering',
            description:
              'Kritiske saker kan eskaleres direkte til vår Chief Compliance Officer.',
          },
        ],
        executiveContact: {
          title: 'Ledereskalering',
          email: 'cco@praxisnavigator.io',
          name: 'Chief Compliance Officer',
          description:
            'For kritiske samsvarssaker som krever ledelsens oppmerksomhet.',
        },
      },
    },
  };

  const t = content[isNorwegian ? 'no' : 'en'];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // Defensive check for extension interference
    if (!e.target || !e.target.name) {
      console.warn('Invalid form event detected');
      return;
    }

    const { name, value } = e.target;

    try {
      setFormData(prev => ({ ...prev, [name]: value }));
    } catch (error) {
      console.error('Error handling input change:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.title ||
      !formData.company ||
      !formData.email ||
      !formData.inquiryType ||
      !formData.message
    ) {
      alert(t.form.error);
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real implementation, this would submit to your form handler
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (error) {
      // Log error in production to monitoring system if available
      if (typeof window !== 'undefined' && 'Sentry' in window) {
        (
          window as unknown as {
            Sentry: { captureException: (error: unknown) => void };
          }
        ).Sentry.captureException(error);
      }
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-16 lg:py-24 bg-praxis-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-praxis-gold bg-opacity-10 rounded-lg p-12">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="h2 text-praxis-dark-blue mb-4">
              {isNorwegian ? 'Forespørsel Sendt!' : 'Inquiry Submitted!'}
            </h2>
            <p className="body-base text-praxis-gray-600 mb-8">
              {t.form.success}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  title: '',
                  company: '',
                  email: '',
                  phone: '',
                  inquiryType: '',
                  message: '',
                  urgency: 'normal',
                });
              }}
              className="btn-primary"
            >
              {isNorwegian
                ? 'Send inn Ny Forespørsel'
                : 'Submit Another Inquiry'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-praxis-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="h2 text-praxis-dark-blue mb-4">{t.title}</h2>
          <p className="text-xl text-praxis-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-praxis-off-white rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="h6 text-praxis-dark-blue mb-3">{method.type}</h3>
              <p className="body-small text-praxis-gray-600 mb-4">
                {method.description}
              </p>

              <div className="mb-4">
                <a
                  href={`mailto:${method.email}`}
                  className="body-base text-praxis-dark-blue hover:text-praxis-gold focus-ring rounded block mb-2"
                >
                  {method.email}
                </a>
                <p className="body-small text-praxis-gray-500">
                  {isNorwegian ? 'Respons innen' : 'Response within'}{' '}
                  {method.responseTime}
                </p>
              </div>

              {/* Use Cases */}
              <div className="space-y-1">
                {method.use.map((useCase, useIndex) => (
                  <div
                    key={useIndex}
                    className="text-xs text-praxis-gray-500 bg-praxis-white rounded px-2 py-1"
                  >
                    {useCase}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inquiry Form */}
          <div>
            <div className="bg-praxis-off-white rounded-lg p-8">
              <h3 className="h3 text-praxis-dark-blue mb-4">{t.form.title}</h3>
              <p className="body-base text-praxis-gray-600 mb-6">
                {t.form.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block body-base text-praxis-black font-medium mb-2">
                      {t.form.fields.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-praxis-gray-300 rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block body-base text-praxis-black font-medium mb-2">
                      {t.form.fields.title}
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-praxis-gray-300 rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block body-base text-praxis-black font-medium mb-2">
                    {t.form.fields.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-praxis-gray-300 rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                    autoComplete="organization"
                    data-form-type="user-input"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block body-base text-praxis-black font-medium mb-2">
                      {t.form.fields.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleEmailChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent ${
                        emailError ? 'border-red-500' : 'border-praxis-gray-300'
                      }`}
                      autoComplete="email"
                      data-form-type="user-input"
                      required
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600">{emailError}</p>
                    )}
                  </div>
                  <div>
                    <label className="block body-base text-praxis-black font-medium mb-2">
                      {t.form.fields.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-praxis-gray-300 rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                      autoComplete="tel"
                      data-form-type="user-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block body-base text-praxis-black font-medium mb-2">
                      {t.form.fields.inquiryType}
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType || 'gdpr'}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-praxis-gray-300 rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                      required
                    >
                      <option value="">
                        {isNorwegian ? 'Velg type...' : 'Select type...'}
                      </option>
                      {t.form.inquiryTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block body-base text-praxis-black font-medium mb-2">
                      {t.form.fields.urgency}
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency || 'medium'}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-praxis-gray-300 rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                    >
                      {t.form.urgencyLevels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block body-base text-praxis-black font-medium mb-2">
                    {t.form.fields.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message || ''}
                    onChange={handleInputChange}
                    rows={6}
                    autoComplete="off"
                    data-form-type="user-input"
                    className="w-full px-4 py-3 border border-praxis-gray-300 rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                    placeholder={
                      isNorwegian
                        ? 'Beskriv din forespørsel i detalj...'
                        : 'Describe your inquiry in detail...'
                    }
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </button>
              </form>
            </div>
          </div>

          {/* SLA and Escalation */}
          <div className="space-y-8">
            {/* Response Time Commitments */}
            <div>
              <h3 className="h3 text-praxis-dark-blue mb-6">{t.sla.title}</h3>
              <p className="body-base text-praxis-gray-600 mb-6">
                {t.sla.subtitle}
              </p>

              <div className="space-y-4">
                {t.sla.commitments.map((commitment, index) => (
                  <div
                    key={index}
                    className="bg-praxis-white border border-praxis-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="h6 text-praxis-dark-blue">
                        {commitment.type}
                      </h4>
                      <span className="text-sm font-medium text-praxis-gold bg-praxis-gold bg-opacity-10 px-2 py-1 rounded">
                        {commitment.time}
                      </span>
                    </div>
                    <p className="body-small text-praxis-gray-600 mb-2">
                      {commitment.description}
                    </p>
                    <p className="body-small text-praxis-gray-500">
                      {commitment.coverage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Escalation Process */}
            <div>
              <h3 className="h3 text-praxis-dark-blue mb-4">
                {t.escalation.title}
              </h3>
              <p className="body-base text-praxis-gray-600 mb-6">
                {t.escalation.description}
              </p>

              <div className="space-y-4 mb-6">
                {t.escalation.steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-praxis-gold rounded-full flex items-center justify-center text-praxis-black font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="h6 text-praxis-dark-blue mb-1">
                        {step.title}
                      </h4>
                      <p className="body-small text-praxis-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Executive Contact */}
              <div className="bg-praxis-gold bg-opacity-10 rounded-lg p-6">
                <h4 className="h6 text-praxis-dark-blue mb-3">
                  {t.escalation.executiveContact.title}
                </h4>
                <div className="flex items-center mb-2">
                  <span className="body-base text-praxis-black font-medium mr-2">
                    {t.escalation.executiveContact.name}:
                  </span>
                  <a
                    href={`mailto:${t.escalation.executiveContact.email}`}
                    className="body-base text-praxis-dark-blue hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.escalation.executiveContact.email}
                  </a>
                </div>
                <p className="body-small text-praxis-gray-600">
                  {t.escalation.executiveContact.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
