/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root';

import configureStore from './configureStore';

require('./favicon.ico'); // Tell webpack to load favicon.ico
//import './styles/main.css';
//import 'semantic-ui-css/semantic.min.css';

const store = configureStore({});

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
