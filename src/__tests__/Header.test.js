import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('test Header Component', () => {
  test('Correct render of Header ', () => {
    const header = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(header).toMatchSnapshot();
  });

  test('if shows text Powered by CoinGecko', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      </React.StrictMode>,
    );

    expect(screen.getByText('Powered by CoinGecko')).toBeInTheDocument();
  });
});
