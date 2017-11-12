/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header} from './src/components/common';
import LibraryList from './src/components/LibraryList';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex:1}}>
          <Header headerText="Tech Stack"/>
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}