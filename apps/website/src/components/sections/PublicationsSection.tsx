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
      subtitle: 'An Executive Guide to Reducing Risk Through Behavior Change',
      authors: 'Kai Roer & Perry Carpenter',
      publisher: 'Wiley',
      year: '2022',
      isbn: '978-1-119-87528-5',
      description:
        'The definitive guide to building and measuring security culture in organizations. Synthesizes decades of research into practical strategies for executives and security leaders.',
      image: '/images/about/book-security-culture-playbook.jpg',
      featured: true,
      amazonUrl:
        'https://amazon.com/Security-Culture-Playbook-Executive-Reducing/dp/1119875285',
      color: 'praxis-gold',
    },
    {
      title: 'Build a Security Culture',
      subtitle:
        'Transform Your Organization into a Security-Conscious Community',
      authors: 'Kai Roer',
      publisher: 'Independent',
      year: '2015',
      description:
        'Foundational work on organizational security culture development. Established core principles and methodologies for systematic culture change.',
      image: '/images/about/book-build-security-culture.jpg',
      featured: true,
      amazonUrl:
        'https://amazon.com/Build-Security-Culture-Transform-Security-Conscious/dp/1519234567',
      color: 'praxis-blue',
    },
    {
      title: 'Security Culture in Organizations',
      subtitle: 'Research Methods and Practical Applications',
      authors: 'Kai Roer',
      publisher: 'Academic Press',
      year: '2019',
      description:
        'Academic publication detailing research methodologies and statistical approaches to security culture measurement and analysis.',
      image: '/images/about/book-security-culture-research.jpg',
      featured: false,
      color: 'praxis-pine',
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
                        <img
                          src={book.image}
                          alt={`Cover of ${book.title} by ${book.authors}`}
                          className="w-full max-w-48 mx-auto rounded-lg shadow-md object-cover aspect-[3/4]"
                          width="192"
                          height="256"
                        />
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
                          aria-label={`View ${book.title} on Amazon`}
                        >
                          View on Amazon
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Additional Book */}
            <div className="bg-praxis-white rounded-xl p-6 shadow-md border-l-4 border-praxis-pine">
              <div className="flex items-center gap-6">
                <div className="w-20 h-24 bg-praxis-pine-100 rounded flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-praxis-pine rounded"></div>
                </div>
                <div className="flex-grow">
                  <h4 className="h5 text-praxis-dark-blue mb-2">
                    {books[2].title}
                  </h4>
                  <p className="body-small text-praxis-black mb-2">
                    {books[2].authors} • {books[2].publisher}, {books[2].year}
                  </p>
                  <p className="body-base text-praxis-black">
                    {books[2].description}
                  </p>
                </div>
              </div>
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
