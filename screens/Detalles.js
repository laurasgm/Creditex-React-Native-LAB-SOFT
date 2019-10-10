import React, { Component } from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';


export default class Detalles extends Component {

    render(){
        return(
          <View style= {StyleSheet.viewBody}>
              <Text>Holaa</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody:{
        flex: 1
    }
});