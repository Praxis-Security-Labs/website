import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    // Mock the current year to ensure consistent tests
    vi.setSystemTime(new Date('2024-01-01'));
  });

  describe('Basic Rendering', () => {
    it('renders the logo with correct text and link', () => {
      render(<Footer currentLanguage="en" />);

      const logo = screen.getByRole('link', { name: /praxis navigator home/i });
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('href', '/');

      expect(screen.getByText('PRAXIS')).toBeInTheDocument();
      expect(screen.getByText('NAVIGATOR')).toBeInTheDocument();
    });

    it('renders company description', () => {
      render(<Footer currentLanguage="en" />);

      const description = screen.getByText(
        /praxis navigator helps organizations/i
      );
      expect(description).toBeInTheDocument();
    });

    it('renders contact information', () => {
      render(<Footer currentLanguage="en" />);

      expect(screen.getByText('Email:')).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'contact@praxisnavigator.io' })
      ).toBeInTheDocument();
      expect(screen.getByText('Founder:')).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Kai Roer' })
      ).toBeInTheDocument();
    });

    it('renders current year in copyright', () => {
      render(<Footer currentLanguage="en" />);

      expect(screen.getByText(/© 2024 Praxis Navigator/)).toBeInTheDocument();
    });
  });

  describe('Navigation Sections', () => {
    it('renders all navigation sections with correct headings', () => {
      render(<Footer currentLanguage="en" />);

      const expectedSections = [
        'Product',
        'For Your Role',
        'Resources',
        'Support',
      ];
      expectedSections.forEach(section => {
        expect(screen.getByText(section)).toBeInTheDocument();
      });
    });

    it('renders product navigation links', () => {
      render(<Footer currentLanguage="en" />);

      const productLinks = [
        'Platform Overview',
        'Features',
        'Integrations',
        'Security',
      ];

      productLinks.forEach(linkText => {
        expect(
          screen.getByRole('link', { name: linkText })
        ).toBeInTheDocument();
      });
    });

    it('renders segment navigation links', () => {
      render(<Footer currentLanguage="en" />);

      const segmentLinks = [
        'Security Leaders',
        'Executives',
        'Managers',
        'SAT Teams',
      ];

      segmentLinks.forEach(linkText => {
        expect(
          screen.getByRole('link', { name: linkText })
        ).toBeInTheDocument();
      });
    });

    it('renders resource navigation links', () => {
      render(<Footer currentLanguage="en" />);

      const resourceLinks = ['Blog', 'Whitepapers', 'Webinars', 'Case Studies'];

      resourceLinks.forEach(linkText => {
        expect(
          screen.getByRole('link', { name: linkText })
        ).toBeInTheDocument();
      });
    });

    it('renders support navigation links', () => {
      render(<Footer currentLanguage="en" />);

      const supportLinks = [
        'Contact Us',
        'Book Demo',
        'Customer Support',
        'Documentation',
      ];

      supportLinks.forEach(linkText => {
        expect(
          screen.getByRole('link', { name: linkText })
        ).toBeInTheDocument();
      });
    });
  });

  describe('Legal and Social Links', () => {
    it('renders legal links', () => {
      render(<Footer currentLanguage="en" />);

      const legalLinks = [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy',
        'Accessibility',
      ];

      legalLinks.forEach(linkText => {
        expect(
          screen.getByRole('link', { name: linkText })
        ).toBeInTheDocument();
      });
    });

    it('renders social media links with correct attributes', () => {
      render(<Footer currentLanguage="en" />);

      const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
      expect(linkedInLink).toBeInTheDocument();
      expect(linkedInLink).toHaveAttribute('target', '_blank');
      expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(linkedInLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/company/praxis-navigator'
      );

      const twitterLink = screen.getByRole('link', { name: /twitter/i });
      expect(twitterLink).toBeInTheDocument();
      expect(twitterLink).toHaveAttribute('target', '_blank');
      expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(twitterLink).toHaveAttribute(
        'href',
        'https://twitter.com/praxisnavigator'
      );
    });

    it('has proper ARIA labels for social links', () => {
      render(<Footer currentLanguage="en" />);

      const linkedInLink = screen.getByRole('link', {
        name: /linkedin.*opens in new tab/i,
      });
      expect(linkedInLink).toBeInTheDocument();

      const twitterLink = screen.getByRole('link', {
        name: /twitter.*opens in new tab/i,
      });
      expect(twitterLink).toBeInTheDocument();
    });
  });

  describe('Language Support', () => {
    it('displays Norwegian content when language is set to "no"', () => {
      render(<Footer currentLanguage="no" />);

      // Check navigation headings are in Norwegian
      expect(screen.getByText('Produkt')).toBeInTheDocument();
      expect(screen.getByText('For Din Rolle')).toBeInTheDocument();
      expect(screen.getByText('Ressurser')).toBeInTheDocument();
      expect(screen.getByText('Støtte')).toBeInTheDocument();

      // Check some specific Norwegian links
      expect(
        screen.getByRole('link', { name: 'Produktoversikt' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Sikkerhetseksperter' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Hvidbøker' })
      ).toBeInTheDocument();
    });

    it('displays Norwegian company description', () => {
      render(<Footer currentLanguage="no" />);

      const norwegianDescription = screen.getByText(
        /praxis navigator hjelper organisasjoner/i
      );
      expect(norwegianDescription).toBeInTheDocument();
    });

    it('displays Norwegian copyright text', () => {
      render(<Footer currentLanguage="no" />);

      expect(
        screen.getByText(/alle rettigheter reservert/i)
      ).toBeInTheDocument();
    });

    it('has correct Norwegian URLs for navigation links', () => {
      render(<Footer currentLanguage="no" />);

      const productLink = screen.getByRole('link', { name: 'Produktoversikt' });
      expect(productLink).toHaveAttribute('href', '/no/product');

      const segmentLink = screen.getByRole('link', {
        name: 'Sikkerhetseksperter',
      });
      expect(segmentLink).toHaveAttribute(
        'href',
        '/no/segments/security-leaders'
      );
    });
  });

  describe('Accessibility', () => {
    it('has proper contentinfo role', () => {
      render(<Footer currentLanguage="en" />);

      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('has proper navigation accessibility labels', () => {
      render(<Footer currentLanguage="en" />);

      const legalNav = screen.getByRole('navigation', { name: /legal links/i });
      expect(legalNav).toBeInTheDocument();
    });

    it('has proper focus management for all links', () => {
      render(<Footer currentLanguage="en" />);

      // All links should be keyboard accessible
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);

      // Sample check for focus-ring classes
      const emailLink = screen.getByRole('link', {
        name: 'contact@praxisnavigator.io',
      });
      expect(emailLink).toHaveClass('focus-ring');
    });

    it('has proper heading hierarchy', () => {
      render(<Footer currentLanguage="en" />);

      // Navigation section headings should be h3 elements
      const sectionHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(sectionHeadings.length).toBe(4); // Product, For Your Role, Resources, Support
    });
  });

  describe('Praxis Design System Compliance', () => {
    it('uses correct Praxis color classes', () => {
      render(<Footer currentLanguage="en" />);

      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('bg-praxis-brown');

      // Check logo colors
      expect(screen.getByText('PRAXIS')).toHaveClass('text-praxis-gold');
      expect(screen.getByText('NAVIGATOR')).toHaveClass('text-praxis-white');
    });

    it('uses correct Praxis typography classes', () => {
      render(<Footer currentLanguage="en" />);

      // Section headings should use h6 class
      const sectionHeadings = screen.getAllByRole('heading', { level: 3 });
      sectionHeadings.forEach(heading => {
        expect(heading).toHaveClass('h6', 'text-praxis-gold');
      });
    });

    it('uses correct responsive grid layout classes', () => {
      render(<Footer currentLanguage="en" />);

      // Should have responsive grid layout
      const gridContainer = screen
        .getByRole('contentinfo')
        .querySelector('.grid');
      expect(gridContainer).toHaveClass(
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-5'
      );
    });

    it('has proper text color variations', () => {
      render(<Footer currentLanguage="en" />);

      // Company description should use tan color
      const description = screen.getByText(
        /praxis navigator helps organizations/i
      );
      expect(description).toHaveClass('text-praxis-tan');

      // Regular links should use tan with gold hover
      const links = screen.getAllByRole('link');
      const footerLinks = links.filter(
        link =>
          !['PRAXIS', 'NAVIGATOR'].includes(link.textContent || '') &&
          link.closest('[role="contentinfo"]')
      );

      footerLinks.forEach(link => {
        expect(link).toHaveClass('text-praxis-tan', 'hover:text-praxis-gold');
      });
    });
  });

  describe('Responsive Design', () => {
    it('has mobile-first responsive layout', () => {
      render(<Footer currentLanguage="en" />);

      // Main grid should be responsive
      const mainGrid = screen.getByRole('contentinfo').querySelector('.grid');
      expect(mainGrid).toHaveClass(
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-5'
      );
    });

    it('has responsive flex layouts for bottom section', () => {
      render(<Footer currentLanguage="en" />);

      // Bottom section should use responsive flex
      const bottomSection = screen
        .getByRole('contentinfo')
        .querySelector('.lg\\:flex');
      expect(bottomSection).toHaveClass(
        'lg:flex',
        'lg:items-center',
        'lg:justify-between'
      );
    });
  });

  describe('Content Structure', () => {
    it('maintains logical content hierarchy', () => {
      render(<Footer currentLanguage="en" />);

      // Company info should come first
      const companyDescription = screen.getByText(
        /praxis navigator helps organizations/i
      );
      expect(companyDescription).toBeInTheDocument();

      // Navigation sections should follow
      const navSections = ['Product', 'For Your Role', 'Resources', 'Support'];
      navSections.forEach(section => {
        expect(screen.getByText(section)).toBeInTheDocument();
      });

      // Legal and social should be at bottom
      expect(screen.getByText(/follow us/i)).toBeInTheDocument();
      expect(screen.getByText(/© 2024/)).toBeInTheDocument();
    });
  });
});
