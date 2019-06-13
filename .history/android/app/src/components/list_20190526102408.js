import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import  axios from 'axios';

export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['BOOK NAME', 'AUTHOR NAME', 'EDIT', 'DELETE'],
            tableData: [
              ['1', '2', '3', '4'],
              ['a', 'b', 'c', 'd'],
              ['1', '2', '3', '456\n789'],
              ['a', 'b', 'c', 'd']
            ]
        }
    }
     
      render() {
        const state = this.state;
        return (
        <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
)}
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });