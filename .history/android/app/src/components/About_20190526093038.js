import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native';
import {logo} from '../iconimages/logo.png';
import { Router, Scene,Actions } from 'react-native-router-flux';

export default class About extends Component {
   state = {
      bookname: '',
      authorname: ''
   }
   handleEmail = (text) => {
      this.setState({ bookname: text })
   }
   handlePassword = (text) => {
      this.setState({ authorname: text })
   }
   goToAbout = () => {
    Actions.about()
  }
   render() {
      return (
         <View style = {styles.container}>

            <TextInput style = {styles.input}
               label='BookName'
               underlineColorAndroid = "transparent"
               placeholder = "BOOK NAME"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
            />
            
            <TextInput style = {styles.input}
               label='AuthorName'               
               underlineColorAndroid = "transparent"
               placeholder = "AUTHOR NAME"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}
            />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {this.goToAbout}>
            <Text style = {styles.submitButtonText}> ADD </Text>

            </TouchableOpacity>

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