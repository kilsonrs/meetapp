import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { YellowBox } from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']); // <- insert the warning text here you wish to hide.

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
