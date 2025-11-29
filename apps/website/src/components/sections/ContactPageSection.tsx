import React from 'react';
import { ContactForm } from '../forms/ContactForm';

interface ContactPageSectionProps {
  language?: 'en' | 'no';
}

export const ContactPageSection: React.FC<ContactPageSectionProps> = ({
  language = 'en',
}) => {
  const content = {
    en: {
      sectionTitle: 'Get In Touch',
      sectionDescription:
        "Choose the option that best fits your needs, and we'll get back to you within 24 hours.",
      generalForm: {
        title: 'General Inquiry',
      },
      speakingForm: {
        title: 'Speaking Request',
      },
    },
    no: {
      sectionTitle: 'Ta Kontakt',
      sectionDescription:
        'Velg alternativet som passer best for dine behov, så kommer vi tilbake til deg innen 24 timer.',
      generalForm: {
        title: 'Generell Henvendelse',
      },
      speakingForm: {
        title: 'Taleforespørsel',
      },
    },
  };

  const t = content[language];

  return (
    <section className="py-20 bg-white" id="consultation-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-gray">{t.sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* General Contact Form */}
          <ContactForm
            language={language}
            formType="general"
            title={t.generalForm.title}
          />

          {/* Speaking Request Form */}
          <ContactForm
            language={language}
            formType="speaking"
            title={t.speakingForm.title}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
