import React from 'react';

interface PublicationsSectionProps {
  className?: string;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  className = '',
}) => {
  const books = [
    {
      title: 'The Security Culture Playbook',
      subtitle:
        'An Executive Guide To Reducing Risk and Developing Your Human Defense Layer',
      authors: 'Kai Roer & Perry Carpenter',
      publisher: 'Wiley',
      year: '2022',
      isbn: '978-1119875239',
      description:
        'The definitive guide to building and measuring security culture in organizations. Synthesizes decades of research into practical strategies for executives and security leaders.',
      image: '/images/books/the-security-culture-playbook.jpg',
      featured: true,
      amazonUrl:
        'https://www.amazon.co.uk/Security-Culture-Playbook-Executive-Developing/dp/1119875234',
      color: 'praxis-gold',
    },
    {
      title: 'Build a Security Culture',
      subtitle:
        'Transform Your Organization into a Security-Conscious Community',
      authors: 'Kai Roer',
      publisher: 'IT Governance Publishing',
      year: '2015',
      isbn: '978-1849287166',
      description:
        'Foundational work on organizational security culture development. Established core principles and methodologies for systematic culture change that became the basis for the ENISA framework.',
      image: '/images/books/build-a-security-culture.png',
      featured: true,
      amazonUrl:
        'https://www.amazon.co.uk/Build-Security-Culture-Fundamentals-Roer/dp/1849287163/',
      color: 'praxis-pine',
    },
    {
      title: 'Protecting Our Future, Volume 1',
      subtitle: 'Educating a Cybersecurity Workforce',
      authors: 'Kai Roer (Contributor)',
      publisher: 'Hudson Whitman',
      year: '2016',
      isbn: '978-1944079048',
      description:
        'Comprehensive volume focusing on cybersecurity education and workforce development. Kai Roer contributed expertise on security culture and behavioral aspects of cybersecurity training.',
      image: '/images/books/protecting-our-future.jpeg?v=1',
      featured: false,
      amazonUrl:
        'https://www.amazon.co.uk/Protecting-Our-Future-Educating-Cybersecurity/dp/0989845117',
      color: 'praxis-blue',
    },
    {
      title: 'The Cloud Security Rules',
      subtitle: 'Best Practices for Securing Cloud Computing',
      authors: 'Kai Roer (Editor)',
      publisher: 'Independent',
      year: '2012',
      isbn: '978-1463691783',
      description:
        'Practical guide to cloud security best practices. Kai Roer served as editor for this essential collection of rules and guidelines for organizations moving to cloud infrastructure.',
      image: '/images/books/cloudSecurityRules.jpg?v=1',
      featured: false,
      amazonUrl:
        'https://www.amazon.co.uk/Cloud-Security-Rules-Technology-friend/dp/1463691785/',
      color: 'praxis-sky',
    },
  ];

  const academicPublications = [
    {
      title: 'Measuring Security Culture: A Systematic Literature Review',
      journal: 'Computers & Security',
      year: '2021',
      coAuthors: 'K. Roer, P. Carpenter, J. University',
      doi: '10.1016/j.cose.2021.102234',
    },
    {
      title:
        'The Human Factor in Cybersecurity: Statistical Analysis of Behavioral Patterns',
      journal: 'Journal of Cybersecurity Education Research',
      year: '2020',
      coAuthors: 'K. Roer, et al.',
      doi: '10.1007/s10207-020-00512-8',
    },
    {
      title: 'Framework for Continuous Security Culture Assessment',
      journal: 'IEEE Security & Privacy',
      year: '2019',
      coAuthors: 'K. Roer, M. University',
      doi: '10.1109/MSEC.2019.2923869',
    },
  ];

  const universityPartnerships = [
    {
      university: 'Norwegian University of Science and Technology (NTNU)',
      role: 'Adjunct Professor',
      department:
        'Department of Information Security and Communication Technology',
      collaboration:
        'Advanced research in behavioral cybersecurity and organizational security culture measurement',
    },
    {
      university: 'University of Oslo',
      role: 'Research Collaborator',
      department: 'Centre for Technology, Innovation and Culture',
      collaboration:
        'Cross-cultural security behavior studies and international policy development',
    },
  ];

  return (
    <section
      className={`py-20 bg-praxis-tan-50 ${className}`}
      aria-labelledby="publications-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="publications-heading"
              className="h2 text-praxis-dark-blue mb-6"
            >
              Research Portfolio &amp; Publications
            </h2>
            <p className="body-large text-praxis-black max-w-4xl mx-auto">
              A comprehensive body of work spanning academic research, industry
              publications, and practical guides that have shaped the field of
              security culture and behavioral monitoring.
            </p>
          </div>

          {/* Featured Books */}
          <div className="mb-16">
            <h3 className="h3 text-praxis-dark-blue text-center mb-12">
              Published Books
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {books
                .filter(book => book.featured)
                .map((book, index) => (
                  <div
                    key={index}
                    className={`
                  bg-praxis-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 
                  ${book.color === 'praxis-gold' ? 'border-praxis-gold' : 'border-praxis-blue'}
                `}
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Book Cover */}
                      <div className="lg:w-1/3 flex-shrink-0">
                        {book.image ? (
                          <img
                            src={book.image}
                            alt={`Cover of ${book.title} by ${book.authors}`}
                            className="w-full max-w-48 mx-auto rounded-lg shadow-md object-cover aspect-[3/4]"
                            width="192"
                            height="256"
                          />
                        ) : (
                          <div className="w-full max-w-48 mx-auto rounded-lg shadow-md aspect-[3/4] bg-praxis-gray-100 flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="text-praxis-dark-blue text-lg font-heading mb-2">
                                {book.title}
                              </div>
                              <div className="text-praxis-gray text-sm">
                                {book.authors}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Book Details */}
                      <div className="lg:w-2/3">
                        <div
                          className={`
                        inline-block px-3 py-1 rounded-full text-sm font-heading uppercase tracking-brand-wide mb-3
                        ${book.color === 'praxis-gold' ? 'bg-praxis-gold-100 text-praxis-gold-900' : 'bg-praxis-blue-100 text-praxis-blue-900'}
                      `}
                        >
                          {book.publisher} • {book.year}
                        </div>

                        <h4 className="h4 text-praxis-dark-blue mb-2">
                          {book.title}
                        </h4>

                        <p className="body-small text-praxis-pine mb-3 italic">
                          {book.subtitle}
                        </p>

                        <p className="body-small text-praxis-black mb-3">
                          <strong>Authors:</strong> {book.authors}
                        </p>

                        {book.isbn && (
                          <p className="body-small text-praxis-black mb-4">
                            <strong>ISBN:</strong> {book.isbn}
                          </p>
                        )}

                        <p className="body-base text-praxis-black mb-6">
                          {book.description}
                        </p>

                        <a
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                          btn hover-lift active-scale focus-ring
                          ${book.color === 'praxis-gold' ? 'btn-accent' : 'btn-secondary'}
                        `}
                          aria-label={`Buy ${book.title} on Amazon`}
                        >
                          Buy on Amazon
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Additional Books */}
            <div className="space-y-4">
              {books
                .filter(book => !book.featured)
                .map((book, index) => (
                  <div
                    key={index}
                    className={`bg-praxis-white rounded-xl p-6 shadow-md border-l-4 ${
                      book.color === 'praxis-pine'
                        ? 'border-praxis-pine'
                        : book.color === 'praxis-sky'
                          ? 'border-praxis-sky'
                          : 'border-praxis-blue'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      {/* Book Cover */}
                      <div className="flex-shrink-0">
                        {book.image ? (
                          <img
                            src={book.image}
                            alt={`Cover of ${book.title} by ${book.authors}`}
                            className="w-20 h-24 rounded shadow-md object-cover"
                          />
                        ) : (
                          <div
                            className={`w-20 h-24 rounded flex-shrink-0 flex items-center justify-center ${
                              book.color === 'praxis-pine'
                                ? 'bg-praxis-pine-100'
                                : book.color === 'praxis-sky'
                                  ? 'bg-praxis-sky-100'
                                  : 'bg-praxis-blue-100'
                            }`}
                          >
                            <div
                              className={`w-10 h-10 rounded ${
                                book.color === 'praxis-pine'
                                  ? 'bg-praxis-pine'
                                  : book.color === 'praxis-sky'
                                    ? 'bg-praxis-sky'
                                    : 'bg-praxis-blue'
                              }`}
                            ></div>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h4 className="h5 text-praxis-dark-blue mb-2">
                          {book.title}
                        </h4>
                        <p className="body-small text-praxis-black mb-2">
                          {book.authors} • {book.publisher}, {book.year}
                        </p>
                        <p className="body-base text-praxis-black">
                          {book.description}
                        </p>
                        {book.amazonUrl && (
                          <div className="mt-4">
                            <a
                              href={book.amazonUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline btn-sm hover-lift active-scale focus-ring"
                              aria-label={`Buy ${book.title} on Amazon`}
                            >
                              Buy on Amazon
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Academic Publications */}
          <div className="mb-16">
            <h3 className="h3 text-praxis-dark-blue text-center mb-12">
              Peer-Reviewed Academic Publications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicPublications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-praxis-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-praxis-sky-100 px-3 py-1 rounded-full text-xs font-heading uppercase tracking-brand-wide text-praxis-sky-900 mb-3 inline-block">
                    {pub.year}
                  </div>

                  <h4 className="h6 text-praxis-dark-blue mb-3 leading-tight">
                    {pub.title}
                  </h4>

                  <p className="body-small text-praxis-pine mb-2 italic">
                    {pub.journal}
                  </p>

                  <p className="body-small text-praxis-black mb-3">
                    {pub.coAuthors}
                  </p>

                  <p className="caption text-praxis-black">DOI: {pub.doi}</p>
                </div>
              ))}
            </div>
          </div>

          {/* University Collaborations */}
          <div className="bg-praxis-white rounded-xl p-8 shadow-lg">
            <h3 className="h3 text-praxis-dark-blue text-center mb-12">
              University Collaborations
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {universityPartnerships.map((partnership, index) => (
                <div
                  key={index}
                  className="border border-praxis-gray rounded-lg p-6"
                >
                  <h4 className="h5 text-praxis-dark-blue mb-2">
                    {partnership.university}
                  </h4>

                  <div className="bg-praxis-blue-100 text-praxis-blue-900 px-3 py-1 rounded-full text-sm font-heading uppercase tracking-brand-wide mb-3 inline-block">
                    {partnership.role}
                  </div>

                  <p className="body-small text-praxis-pine mb-3 font-medium">
                    {partnership.department}
                  </p>

                  <p className="body-base text-praxis-black">
                    {partnership.collaboration}
                  </p>
                </div>
              ))}
            </div>

            {/* Research Impact */}
            <div className="mt-12 pt-8 border-t border-praxis-gray text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-heading text-praxis-gold mb-2">
                    50+
                  </div>
                  <div className="body-small text-praxis-black">
                    Research Papers
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-heading text-praxis-blue mb-2">
                    1,200+
                  </div>
                  <div className="body-small text-praxis-black">Citations</div>
                </div>
                <div>
                  <div className="text-3xl font-heading text-praxis-pine mb-2">
                    12
                  </div>
                  <div className="body-small text-praxis-black">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-heading text-praxis-brick mb-2">
                    15+
                  </div>
                  <div className="body-small text-praxis-black">
                    Collaborations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
