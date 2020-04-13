/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import libraries to create components
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create components

const App = () => {
  return (
    <View>
      <Header headerText="Album" />
      <AlbumList />
    </View>
  );
};

//render on device

AppRegistry.registerComponent('albums', () => App);
