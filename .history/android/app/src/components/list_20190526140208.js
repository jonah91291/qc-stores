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
        // const state = this.state;
        // const tableData = [];
        // for (let i = 0; i < 20; i += 1) {
        //   const rowData = [];
        //   for (let j = 0; j < 2; j += 1) {
        //     rowData.push(`${i}${j}`);
        //   }
        //   tableData.push(rowData);
        // }
     
        return (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                  <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                </Table>
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderColor: '#C1C0B9'}}>
                    {
                      tableData.map((list, index) => (
                        <Row
                          key={index}
                          data={list}
                          widthArr={state.widthArr}
                          style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                          textStyle={styles.text}
                        />
                      ))
                    }
                  </Table>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        )
      }
    }
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });