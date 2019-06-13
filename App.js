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
import list from './android/app/src/components/list';
// import {Routes} from './android/app/src/components/Routes';


type Props = {};
export default class App extends Component <Props> {

  componentDidMount () {
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
         <Scene key = "list" component = {list} title = "list" />
      </Scene>
      </Router>
    );
  }
}

