import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe('Footer', () => {
  test('should render the correct text', () => {
    render(<Footer />);

    const footerElement = screen.getByText(/© 2024 by Jorge Gravel for RockTheCode/i);
    expect(footerElement).toBeInTheDocument();
  });

  test('should have the correct styles', () => {
    render(<Footer />);

    const footerElement = screen.getByText(/© 2024 by Jorge Gravel for RockTheCode/i);

    expect(footerElement).toHaveStyle({
      color: 'white',
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      justifyContent: 'center',
      padding: '10px',
    });
  });
});
