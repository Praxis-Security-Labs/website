import React, { useState } from 'react';

interface DataFlowDiagramProps {
  language?: 'en' | 'no';
  className?: string;
}

export const DataFlowDiagram: React.FC<DataFlowDiagramProps> = ({
  language = 'en',
  className = '',
}) => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  const content = {
    en: {
      title: 'Data Flow & Security Architecture',
      subtitle:
        'See how your data flows through our secure, Microsoft 365-native platform',
      steps: [
        {
          id: 'collection',
          title: 'Data Collection',
          description: 'Read-only access to Microsoft Graph',
          icon: '🔍',
          position: { x: 10, y: 50 },
          details: [
            'Microsoft Graph API read-only permissions',
            'No access to email content or documents',
            'Security logs and metadata only',
            'User consent required for all access',
          ],
        },
        {
          id: 'transmission',
          title: 'Secure Transmission',
          description: 'Encrypted data transfer',
          icon: '🔐',
          position: { x: 35, y: 25 },
          details: [
            'TLS 1.3 encryption in transit',
            'Certificate pinning for enhanced security',
            'No data cached during transmission',
            'Direct Microsoft to Praxis connection',
          ],
        },
        {
          id: 'processing',
          title: 'Analytics Processing',
          description: 'Behavioral pattern analysis',
          icon: '⚡',
          position: { x: 60, y: 50 },
          details: [
            'Anonymized behavioral pattern analysis',
            'No personally identifiable information stored',
            'EU/Regional data processing compliance',
            'SOC 2 Type II certified infrastructure',
          ],
        },
        {
          id: 'storage',
          title: 'Secure Storage',
          description: 'Encrypted data at rest',
          icon: '🛡️',
          position: { x: 85, y: 75 },
          details: [
            'AES-256 encryption at rest',
            'Geographic data residency compliance',
            'Automated backup and recovery',
            'Role-based access controls',
          ],
        },
        {
          id: 'access',
          title: 'Controlled Access',
          description: 'Dashboard and reporting',
          icon: '📊',
          position: { x: 60, y: 90 },
          details: [
            'Multi-factor authentication required',
            'Role-based permission system',
            'Audit logs for all data access',
            'Session management and timeout',
          ],
        },
      ],
      closeDetails: 'Close Details',
      learnMore: 'Learn More About Our Security',
    },
    no: {
      title: 'Dataflyt & Sikkerhetsarkitektur',
      subtitle:
        'Se hvordan dine data flyter gjennom vår sikre, Microsoft 365-native plattform',
      steps: [
        {
          id: 'collection',
          title: 'Datainnsamling',
          description: 'Skrivebeskyttet tilgang til Microsoft Graph',
          icon: '🔍',
          position: { x: 10, y: 50 },
          details: [
            'Microsoft Graph API skrivebeskyttede tillatelser',
            'Ingen tilgang til e-postinnhold eller dokumenter',
            'Kun sikkerhetslogger og metadata',
            'Brukersamtykke påkrevd for all tilgang',
          ],
        },
        {
          id: 'transmission',
          title: 'Sikker Overføring',
          description: 'Kryptert dataoverføring',
          icon: '🔐',
          position: { x: 35, y: 25 },
          details: [
            'TLS 1.3 kryptering under transport',
            'Sertifikat pinning for økt sikkerhet',
            'Ingen data bufret under overføring',
            'Direkte Microsoft til Praxis forbindelse',
          ],
        },
        {
          id: 'processing',
          title: 'Analytisk Prosessering',
          description: 'Atferdsmønster analyse',
          icon: '⚡',
          position: { x: 60, y: 50 },
          details: [
            'Anonymisert atferdsmønster analyse',
            'Ingen personlig identifiserbar informasjon lagret',
            'EU/Regional dataprosessering compliance',
            'SOC 2 Type II sertifisert infrastruktur',
          ],
        },
        {
          id: 'storage',
          title: 'Sikker Lagring',
          description: 'Krypterte data i hvile',
          icon: '🛡️',
          position: { x: 85, y: 75 },
          details: [
            'AES-256 kryptering i hvile',
            'Geografisk data residens compliance',
            'Automatisert backup og gjenoppretting',
            'Rollebasert tilgangskontroll',
          ],
        },
        {
          id: 'access',
          title: 'Kontrollert Tilgang',
          description: 'Dashboard og rapportering',
          icon: '📊',
          position: { x: 60, y: 90 },
          details: [
            'Multifaktor autentisering påkrevd',
            'Rollebasert tillatelsessystem',
            'Revisjonslogger for all datatilgang',
            'Sesjonshåndtering og timeout',
          ],
        },
      ],
      closeDetails: 'Lukk Detaljer',
      learnMore: 'Lær Mer Om Vår Sikkerhet',
    },
  };

  const t = content[language];

  const handleStepClick = (stepId: string) => {
    setSelectedStep(selectedStep === stepId ? null : stepId);

    // Track interaction analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'data_flow_step_click', {
        step_id: stepId,
        step_title: t.steps.find(s => s.id === stepId)?.title,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  const selectedStepData = selectedStep
    ? t.steps.find(s => s.id === selectedStep)
    : null;

  return (
    <div
      className={`bg-gradient-to-br from-praxis-blue-50 to-white rounded-2xl p-8 ${className}`}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-praxis-dark-blue mb-4">
          {t.title}
        </h3>
        <p className="text-praxis-blue-700 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Interactive Diagram */}
      <div className="relative">
        {/* SVG Diagram Container */}
        <div className="relative bg-white rounded-xl border border-praxis-blue-200 p-8 mb-8 overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-64 md:h-80"
            role="img"
            aria-label={t.title}
          >
            {/* Connection Lines */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  className="fill-praxis-blue-400"
                />
              </marker>
            </defs>

            {/* Draw connections between steps */}
            <g className="opacity-60">
              <line
                x1="15"
                y1="50"
                x2="30"
                y2="30"
                stroke="#6B7280"
                strokeWidth="0.5"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="40"
                y1="30"
                x2="55"
                y2="45"
                stroke="#6B7280"
                strokeWidth="0.5"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="65"
                y1="55"
                x2="80"
                y2="70"
                stroke="#6B7280"
                strokeWidth="0.5"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="80"
                y1="80"
                x2="65"
                y2="85"
                stroke="#6B7280"
                strokeWidth="0.5"
                markerEnd="url(#arrowhead)"
              />
            </g>

            {/* Interactive Step Circles */}
            {t.steps.map(step => {
              const isSelected = selectedStep === step.id;

              return (
                <g key={step.id}>
                  <circle
                    cx={step.position.x}
                    cy={step.position.y}
                    r="4"
                    className={`cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'fill-praxis-accent stroke-praxis-accent-dark stroke-2'
                        : 'fill-praxis-blue hover:fill-praxis-accent stroke-praxis-blue-dark stroke-1'
                    }`}
                    onClick={() => handleStepClick(step.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${step.title}: ${step.description}`}
                  />

                  {/* Step Label */}
                  <text
                    x={step.position.x}
                    y={step.position.y - 6}
                    textAnchor="middle"
                    className="text-xs fill-praxis-dark-blue font-medium pointer-events-none"
                  >
                    {step.icon}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {t.steps.map(step => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`text-left p-3 rounded-lg border transition-all duration-200 ${
                  selectedStep === step.id
                    ? 'border-praxis-accent bg-praxis-accent bg-opacity-10'
                    : 'border-praxis-blue-200 hover:border-praxis-accent bg-white'
                }`}
              >
                <div className="text-lg mb-1">{step.icon}</div>
                <div className="text-sm font-medium text-praxis-dark-blue mb-1">
                  {step.title}
                </div>
                <div className="text-xs text-praxis-blue-600">
                  {step.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Step Details */}
        {selectedStepData && (
          <div className="bg-praxis-accent bg-opacity-10 border border-praxis-accent rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{selectedStepData.icon}</div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-praxis-dark-blue">
                    {selectedStepData.title}
                  </h4>
                  <p className="text-praxis-blue-700">
                    {selectedStepData.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStep(null)}
                className="text-praxis-blue-600 hover:text-praxis-accent transition-colors"
                aria-label={t.closeDetails}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="space-y-2">
              {selectedStepData.details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg
                    className="w-4 h-4 text-praxis-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-praxis-dark-blue">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learn More CTA */}
        <div className="text-center mt-8">
          <a
            href={language === 'no' ? '/no/compliance' : '/compliance'}
            className="btn-secondary btn-md inline-flex items-center"
          >
            {t.learnMore}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataFlowDiagram;
