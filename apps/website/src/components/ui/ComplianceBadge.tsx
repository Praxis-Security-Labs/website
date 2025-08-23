import React from 'react';

interface ComplianceCertification {
  id: string;
  name: string;
  displayName: string;
  badgeIcon: string;
  certificationDate: Date;
  expiryDate?: Date;
  scope: string;
  documentationUrl: string;
  isActive: boolean;
  description: string;
}

interface ComplianceBadgeProps {
  certification: ComplianceCertification;
  language?: 'en' | 'no';
  variant?: 'default' | 'compact';
  className?: string;
}

export const ComplianceBadge: React.FC<ComplianceBadgeProps> = ({
  certification,
  language = 'en',
  variant = 'default',
  className = '',
}) => {
  const content = {
    en: {
      certified: 'Certified',
      validUntil: 'Valid until',
      scope: 'Scope',
      viewCertificate: 'View Certificate',
      lastUpdated: 'Last updated',
      ongoing: 'Ongoing compliance',
    },
    no: {
      certified: 'Sertifisert',
      validUntil: 'Gyldig til',
      scope: 'Omfang',
      viewCertificate: 'Se Sertifikat',
      lastUpdated: 'Sist oppdatert',
      ongoing: 'Pågående compliance',
    },
  };

  const t = content[language];

  const handleBadgeClick = () => {
    // Track compliance badge interaction
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'compliance_badge_click', {
        certification_name: certification.name,
        certification_id: certification.id,
        language: language,
        page_location: window.location.href,
      });
    }

    // Open documentation in new tab
    window.open(
      certification.documentationUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'no' ? 'nb-NO' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const isExpiringSoon =
    certification.expiryDate &&
    certification.expiryDate.getTime() - Date.now() < 90 * 24 * 60 * 60 * 1000; // 90 days

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center space-x-2 bg-white border border-praxis-blue-200 rounded-lg px-3 py-2 hover:border-praxis-accent cursor-pointer transition-colors ${className}`}
        onClick={handleBadgeClick}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleBadgeClick()}
        aria-label={`${certification.displayName} ${t.certified}`}
      >
        <div className="text-xl" role="img" aria-label={certification.name}>
          {certification.badgeIcon}
        </div>
        <span className="text-sm font-medium text-praxis-dark-blue">
          {certification.displayName}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-xl border-2 border-praxis-blue-200 hover:border-praxis-accent p-6 cursor-pointer transition-all duration-200 hover:shadow-lg group ${className}`}
      onClick={handleBadgeClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleBadgeClick()}
      aria-label={`${certification.displayName} ${t.certified} - ${t.viewCertificate}`}
    >
      {/* Badge Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl" role="img" aria-label={certification.name}>
            {certification.badgeIcon}
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-praxis-dark-blue group-hover:text-praxis-accent transition-colors">
              {certification.displayName}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-praxis-blue-600">
                {t.certified}
              </span>
              {certification.isActive && (
                <div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  aria-label="Active certification"
                ></div>
              )}
            </div>
          </div>
        </div>

        <svg
          className="w-5 h-5 text-praxis-blue-400 group-hover:text-praxis-accent transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      {/* Description */}
      <p className="text-praxis-blue-700 text-sm mb-4 leading-relaxed">
        {certification.description}
      </p>

      {/* Certification Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-praxis-blue-600">{t.scope}:</span>
          <span className="text-praxis-dark-blue font-medium">
            {certification.scope}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-praxis-blue-600">{t.lastUpdated}:</span>
          <span className="text-praxis-dark-blue font-medium">
            {formatDate(certification.certificationDate)}
          </span>
        </div>

        {certification.expiryDate ? (
          <div className="flex justify-between items-center">
            <span className="text-praxis-blue-600">{t.validUntil}:</span>
            <span
              className={`font-medium ${isExpiringSoon ? 'text-orange-600' : 'text-praxis-dark-blue'}`}
            >
              {formatDate(certification.expiryDate)}
            </span>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <span className="text-praxis-blue-600">{t.validUntil}:</span>
            <span className="text-green-600 font-medium">{t.ongoing}</span>
          </div>
        )}
      </div>

      {/* CTA Footer */}
      <div className="mt-4 pt-4 border-t border-praxis-blue-100">
        <span className="text-praxis-accent font-medium text-sm group-hover:underline">
          {t.viewCertificate} →
        </span>
      </div>
    </div>
  );
};

export default ComplianceBadge;
