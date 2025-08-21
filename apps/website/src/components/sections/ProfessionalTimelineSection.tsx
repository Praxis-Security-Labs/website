import React from 'react';

interface ProfessionalTimelineSectionProps {
  className?: string;
}

export const ProfessionalTimelineSection: React.FC<
  ProfessionalTimelineSectionProps
> = ({ className = '' }) => {
  const timelineEvents = [
    {
      year: '1998',
      title: 'The Roer Group Founded',
      description:
        'Established consultancy focusing on human factors in information security, pioneering early work in security awareness and culture.',
      color: 'praxis-pine',
    },
    {
      year: '2010',
      title: 'Security Culture Framework Development',
      description:
        'Created the open-source Security Culture Framework, providing the first systematic approach to measuring organizational security culture.',
      color: 'praxis-blue',
    },
    {
      year: '2014',
      title: 'CLTRe Platform Creation',
      description:
        'Developed the world&apos;s first security culture measurement SaaS platform, introducing continuous behavioral monitoring concepts.',
      color: 'praxis-gold',
    },
    {
      year: '2015',
      title: 'Published "Build a Security Culture"',
      description:
        'Authored seminal work on organizational security culture development, establishing foundational principles still used today.',
      color: 'praxis-brick',
    },
    {
      year: '2018',
      title: 'CLTRe Acquired by KnowBe4',
      description:
        'Successful acquisition validated security culture measurement market. Platform integrated into world&apos;s largest security awareness ecosystem.',
      color: 'praxis-tan',
    },
    {
      year: '2019-2023',
      title: 'Chief Research Officer, KnowBe4',
      description:
        'Led global research initiatives, expanding security culture measurement to millions of users worldwide and establishing industry standards.',
      color: 'praxis-sky',
    },
    {
      year: '2022',
      title: 'Co-authored "The Security Culture Playbook"',
      description:
        'Published definitive guide with Perry Carpenter (Wiley), synthesizing decades of research into practical implementation strategies.',
      color: 'praxis-blue',
    },
    {
      year: '2024',
      title: 'Praxis Navigator Innovation',
      description:
        'Launched next-generation behavioral monitoring platform leveraging Microsoft Graph API for passive, continuous security culture measurement.',
      color: 'praxis-gold',
    },
  ];

  return (
    <section
      className={`py-20 bg-praxis-white ${className}`}
      aria-labelledby="timeline-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 id="timeline-heading" className="h2 text-praxis-dark-blue mb-6">
              A Journey of Innovation in Security Culture
            </h2>
            <p className="body-large text-praxis-brown max-w-3xl mx-auto">
              From early consultancy work to leading global research
              initiatives, Kai&apos;s professional journey shows consistent
              innovation in security culture measurement and behavioral
              monitoring.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-praxis-gray"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div
                    className={`
                    relative z-10 flex-shrink-0 w-16 h-16 rounded-full 
                    flex items-center justify-center shadow-lg
                    ${event.color === 'praxis-pine' ? 'bg-praxis-pine-100' : ''}
                    ${event.color === 'praxis-blue' ? 'bg-praxis-blue-100' : ''}
                    ${event.color === 'praxis-gold' ? 'bg-praxis-gold-100' : ''}
                    ${event.color === 'praxis-brick' ? 'bg-praxis-brick-100' : ''}
                    ${event.color === 'praxis-tan' ? 'bg-praxis-tan-100' : ''}
                    ${event.color === 'praxis-sky' ? 'bg-praxis-sky-100' : ''}
                  `}
                  >
                    <div
                      className={`
                      w-8 h-8 rounded-full 
                      ${event.color === 'praxis-pine' ? 'bg-praxis-pine' : ''}
                      ${event.color === 'praxis-blue' ? 'bg-praxis-blue' : ''}
                      ${event.color === 'praxis-gold' ? 'bg-praxis-gold' : ''}
                      ${event.color === 'praxis-brick' ? 'bg-praxis-brick' : ''}
                      ${event.color === 'praxis-tan' ? 'bg-praxis-tan' : ''}
                      ${event.color === 'praxis-sky' ? 'bg-praxis-sky' : ''}
                    `}
                    ></div>
                  </div>

                  {/* Timeline Content */}
                  <div className="ml-8 flex-grow">
                    <div className="bg-praxis-white border border-praxis-gray rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      {/* Year Badge */}
                      <div className="inline-block bg-praxis-dark-blue text-praxis-white px-3 py-1 rounded-full text-sm font-heading uppercase tracking-brand-wide mb-3">
                        {event.year}
                      </div>

                      {/* Title */}
                      <h3 className="h4 text-praxis-dark-blue mb-3">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="body-base text-praxis-brown">
                        {event.description}
                      </p>

                      {/* Progress Indicator for Current Innovation */}
                      {event.year === '2024' && (
                        <div className="mt-4 flex items-center text-praxis-gold">
                          <div className="w-2 h-2 bg-praxis-gold rounded-full mr-2 animate-pulse"></div>
                          <span className="text-sm font-heading uppercase tracking-brand-wide">
                            Current Innovation
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Evolution Summary */}
          <div className="mt-16 bg-praxis-sky-50 rounded-xl p-8 text-center">
            <h3 className="h3 text-praxis-dark-blue mb-6">
              Evolution from Theory to Practice
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="w-16 h-16 bg-praxis-pine-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-praxis-pine rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-3">
                  Early Research
                </h4>
                <p className="body-small text-praxis-brown">
                  Foundational work in human factors and security awareness
                  (1998-2010)
                </p>
              </div>
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="w-16 h-16 bg-praxis-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-praxis-blue rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-3">
                  Framework Creation
                </h4>
                <p className="body-small text-praxis-brown">
                  Systematic measurement approaches and platform development
                  (2010-2020)
                </p>
              </div>
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="w-16 h-16 bg-praxis-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-praxis-gold rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-3">
                  Modern Innovation
                </h4>
                <p className="body-small text-praxis-brown">
                  Advanced behavioral monitoring with Microsoft Graph API
                  integration (2020-Present)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
