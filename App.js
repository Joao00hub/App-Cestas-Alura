/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Cesta from './src/views/Cesta';
import mock from './src/mocks/cesta';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <Cesta {...mock}/>
      <StatusBar />
    </SafeAreaView>
  );
};

export default App;
