import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe('Header', () => {
  test('should render the correct text and elements', () => {
    render(<Header />);

    const headerElement = screen.getByText(/My landing page/i);
    const homeNavLink = screen.getByText(/Home/i);
    const aboutNavLink = screen.getByText(/About/i);
    const servicesNavLink = screen.getByText(/Services/i);
    const contactButton = screen.getByText(/Contact Us/i);

    expect(headerElement).toBeInTheDocument();
    expect(homeNavLink).toBeInTheDocument();
    expect(aboutNavLink).toBeInTheDocument();
    expect(servicesNavLink).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
  });

  test('should have the correct styles', () => {
    render(<Header />);

    const headerElement = screen.getByText(/My landing page/i);

    expect(headerElement).toHaveStyle({
      color: 'white',
      fontWeight: 'bold',
      position: 'absolute',
      padding: '30px 100px',
      fontSize: '2rem',
      top: '0',
      left: '0',
      right: '0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    });
  });

  test('should have the correct styles for navigation links', () => {
    render(<Header />);

    const navLinks = screen.getAllByRole('link');

    navLinks.forEach((link) => {
      expect(link).toHaveStyle({
        color: 'white',
        textDecoration: 'none',
        marginRight: '20px',
        fontSize: '1rem',
      });
    });
  });

  test('should have the correct styles for the contact button', () => {
    render(<Header />);

    const contactButton = screen.getByText(/Contact Us/i);

    expect(contactButton).toHaveStyle({
      backgroundColor: '#39b95b',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '10px',
      padding: '10px 20px',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
    });
  });
});
