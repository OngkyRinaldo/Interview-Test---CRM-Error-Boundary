import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

describe('navbar component - rendering', () => {
    test('navbar component should be render and get text Acme Corp from navbar component', () => {
        render(<Navbar />);

        expect(screen.getByText(/acme corp/i)).toBeInTheDocument();
    });
    test('toggles mobile menu when clicking hamburger menu icon', () => {
        render(<Navbar />);

        const mobileMenu = screen.queryByTestId('mobile-menu');
        expect(mobileMenu).not.toBeInTheDocument();

        const hamburgerMenuIcon = screen.getByLabelText('open Menu');
        fireEvent.click(hamburgerMenuIcon);

        expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    });
});
