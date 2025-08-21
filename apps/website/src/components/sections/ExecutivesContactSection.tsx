import React from 'react';
export const ExecutivesContactSection: React.FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => (
  <section className="bg-praxis-blue-50 py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-heading font-bold text-praxis-dark-blue">
        {language === 'no'
          ? 'Kontakt Lederskap Team'
          : 'Contact Executive Team'}
      </h2>
    </div>
  </section>
);
