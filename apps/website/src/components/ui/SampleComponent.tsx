import React from 'react';

interface SampleComponentProps {
  title: string;
  message: string;
}

export const SampleComponent: React.FC<SampleComponentProps> = ({
  title,
  message,
}) => {
  return (
    <div className="card card-hoverable">
      <div className="card-header">
        <h3 className="h3">{title}</h3>
      </div>
      <div className="card-body">
        <p className="body-base">{message}</p>
        <div className="alert alert-info mt-4">
          This is a sample component using Praxis design tokens
        </div>
        <button className="btn-primary mt-4">Test Button</button>
      </div>
    </div>
  );
};
