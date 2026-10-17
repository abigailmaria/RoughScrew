// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughScrew title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughScrew/i);
    expect(titleElement).toBeInTheDocument();
});
