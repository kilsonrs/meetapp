import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { YellowBox } from 'react-native'; // <- insert the warning text here you wish to hide.

import { Provider } from 'react-redux';
import store from './store';

import App from './App';

YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
