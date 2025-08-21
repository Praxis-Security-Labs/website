import React from 'react';
import { segments } from '../../i18n/segments';

export const ExecutivesContactSection: React.FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const t = segments[language].common.contact;

  return (
    <section className="bg-praxis-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-praxis-dark-blue">
          {t.executives}
        </h2>
      </div>
    </section>
  );
};
