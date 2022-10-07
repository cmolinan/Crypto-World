import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import ShowCryptos from '../components/ShowCryptos';
import '@testing-library/jest-dom';

describe('test ShowCryptos Component', () => {
  test('Correct render of ShowCryptos ', () => {
    const showCryptos = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <ShowCryptos />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(showCryptos).toMatchSnapshot();
  });
});
