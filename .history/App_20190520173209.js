/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen';
import { Button } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Home from './android/app/src/components/Home';
import About from './android/app/src/components/About';
// import {Routes} from './android/app/src/components/Routes';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component <Props> {

  componentDidMount () {
    //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
       SplashScreen.close({
       animationType: SplashScreen.animationType.scale,
       duration: 900,
       delay: 500,
    })
}

  render() {
    return (
   
      <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
      </Scene>
      </Router>
    );
  }
}

