import { render, screen } from '@testing-library/react';
import Home from '../routes/Home';


describe('Home', () => {
  it('renders Home', () => {
    render(<Home />);
    screen.debug();
  });
});