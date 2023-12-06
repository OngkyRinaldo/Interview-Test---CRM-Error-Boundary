import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

describe('navbar component - rendering', () => {
    test('navbar component should be render and get text Acme Corp from navbar component', () => {
        render(<Navbar />);

        expect(screen.getByText(/acme corp/i)).toBeInTheDocument();
    });
});
