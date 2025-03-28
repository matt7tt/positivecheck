/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { PhoenixLandingPageComponent } from './phoenix-landing-page';

// Mock the necessary dependencies
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}));

jest.mock('next/font/google', () => ({
  Space_Grotesk: () => ({ className: 'mocked-font' }),
  Raleway: () => ({ className: 'mocked-font' }),
}));

jest.mock('@/components/shared/public-header', () => ({
  PublicHeader: () => <div data-testid="mock-header">Header</div>,
}));

jest.mock('@/components/shared/public-footer', () => ({
  PublicFooter: () => <div data-testid="mock-footer">Footer</div>,
}));

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }) => (
    <button {...props} data-testid="mock-button">
      {children}
    </button>
  ),
}));

// Mock useEffect and useState
const mockUseState = jest.fn().mockImplementation((init) => [init, jest.fn()]);
React.useState = mockUseState;
const mockUseEffect = jest.fn();
React.useEffect = mockUseEffect;

describe('PhoenixLandingPageComponent', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the Phoenix-specific headline', () => {
    render(<PhoenixLandingPageComponent />);
    
    // Check for Phoenix-specific content
    expect(screen.getByText('Phoenix Senior Wellness Check-In Calls')).toBeInTheDocument();
    expect(screen.getByText(/Helping Arizona families stay connected/)).toBeInTheDocument();
  });

  it('renders the Phoenix-specific sections', () => {
    render(<PhoenixLandingPageComponent />);
    
    // Check for Phoenix-specific section headers
    expect(screen.getByText('Supporting Phoenix Seniors Through Every Season')).toBeInTheDocument();
    expect(screen.getByText('Beat the Valley Heat')).toBeInTheDocument();
    expect(screen.getByText("Bridging Phoenix's Sprawling Distances")).toBeInTheDocument();
    expect(screen.getByText('Supporting Seasonal Residents')).toBeInTheDocument();
    expect(screen.getByText('Trusted by Phoenix Families')).toBeInTheDocument();
  });

  it('renders the Phoenix-specific testimonial', () => {
    render(<PhoenixLandingPageComponent />);
    
    // Check for Phoenix-specific testimonial
    expect(screen.getByText(/Living in North Phoenix while my mom is in Chandler/)).toBeInTheDocument();
    expect(screen.getByText('M.R., Phoenix, Arizona')).toBeInTheDocument();
  });

  it('renders the header and footer', () => {
    render(<PhoenixLandingPageComponent />);
    
    // Check for header and footer
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
});
