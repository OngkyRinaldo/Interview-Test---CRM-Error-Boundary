import { render, screen } from '@testing-library/react';
import Submission from './page';

test('submission page should be render and get text "submission" from navbar component', () => {
    render(<Submission />);

    expect(screen.getByText(/submission/i)).toBeInTheDocument();
});
