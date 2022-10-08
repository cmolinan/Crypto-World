import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configStore';
import Details from '../components/Details';

describe('Test the Details Component', () => {
  test('Correct render of Details ', () => {
    const details = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Details />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(details).toMatchSnapshot();
  });
});
