import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AboutUs from './pages/Index';


describe('unit test', () => {

  test('renders AboutUs.tsx', () => {
    render(<AboutUs />);
  });

  test('renders App.tsx', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});

