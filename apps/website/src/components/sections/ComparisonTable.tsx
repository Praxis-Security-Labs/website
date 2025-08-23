import React, { useState } from 'react';

// Type definitions for feature comparison
interface FeatureComparison {
  feature: string;
  category: string;
  praxisSupport: 'full' | 'partial' | 'none' | 'unique';
  competitorSupport: 'full' | 'partial' | 'none';
  notes?: string;
  importance: 'high' | 'medium' | 'low';
  tooltip?: string;
}

interface ComparisonTableProps {
  competitorName: string;
  competitorLogo: string;
  features: FeatureComparison[];
  language?: 'en' | 'no';
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  competitorName,
  competitorLogo,
  features,
  language = 'en',
  className = '',
}) => {
  const [sortBy, setSortBy] = useState<string>('category');
  const [filterBy, setFilterBy] = useState<string>('all');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const content = {
    en: {
      title: 'Feature Comparison',
      subtitle: `Detailed comparison between Praxis Navigator and ${competitorName}`,
      praxisName: 'Praxis Navigator',
      sortLabel: 'Sort by:',
      filterLabel: 'Filter:',
      categoryLabel: 'Category',
      featureLabel: 'Feature',
      importance: 'Importance',
      sortOptions: {
        category: 'Category',
        feature: 'Feature Name',
        importance: 'Importance',
      },
      filterOptions: {
        all: 'All Features',
        high: 'High Priority',
        medium: 'Medium Priority',
        low: 'Low Priority',
        unique: 'Praxis Unique',
        advantage: 'Praxis Advantage',
      },
      supportLevel: {
        full: 'Full Support',
        partial: 'Partial Support',
        none: 'Not Supported',
        unique: 'Unique to Praxis',
      },
      legend: 'Legend',
      disclaimer: `Feature comparison based on publicly available information as of ${new Date().toLocaleDateString()}. Please verify details directly with ${competitorName}.`,
    },
    no: {
      title: 'Funksjonssammenligning',
      subtitle: `Detaljert sammenligning mellom Praxis Navigator og ${competitorName}`,
      praxisName: 'Praxis Navigator',
      sortLabel: 'Sorter etter:',
      filterLabel: 'Filtrer:',
      categoryLabel: 'Kategori',
      featureLabel: 'Funksjon',
      importance: 'Viktighet',
      sortOptions: {
        category: 'Kategori',
        feature: 'Funksjonsnavn',
        importance: 'Viktighet',
      },
      filterOptions: {
        all: 'Alle Funksjoner',
        high: 'Høy Prioritet',
        medium: 'Medium Prioritet',
        low: 'Lav Prioritet',
        unique: 'Praxis Unik',
        advantage: 'Praxis Fordel',
      },
      supportLevel: {
        full: 'Full Støtte',
        partial: 'Delvis Støtte',
        none: 'Ikke Støttet',
        unique: 'Unik for Praxis',
      },
      legend: 'Forklaring',
      disclaimer: `Funksjonssammenligning basert på offentlig tilgjengelig informasjon per ${new Date().toLocaleDateString()}. Vennligst verifiser detaljer direkte med ${competitorName}.`,
    },
  };

  const t = content[language];

  // Filter and sort features
  const filteredFeatures = features.filter(feature => {
    if (filterBy === 'all') return true;
    if (filterBy === 'high' || filterBy === 'medium' || filterBy === 'low') {
      return feature.importance === filterBy;
    }
    if (filterBy === 'unique') {
      return feature.praxisSupport === 'unique';
    }
    if (filterBy === 'advantage') {
      return (
        feature.praxisSupport === 'full' && feature.competitorSupport !== 'full'
      );
    }
    return true;
  });

  const sortedFeatures = filteredFeatures.sort((a, b) => {
    switch (sortBy) {
      case 'category':
        return a.category.localeCompare(b.category);
      case 'feature':
        return a.feature.localeCompare(b.feature);
      case 'importance': {
        const importanceOrder = { high: 3, medium: 2, low: 1 };
        return importanceOrder[b.importance] - importanceOrder[a.importance];
      }
      default:
        return 0;
    }
  });

  // Support level icons and colors
  const getSupportIcon = (level: string) => {
    switch (level) {
      case 'full':
        return { icon: '✅', color: 'text-green-600' };
      case 'partial':
        return { icon: '🟡', color: 'text-yellow-600' };
      case 'none':
        return { icon: '❌', color: 'text-red-600' };
      case 'unique':
        return { icon: '⭐', color: 'text-praxis-accent' };
      default:
        return { icon: '❓', color: 'text-gray-500' };
    }
  };

  // Track table interactions
  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'comparison_table_sort', {
        sort_by: sortOption,
        competitor: competitorName,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  const handleFilter = (filterOption: string) => {
    setFilterBy(filterOption);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'comparison_table_filter', {
        filter_by: filterOption,
        competitor: competitorName,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  const handleTooltip = (featureName: string | null) => {
    setActiveTooltip(featureName);

    if (featureName && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'comparison_feature_tooltip', {
        feature_name: featureName,
        competitor: competitorName,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-praxis-blue-200 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-praxis-blue-50 to-white p-6">
        <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-2">
          {t.title}
        </h3>
        <p className="text-praxis-blue-700">{t.subtitle}</p>
      </div>

      {/* Controls */}
      <div className="p-6 border-b border-praxis-blue-100">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Sort Controls */}
          <div className="flex items-center space-x-3">
            <label className="text-sm font-medium text-praxis-dark-blue">
              {t.sortLabel}
            </label>
            <select
              value={sortBy}
              onChange={e => handleSort(e.target.value)}
              className="px-3 py-2 border border-praxis-blue-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-praxis-accent"
            >
              {Object.entries(t.sortOptions).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center space-x-3">
            <label className="text-sm font-medium text-praxis-dark-blue">
              {t.filterLabel}
            </label>
            <select
              value={filterBy}
              onChange={e => handleFilter(e.target.value)}
              className="px-3 py-2 border border-praxis-blue-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-praxis-accent"
            >
              {Object.entries(t.filterOptions).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 p-4 bg-praxis-blue-50 rounded-lg">
          <h4 className="text-sm font-semibold text-praxis-dark-blue mb-2">
            {t.legend}:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            {Object.entries(t.supportLevel).map(([level, label]) => {
              const { icon, color } = getSupportIcon(level);
              return (
                <div key={level} className="flex items-center space-x-1">
                  <span className={color}>{icon}</span>
                  <span className="text-praxis-blue-700">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-praxis-blue-50">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-praxis-dark-blue">
                {t.featureLabel}
              </th>
              <th className="text-center py-4 px-6 font-semibold text-praxis-dark-blue">
                {t.praxisName}
              </th>
              <th className="text-center py-4 px-6 font-semibold text-praxis-dark-blue">
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src={competitorLogo}
                    alt={`${competitorName} logo`}
                    className="h-6 w-auto"
                  />
                  <span>{competitorName}</span>
                </div>
              </th>
              <th className="text-center py-4 px-6 font-semibold text-praxis-dark-blue">
                {t.importance}
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {sortedFeatures.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-8 text-praxis-blue-600"
                >
                  No features match the current filter.
                </td>
              </tr>
            ) : (
              sortedFeatures.map((feature, index) => {
                const praxisSupport = getSupportIcon(feature.praxisSupport);
                const competitorSupport = getSupportIcon(
                  feature.competitorSupport
                );

                return (
                  <tr
                    key={index}
                    className="border-b border-praxis-blue-100 hover:bg-praxis-blue-50 transition-colors"
                  >
                    {/* Feature Name */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-praxis-dark-blue">
                          {feature.feature}
                        </span>
                        {feature.tooltip && (
                          <button
                            onMouseEnter={() => handleTooltip(feature.feature)}
                            onMouseLeave={() => handleTooltip(null)}
                            className="text-praxis-blue-400 hover:text-praxis-accent"
                            aria-label={`More information about ${feature.feature}`}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Category Tag */}
                      <div className="mt-1">
                        <span className="inline-block px-2 py-1 bg-praxis-blue-100 text-praxis-blue-700 text-xs rounded-full">
                          {feature.category}
                        </span>
                      </div>

                      {/* Tooltip */}
                      {activeTooltip === feature.feature && feature.tooltip && (
                        <div className="mt-2 p-3 bg-praxis-dark-blue text-white text-sm rounded-lg">
                          {feature.tooltip}
                        </div>
                      )}
                    </td>

                    {/* Praxis Support */}
                    <td className="py-4 px-6 text-center">
                      <div className={`text-2xl ${praxisSupport.color}`}>
                        {praxisSupport.icon}
                      </div>
                    </td>

                    {/* Competitor Support */}
                    <td className="py-4 px-6 text-center">
                      <div className={`text-2xl ${competitorSupport.color}`}>
                        {competitorSupport.icon}
                      </div>
                    </td>

                    {/* Importance */}
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                          feature.importance === 'high'
                            ? 'bg-red-100 text-red-700'
                            : feature.importance === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {feature.importance.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="p-6 bg-praxis-blue-50 border-t border-praxis-blue-100">
        <p className="text-xs text-praxis-blue-600 text-center">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default ComparisonTable;
