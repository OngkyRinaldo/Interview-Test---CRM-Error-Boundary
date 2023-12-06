import { render, screen } from '@testing-library/react';

import Lms from './page';

test('lms page should be render and get text "lms" from navbar component', () => {
    render(<Lms />);

    expect(screen.getByText(/lms/i)).toBeInTheDocument();
});
