import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image,ScrollView } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import  axios from 'react-native-axios';
import Toast, {DURATION} from 'react-native-easy-toast';

export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['BOOK NAME', 'AUTHOR NAME', 'EDIT', 'DELETE'],
            tableData: [],
            widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
        }
    }
    componentWillMount() {
        setInterval(this.getData, 900)
    }
     
    getData = () => {
        axios
            .get("http://localhost:3000/tableData")
            .then(response =>
                this.setState({ tableData: response.data })
            )
            .catch(function (error) {
                console.log(error);
            });
    }


    //when you click on delete
    // handleDelete = (id) => {

    //     console.log("deleted", id)
    //     axios.delete(`http://localhost:3000/tableData/${id}`)
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    //         toast.show('RECORD DELETED');
    // }
      render() {
        const state = this.state;
        return (
        <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {/* <Rows data={state.tableData} textStyle={styles.text}/> */}
        </Table>
        <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                 this.state. this.state.tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>

      </View>
)}
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });