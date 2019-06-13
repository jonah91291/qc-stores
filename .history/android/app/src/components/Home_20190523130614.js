import React, { Component } from 'react';
import {

 AppRegistry,

 StyleSheet,

 Text,

 TextInput,

 View

} from 'react-native';

export default class Home extends Component {

 constructor(Props) {

     super(Props)

     this.state = {

      firstVar: " "

     }

  }

 render() {

   return (

      <View style={{margin:50}}>

              <TextInput style={{height: 40}}

                  placeholder='Type your text'

                    onChangeText={(firstVar) => this.setState({firstVar})}

               />

      </View>

   );

 }

}

AppRegistry.registerComponent('Home', () => Home);