'use strict';

import React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';

import FullWidthConverter from './containers/FullWidthConverter';
import store from './store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store} >
              <FullWidthConverter />
            </Provider>
        );
    }
}
