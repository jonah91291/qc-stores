import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native';
import {logo} from '../iconimages/logo.png';
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
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
            />
            
            <TextInput style = {styles.input}
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
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <Text style = {styles.appVersion}>App Version 30.2.5</Text>
         </View>
      )
   }
}


const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      textAlign: 'center'
   },
   ImageStyle : { 
    // width: 200, height: 200,
    // justifyContent: 'center',
    // alignItems: 'center'
    marginTop: 100,
    marginLeft:100
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      paddingTop:20
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   appVersion:{
    color 
   }
})