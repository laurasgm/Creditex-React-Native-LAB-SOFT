import React, { Component } from 'react';
import {ActivityIndicator,View,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title,  Fab, Button, Icon} from 'native-base';
import Cards from './Card';
import firebase from 'firebase';
import {Navigation} from 'react-native-navigation';


export default class HomeCard extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      active: false,
      cuentas: []
    });
  }

  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBm2-_CbCnGcA1C72pClDaQx_iu9oJeIIA",
      authDomain: "creditex-d5548.firebaseapp.com",
      databaseURL: "https://creditex-d5548.firebaseio.com",
      projectId: "creditex-d5548",
      storageBucket: "",
      messagingSenderId: "484268502435",
      appId: "1:484268502435:web:0883d01eaaacf55e57be16",
      measurementId: "G-1LQ82L7Y8W"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
  };

  componentDidMount(){
    const cuentasref = firebase.database().ref("/");
    this.loadcount(cuentasref);
  }

  loadcount = (cuentasref) => {
    cuentasref.on('value', (snap) =>{
      var lista = [];
      snap.forEach((child) => {
        //console.log(child.val().name);
        lista.push({
          name: child.val().name
        });
      });
      this.setState({
        cuentas : lista
      });
     // console.log(this.state.cuentas);
    });
    
  }

  clickDetalles = () =>{
    this.props.navigation.navigate("Detalles");
  }
  
  
  render() {
    
    return (
      <Container>
        
          <Content>
            
              {this.state.cuentas.map( item => 
              <Cards name={item.name}></Cards>
              )}
            
          </Content>
        
      </Container>
      
    );
  }
}

