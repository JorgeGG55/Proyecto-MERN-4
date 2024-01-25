import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Main from "../components/Main";

describe('Main', () => {
  test('should render the correct text and elements', () => {
    render(<Main />);

    const titleElement = screen.getByText(/To Do List/i);
    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText(/Añadir/i);

    expect(titleElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('should have the correct styles', () => {
    render(<Main />);

    const mainWrapper = screen.getByRole('main');

    expect(mainWrapper).toHaveStyle({
      textAlign: 'center',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#24252f',
    });
  });

  test('should add and remove items correctly', () => {
    render(<Main />);

    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText(/Añadir/i);

    fireEvent.change(inputElement, { target: { value: 'New Item' } });
    fireEvent.click(addButton);

    const newItem = screen.getByText(/New Item/i);
    expect(newItem).toBeInTheDocument();

    const deleteButton = screen.getByText(/Eliminar/i);
    fireEvent.click(deleteButton);

    expect(newItem).not.toBeInTheDocument();
  });
});
