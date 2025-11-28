import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  autoComplete,
  placeholder,
  className = '',
  error,
}) => {
  const baseInputClasses =
    'w-full px-4 py-3 border border-praxis-gray-300 rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent';
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';

  const inputId = `field-${name}`;

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-praxis-dark-blue mb-2"
      >
        {label} {required && '*'}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`${baseInputClasses} ${errorClasses}`}
          rows={4}
          // Add data attributes for extension compatibility
          data-form-type="user-input"
          data-lpignore={autoComplete === 'new-password' ? 'true' : 'false'}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`${baseInputClasses} ${errorClasses}`}
          // Add data attributes for extension compatibility
          data-form-type="user-input"
          data-lpignore={autoComplete === 'new-password' ? 'true' : 'false'}
        />
      )}

      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
