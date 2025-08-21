import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from '../HeroSection';

describe('HeroSection Component', () => {
  describe('Content Rendering', () => {
    it('renders the main headline correctly', () => {
      render(<HeroSection />);

      const headline = screen.getByRole('heading', { level: 1 });
      expect(headline).toBeInTheDocument();
      expect(headline).toHaveTextContent(
        'Measure What Matters: Actual Security Behaviors'
      );
      expect(headline).toHaveAttribute('id', 'hero-heading');
    });

    it('renders the authority subheadline with Kai Roer credentials', () => {
      render(<HeroSection />);

      const subheadline = screen.getByRole('heading', { level: 2 });
      expect(subheadline).toBeInTheDocument();
      expect(subheadline).toHaveTextContent(
        'By Kai Roer, Creator of the Security Culture Framework adopted by ENISA'
      );
    });

    it('renders the problem statement correctly', () => {
      render(<HeroSection />);

      const problemStatement = screen.getByText(
        /Organizations invest heavily in Security Awareness Training/
      );
      expect(problemStatement).toBeInTheDocument();
      expect(problemStatement).toHaveTextContent(
        /Microsoft Graph API behavioral monitoring/
      );
    });
  });

  describe('Call-to-Action Buttons', () => {
    it('renders Schedule Demo CTA with correct attributes', () => {
      render(<HeroSection />);

      const demoButton = screen.getByRole('link', { name: /schedule a demo/i });
      expect(demoButton).toBeInTheDocument();
      expect(demoButton).toHaveAttribute('href', '/demo');
      expect(demoButton).toHaveClass('btn-accent', 'btn-lg');
      expect(demoButton).toHaveTextContent('Schedule Demo');
    });

    it('renders Start Free Trial CTA with correct attributes', () => {
      render(<HeroSection />);

      const trialButton = screen.getByRole('link', {
        name: /start your free trial/i,
      });
      expect(trialButton).toBeInTheDocument();
      expect(trialButton).toHaveAttribute('href', '/trial');
      expect(trialButton).toHaveClass('btn-primary', 'btn-lg');
      expect(trialButton).toHaveTextContent('Start Free Trial');
    });
  });

  describe('Product Preview Section', () => {
    it('renders product preview with feature highlights', () => {
      render(<HeroSection />);

      const previewTitle = screen.getByRole('heading', {
        name: /Transform Security Training Into Measurable Business Impact/i,
      });
      expect(previewTitle).toBeInTheDocument();
    });

    it('renders all four feature highlights', () => {
      render(<HeroSection />);

      // Check for feature highlight headings
      expect(
        screen.getByRole('heading', { name: /Behavioral Analytics/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /Risk Scoring/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /Compliance Tracking/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /Executive Reporting/i })
      ).toBeInTheDocument();

      // Check for feature descriptions
      expect(
        screen.getByText(/Real-time monitoring of actual security behaviors/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Dynamic risk calculations based on actual behaviors/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Evidence-based documentation for audits/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Board-ready summaries showing security program ROI/)
      ).toBeInTheDocument();
    });
  });

  describe('Praxis Design System Compliance', () => {
    it('uses correct Praxis CSS classes for typography', () => {
      render(<HeroSection />);

      const headline = screen.getByRole('heading', { level: 1 });
      expect(headline).toHaveClass('h1', 'text-praxis-white');

      const subheadline = screen.getByRole('heading', { level: 2 });
      expect(subheadline).toHaveClass('h3', 'text-praxis-gold');
    });

    it('uses correct Praxis CSS classes for buttons', () => {
      render(<HeroSection />);

      const demoButton = screen.getByRole('link', { name: /schedule a demo/i });
      const trialButton = screen.getByRole('link', {
        name: /start your free trial/i,
      });

      expect(demoButton).toHaveClass(
        'btn-accent',
        'btn-lg',
        'hover-lift',
        'active-scale',
        'focus-ring-gold'
      );
      expect(trialButton).toHaveClass(
        'btn-primary',
        'btn-lg',
        'hover-lift',
        'active-scale',
        'focus-ring'
      );
    });

    it('applies correct background gradient classes', () => {
      render(<HeroSection />);

      const section = screen.getByRole('banner');
      expect(section).toHaveClass(
        'bg-gradient-to-b',
        'from-praxis-dark-blue',
        'to-praxis-blue'
      );
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes and semantic structure', () => {
      render(<HeroSection />);

      const section = screen.getByRole('banner');
      expect(section).toHaveAttribute('aria-labelledby', 'hero-heading');
      expect(section).toHaveAttribute('role', 'banner');
    });

    it('has descriptive aria-labels for CTA buttons', () => {
      render(<HeroSection />);

      const demoButton = screen.getByLabelText(
        'Schedule a demo to see how Praxis Navigator works'
      );
      const trialButton = screen.getByLabelText(
        'Start your free trial of Praxis Navigator'
      );

      expect(demoButton).toBeInTheDocument();
      expect(trialButton).toBeInTheDocument();
    });

    it('maintains proper heading hierarchy', () => {
      render(<HeroSection />);

      const h1 = screen.getByRole('heading', { level: 1 });
      const h2 = screen.getByRole('heading', { level: 2 });
      const h3 = screen.getByRole('heading', { level: 3 });

      expect(h1).toBeInTheDocument();
      expect(h2).toBeInTheDocument();
      expect(h3).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('applies responsive classes for mobile-first design', () => {
      render(<HeroSection />);

      const ctaContainer = screen.getByRole('link', {
        name: /schedule a demo/i,
      }).parentElement;
      expect(ctaContainer).toHaveClass('flex', 'flex-col', 'sm:flex-row');
    });

    it('has proper container and spacing classes', () => {
      render(<HeroSection />);

      const section = screen.getByRole('banner');
      expect(section).toHaveClass('min-h-screen');

      const container = section.querySelector('.container');
      expect(container).toHaveClass('mx-auto', 'px-6', 'py-20');
    });
  });

  describe('Custom Props', () => {
    it('accepts and applies custom className prop', () => {
      render(<HeroSection className="custom-hero-class" />);

      const section = screen.getByRole('banner');
      expect(section).toHaveClass('custom-hero-class');
    });

    it('maintains default classes when custom className is provided', () => {
      render(<HeroSection className="custom-class" />);

      const section = screen.getByRole('banner');
      expect(section).toHaveClass('custom-class', 'relative', 'min-h-screen');
    });
  });
});
