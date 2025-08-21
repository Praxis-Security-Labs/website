import React from 'react';
import { pages } from '../../i18n/pages';

export const ResourceHubSection: React.FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const t = pages[language].resources.hub;

  return (
    <section className="bg-praxis-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-praxis-dark-blue">
          {t.title}
        </h2>
        <p className="text-lg text-praxis-dark-blue-600 mt-4">{t.subtitle}</p>
      </div>
    </section>
  );
};
