import React, { Component } from 'react';
import {StyleSheet} from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title, View, Fab, Icon} from 'native-base';
import {Button} from 'react-native-elements';


import t from 'tcomb-form-native';
const Form = t.form.Form;
import {RegisterStruct,RegisterOptions} from '../forms/Register';


export default class Cuenta extends Component {

  constructor(){
    super();

    this.state={
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions
    }
  }

  register = () =>{
    const validate = this.refs.registerForm.getValue();
  }
    render() {

      const { registerOptions, registerStruct} = this.state;

        return (
          <View style={styles.container}>

            <Form
              ref="registerForm"
              type={registerStruct}
              options= {registerOptions}            
            />
            <Button
              title="Crear"
              type= "outline"
              onPress= {() => this.register()}
            />

          </View>
        );
      }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40

  }
});
