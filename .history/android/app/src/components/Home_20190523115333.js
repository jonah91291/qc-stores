import React, { Component } from ‘react''';
import {

 AppRegistry,

 StyleSheet,

 Text,

 TextInput,

 View

} from ‘react-native’;

export default class Home extends Component {

 constructor() {

     super()

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

              <Text style={{padding: 10, fontSize: 42}}>

               {this.state.firstVar}

              </Text>

      </View>

   );

 }

}

AppRegistry.registerComponent('Home', () => Home);