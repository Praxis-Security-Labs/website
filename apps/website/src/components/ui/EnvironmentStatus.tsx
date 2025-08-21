import { getEnvironmentInfo } from '@/config/env';

interface EnvironmentStatusProps {
  showDetails?: boolean;
}

export function EnvironmentStatus({
  showDetails = false,
}: EnvironmentStatusProps) {
  const envInfo = getEnvironmentInfo();

  if (!showDetails) {
    return (
      <div className="bg-praxis-gray-50 p-4 rounded-lg">
        <h3 className="body-large font-semibold mb-2 text-praxis-brown">
          Environment Status
        </h3>
        <p className="text-sm text-praxis-gray-600">
          Mode: <span className="font-medium">{envInfo.environment}</span>
        </p>
        <p className="text-sm text-praxis-gray-600">
          Configuration:{' '}
          {envInfo.validation.isValid ? (
            <span className="text-green-600">✓ Valid</span>
          ) : (
            <span className="text-red-600">✗ Invalid</span>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-praxis-gray-50 p-6 rounded-lg">
      <h3 className="body-large font-semibold mb-4 text-praxis-brown">
        Environment Configuration
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm font-medium text-praxis-gray-700">
            Environment
          </p>
          <p className="text-sm text-praxis-gray-600">{envInfo.environment}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-praxis-gray-700">Production</p>
          <p className="text-sm text-praxis-gray-600">
            {envInfo.isProduction ? 'Yes' : 'No'}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-praxis-gray-700 mb-2">
          Configuration Status
        </h4>
        <ul className="space-y-1">
          <li className="text-sm text-praxis-gray-600">
            Azure Client ID: {envInfo.config.azureClientId}
          </li>
          <li className="text-sm text-praxis-gray-600">
            Azure Authority: {envInfo.config.azureAuthority}
          </li>
          <li className="text-sm text-praxis-gray-600">
            Praxis App URL: {envInfo.config.praxisAppUrl}
          </li>
          <li className="text-sm text-praxis-gray-600">
            Marketplace URL: {envInfo.config.marketplaceUrl}
          </li>
        </ul>
      </div>

      {!envInfo.validation.isValid && (
        <div className="bg-red-50 border border-red-200 rounded p-3">
          <p className="text-sm text-red-800 font-medium">
            Missing Environment Variables:
          </p>
          <ul className="text-sm text-red-700 mt-1">
            {envInfo.validation.missing.map(key => (
              <li key={key}>• {key}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
