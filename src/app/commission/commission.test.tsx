import { render, screen } from '@testing-library/react';
import Commission from './page';

test('commission page should be render and get text "commission" from navbar component', () => {
    render(<Commission />);

    expect(screen.getByText(/commission/i)).toBeInTheDocument();
});
