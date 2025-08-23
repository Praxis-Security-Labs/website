import React from 'react';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}) => {
  const baseClasses = 'rounded-xl';

  const variantClasses = {
    default: 'bg-white shadow-sm',
    elevated: 'bg-white shadow-lg',
    bordered: 'bg-white border border-praxis-blue-200',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};
