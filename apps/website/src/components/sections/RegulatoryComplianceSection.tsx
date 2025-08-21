import React from 'react';

interface RegulatoryComplianceSectionProps {
  language?: 'en' | 'no';
}

export const RegulatoryComplianceSection: React.FC<
  RegulatoryComplianceSectionProps
> = ({ language = 'en' }) => {
  return (
    <section className="bg-praxis-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-praxis-dark-blue mb-6">
            {language === 'no'
              ? 'Regulatorisk Compliance'
              : 'Regulatory Compliance'}
          </h2>
          <p className="text-xl text-praxis-dark-blue-600">
            {language === 'no'
              ? 'NIS2, SOX og andre compliance frameworks'
              : 'NIS2, SOX and other compliance frameworks'}
          </p>
        </div>
      </div>
    </section>
  );
};
