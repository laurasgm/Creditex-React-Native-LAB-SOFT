import React, { Component } from 'react';
import {StyleSheet} from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Left, Right, Title, View, Fab, Icon} from 'native-base';
import {Button,Text} from 'react-native-elements';
import firebase from 'firebase';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import {RegisterStruct,RegisterOptions} from '../forms/Register';
let userId = 3;

export default class Cuenta extends Component {


  constructor(){
    super();

    this.state={
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions,
      formData:{
        name:"",
        description:"",
        tasainteres:""
      },
      formErrorMessage: ""
    };
  }

  
  register = () =>{
    console.log(this.state.formData.name);
    const validate = this.refs.registerForm.getValue();
    
    if (validate){
      this.setState({
        formErrorMessage:""
      })
        firebase.database().ref('cuenta' + userId + '/').set({
          name : this.state.formData.name,
          descripcion: this.state.formData.description,
          tasa : this.state.formData.tasainteres
        })
        alert('Cuenta registrada');
        userId+=1;
    }else{
      this.setState({
        formErrorMessage:"Formulario invalido"
      })
    }
  }

  onChangeFormRegister = formValue =>{
    this.setState({
      formData: formValue
    });
  };
    render() {

      const { registerOptions, registerStruct, formErrorMessage} = this.state;

        return (
          <View style={styles.container}>

            <Form
              ref="registerForm"
              type={registerStruct}
              options= {registerOptions}
              value={this.state.formData}
              onChange={formValue => this.onChangeFormRegister(formValue)}    
            />
            <Button
              buttonStyle= {styles.buttonRegisterContainer}
              title="Crear"
              onPress= {() => this.register()}
            />
            <Text style={styles.formErrorMessageContainer}>{formErrorMessage}</Text>
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

  },
  buttonRegisterContainer:{
    backgroundColor: "#558b2f",
    marginTop:20,
    marginLeft:10,
    marginRight:10,
  },
  formErrorMessageContainer:{
    color:"#f00",
    textAlign: 'center',
    marginTop:30
  }
});
