import React from 'react';
export const TeamPerformanceSection: React.FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => (
  <section className="bg-praxis-white py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-heading font-bold text-praxis-dark-blue">
        {language === 'no' ? 'Team Ytelse' : 'Team Performance'}
      </h2>
    </div>
  </section>
);
