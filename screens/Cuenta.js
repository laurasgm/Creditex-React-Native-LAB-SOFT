import React, { Component } from 'react';
import {StyleSheet} from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title, View, Fab, Button, Icon} from 'native-base';

export default class Cuenta extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Cuenta Screen</Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"

  }
});
