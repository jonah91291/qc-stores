import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native';
import {logo} from '../iconimages/logo.png';
import { Router, Scene } from 'react-native-router-flux';
import About, {Component } from './'

export default class Home extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>

            <Image source = {require('E:/ReactNative/AwesomeProject/android/app/src/iconimages/logo.png')} 
               style = {styles.ImageStyle}
            />

            <TextInput style = {styles.input}
               label='Email'
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
            />
            
            <TextInput style = {styles.input}
               label='Password'               
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}
            />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
                  
               } >
            <Text style = {styles.submitButtonText}> Submit </Text>
            <Router>
            <Scene key = "root">
            <Scene key = "about" component = {About} title = "About" />
            </Scene>
            </Router>
            </TouchableOpacity>

            <Text style = {styles.appVersion}>App Version: v.30.2.5</Text>
         </View>
      )
   }
}


const styles = StyleSheet.create({
   container: {
    paddingTop: 50,
    // textAlign: 'center'
    // alignSelf: 'center'

   },
   ImageStyle : { 
    marginTop: 100,
    alignSelf: 'center'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#002b72',
      borderWidth: 1,
      paddingTop:20
   },
   submitButton: {
      backgroundColor: '#002b72',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      alignSelf: 'center',
   },
   appVersion:{
    marginTop:100,
    // marginLeft:100,
    alignSelf: 'center',
    color: '#d1cdcd',
    fontSize:20
   }
})