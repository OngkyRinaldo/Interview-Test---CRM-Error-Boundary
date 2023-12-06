import { render, screen } from '@testing-library/react';
import Crm from './page';

test('dashboard page should be render and get text "dashboard" from navbar component', () => {
    render(<Crm />);

    expect(screen.getByText(/crm/i)).toBeInTheDocument();
});
