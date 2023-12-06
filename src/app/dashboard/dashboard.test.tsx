import { render, screen } from '@testing-library/react';
import Dashboard from './page';

test('dashboard page should be render and get text "dashboard" from navbar component', () => {
    render(<Dashboard />);

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});
