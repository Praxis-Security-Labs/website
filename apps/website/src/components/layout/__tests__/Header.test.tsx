import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Header } from '../Header';

// Mock environment variables
vi.mock('astro:env', () => ({
  ASTRO_PUBLIC_PRAXIS_APP_URL: 'https://app.praxisnavigator.io',
  ASTRO_PUBLIC_MARKETPLACE_URL: 'https://azuremarketplace.microsoft.com',
}));

describe('Header Component', () => {
  beforeEach(() => {
    // Reset any mocks before each test
    vi.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders the logo with correct text and link', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      const logo = screen.getByRole('link', { name: /praxis navigator home/i });
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('href', '/');

      expect(screen.getByText('PRAXIS')).toBeInTheDocument();
      expect(screen.getByText('NAVIGATOR')).toBeInTheDocument();
    });

    it('renders main navigation with all required links', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      const expectedLinks = [
        'Product',
        'For Your Role',
        'About Kai Roer',
        'Resources',
        'Pricing & Trial',
        'Contact & Demo',
      ];

      expectedLinks.forEach(linkText => {
        expect(
          screen.getByRole('link', { name: linkText })
        ).toBeInTheDocument();
      });
    });

    it('renders language switcher buttons', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      expect(
        screen.getByRole('link', { name: /switch to norwegian/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: /bytt til norsk/i })
      ).toBeInTheDocument();
    });

    it('renders login and marketplace buttons', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      expect(
        screen.getByRole('link', { name: /log in to praxis navigator/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: /start trial on azure marketplace/i })
      ).toBeInTheDocument();
    });
  });

  describe('Language Support', () => {
    it('displays Norwegian navigation when language is set to "no"', () => {
      render(<Header currentPath="/no/" currentLanguage="no" />);

      expect(screen.getByRole('link', { name: 'Produkt' })).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'For Din Rolle' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Om Kai Roer' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Ressurser' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Priser & Prøveversjon' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Kontakt & Demo' })
      ).toBeInTheDocument();
    });

    it('has correct Norwegian language switcher labels', () => {
      render(<Header currentPath="/no/" currentLanguage="no" />);

      expect(
        screen.getByRole('link', { name: /switch to english/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: /bytt til engelsk/i })
      ).toBeInTheDocument();
    });

    it('shows active language in switcher', () => {
      const { rerender } = render(
        <Header currentPath="/" currentLanguage="en" />
      );

      const enButton = screen.getByRole('link', { name: /bytt til norsk/i });
      expect(enButton).toHaveClass('bg-praxis-gold');

      rerender(<Header currentPath="/no/" currentLanguage="no" />);

      const noButton = screen.getByRole('link', { name: /bytt til engelsk/i });
      expect(noButton).toHaveClass('bg-praxis-gold');
    });
  });

  describe('Active Link States', () => {
    it('highlights active navigation link', () => {
      render(<Header currentPath="/product" currentLanguage="en" />);

      const productLink = screen.getByRole('link', { name: 'Product' });
      expect(productLink).toHaveClass('text-praxis-gold');
      expect(productLink).toHaveAttribute('aria-current', 'page');
    });

    it('highlights active link for sub-paths', () => {
      render(<Header currentPath="/product/features" currentLanguage="en" />);

      const productLink = screen.getByRole('link', { name: 'Product' });
      expect(productLink).toHaveClass('text-praxis-gold');
      expect(productLink).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('Mobile Navigation', () => {
    it('shows mobile menu button on mobile', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      const menuButton = screen.getByRole('button', { name: /open menu/i });
      expect(menuButton).toBeInTheDocument();
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('toggles mobile menu when button is clicked', async () => {
      const user = userEvent.setup();
      render(<Header currentPath="/" currentLanguage="en" />);

      const menuButton = screen.getByRole('button', { name: /open menu/i });

      // Menu should be closed initially
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      // Click to open
      await user.click(menuButton);
      await waitFor(() => {
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
        expect(
          screen.getByRole('button', { name: /close menu/i })
        ).toBeInTheDocument();
      });
    });

    it('shows mobile navigation items when menu is open', async () => {
      const user = userEvent.setup();
      render(<Header currentPath="/" currentLanguage="en" />);

      const menuButton = screen.getByRole('button', { name: /open menu/i });
      await user.click(menuButton);

      await waitFor(() => {
        // Check that mobile navigation items are visible
        const mobileNav = screen.getByRole('navigation', {
          name: /mobile navigation/i,
        });
        expect(mobileNav).toBeInTheDocument();
      });
    });

    it('closes mobile menu when navigation link is clicked', async () => {
      const user = userEvent.setup();
      render(<Header currentPath="/" currentLanguage="en" />);

      const menuButton = screen.getByRole('button', { name: /open menu/i });
      await user.click(menuButton);

      await waitFor(() => {
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      });

      // Click a navigation link in mobile menu
      const mobileLinks = screen.getAllByRole('link', { name: 'Product' });
      const mobileProductLink = mobileLinks.find(link =>
        link.closest('[role="navigation"][aria-label*="mobile"]')
      );

      if (mobileProductLink) {
        await user.click(mobileProductLink);
        await waitFor(() => {
          expect(menuButton).toHaveAttribute('aria-expanded', 'false');
        });
      }
    });
  });

  describe('Keyboard Navigation', () => {
    it('handles keyboard events on mobile menu button', async () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      const menuButton = screen.getByRole('button', { name: /open menu/i });

      // Test Enter key
      fireEvent.keyDown(menuButton, { key: 'Enter' });
      await waitFor(() => {
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      });

      // Test Space key
      fireEvent.keyDown(menuButton, { key: ' ' });
      await waitFor(() => {
        expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('has proper focus management for all interactive elements', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      // Check that all interactive elements have focus-ring classes
      const logo = screen.getByRole('link', { name: /praxis navigator home/i });
      expect(logo).toHaveClass('focus-ring');

      const menuButton = screen.getByRole('button', { name: /open menu/i });
      expect(menuButton).toHaveClass('focus-ring');

      // Navigation links should have focus-ring
      const navLinks = screen.getAllByRole('link');
      navLinks.forEach(link => {
        const hasValidFocusClass =
          link.classList.contains('focus-ring') ||
          link.classList.contains('focus-ring-gold');
        expect(hasValidFocusClass).toBe(true);
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels and roles', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      // Header should have banner role
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();

      // Navigation should have proper role and label
      const mainNav = screen.getByRole('navigation', {
        name: /main navigation/i,
      });
      expect(mainNav).toBeInTheDocument();

      // Mobile menu button should have proper ARIA attributes
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('announces menu state changes to screen readers', async () => {
      const user = userEvent.setup();
      render(<Header currentPath="/" currentLanguage="en" />);

      const menuButton = screen.getByRole('button', { name: /open menu/i });

      await user.click(menuButton);
      await waitFor(() => {
        expect(
          screen.getByRole('button', { name: /close menu/i })
        ).toBeInTheDocument();
      });
    });

    it('has proper link relationships and targets', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      // External links should have proper attributes
      const loginLink = screen.getByRole('link', {
        name: /log in to praxis navigator/i,
      });
      expect(loginLink).toHaveAttribute('target', '_blank');
      expect(loginLink).toHaveAttribute('rel', 'noopener noreferrer');

      const marketplaceLink = screen.getByRole('link', {
        name: /start trial on azure marketplace/i,
      });
      expect(marketplaceLink).toHaveAttribute('target', '_blank');
      expect(marketplaceLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Praxis Design System Compliance', () => {
    it('uses correct Praxis color classes', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      const header = screen.getByRole('banner');
      expect(header).toHaveClass('bg-praxis-dark-blue');

      // Check logo colors
      expect(screen.getByText('PRAXIS')).toHaveClass('text-praxis-gold');
      expect(screen.getByText('NAVIGATOR')).toHaveClass('text-praxis-white');
    });

    it('uses correct Praxis typography classes', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      const navLinks = screen.getAllByRole('link');
      const navigationLinks = navLinks.filter(link =>
        [
          'Product',
          'For Your Role',
          'About Kai Roer',
          'Resources',
          'Pricing & Trial',
          'Contact & Demo',
        ].includes(link.textContent || '')
      );

      navigationLinks.forEach(link => {
        expect(link).toHaveClass(
          'font-heading',
          'uppercase',
          'tracking-brand-wide'
        );
      });
    });

    it('uses correct Praxis button classes', () => {
      render(<Header currentPath="/" currentLanguage="en" />);

      const loginButton = screen.getByRole('link', {
        name: /log in to praxis navigator/i,
      });
      expect(loginButton).toHaveClass('btn-secondary', 'btn-sm');

      const marketplaceButton = screen.getByRole('link', {
        name: /start trial on azure marketplace/i,
      });
      expect(marketplaceButton).toHaveClass('btn-accent', 'btn-sm');
    });
  });
});
