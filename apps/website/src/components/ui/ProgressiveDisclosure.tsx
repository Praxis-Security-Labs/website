import React, { useState } from 'react';

interface DisclosureStep {
  id: string;
  title: string;
  content: React.ReactNode;
  isExpanded?: boolean;
}

interface ProgressiveDisclosureProps {
  steps: DisclosureStep[];
  allowMultiple?: boolean;
  className?: string;
}

export const ProgressiveDisclosure: React.FC<ProgressiveDisclosureProps> = ({
  steps,
  allowMultiple = false,
  className = '',
}) => {
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(
    new Set(steps.filter(step => step.isExpanded).map(step => step.id))
  );

  const toggleStep = (stepId: string) => {
    const newExpandedSteps = new Set(expandedSteps);

    if (expandedSteps.has(stepId)) {
      newExpandedSteps.delete(stepId);
    } else {
      if (!allowMultiple) {
        newExpandedSteps.clear();
      }
      newExpandedSteps.add(stepId);
    }

    setExpandedSteps(newExpandedSteps);

    // Track analytics for step engagement
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'trial_step_expand', {
        step_id: stepId,
        step_title: steps.find(s => s.id === stepId)?.title,
        expanded: !expandedSteps.has(stepId),
        page_location: window.location.href,
      });
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {steps.map((step, index) => {
        const isExpanded = expandedSteps.has(step.id);

        return (
          <div
            key={step.id}
            className="border border-praxis-blue-200 rounded-lg bg-white shadow-sm overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left bg-praxis-blue-50 hover:bg-praxis-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-praxis-accent focus:ring-opacity-50"
              onClick={() => toggleStep(step.id)}
              aria-expanded={isExpanded}
              aria-controls={`${step.id}-content`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-praxis-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-praxis-dark-blue">
                    {step.title}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 text-praxis-blue-600 transition-transform duration-200 ${
                    isExpanded ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {isExpanded && (
              <div
                id={`${step.id}-content`}
                className="px-6 py-4 bg-white border-t border-praxis-blue-100"
              >
                {step.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressiveDisclosure;
