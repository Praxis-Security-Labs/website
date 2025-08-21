import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SampleComponent } from './SampleComponent';

describe('SampleComponent', () => {
  it('renders the title correctly', () => {
    const testTitle = 'Test Title';
    const testMessage = 'Test Message';

    render(<SampleComponent title={testTitle} message={testMessage} />);

    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  it('renders the message correctly', () => {
    const testTitle = 'Test Title';
    const testMessage = 'Test Message';

    render(<SampleComponent title={testTitle} message={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it('renders the info alert', () => {
    const testTitle = 'Test Title';
    const testMessage = 'Test Message';

    render(<SampleComponent title={testTitle} message={testMessage} />);

    expect(
      screen.getByText('This is a sample component using Praxis design tokens')
    ).toBeInTheDocument();
  });

  it('renders the test button', () => {
    const testTitle = 'Test Title';
    const testMessage = 'Test Message';

    render(<SampleComponent title={testTitle} message={testMessage} />);

    expect(
      screen.getByRole('button', { name: 'Test Button' })
    ).toBeInTheDocument();
  });

  it('applies correct CSS classes for Praxis design system', () => {
    const testTitle = 'Test Title';
    const testMessage = 'Test Message';

    const { container } = render(
      <SampleComponent title={testTitle} message={testMessage} />
    );

    // Check that the root element has the card-hoverable class
    const cardElement = container.querySelector('.card-hoverable');
    expect(cardElement).toBeInTheDocument();

    // Check that the button has the btn-primary class
    const buttonElement = container.querySelector('.btn-primary');
    expect(buttonElement).toBeInTheDocument();
  });
});
