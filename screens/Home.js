import React, { Component } from 'react';
import {ActivityIndicator,View,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title,  Fab, Button, Icon} from 'native-base';
import firebase from 'firebase';



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
          all: child.val(),//me trae todo del item para la ventana de detalles
          name: child.val().name
        });
      });
      this.setState({
        cuentas : lista
      });
     // console.log(this.state.cuentas);
    });
    
  }

  clickDetalles = (item) =>{
    this.props.navigation.navigate("Detalles");
    console.log(item);
  }
  
  
  render() {
    
    return (
      <Container>
          <Content>
              {this.state.cuentas.map( item => 
               <TouchableOpacity onPress={() => this.clickDetalles(item.all)}>
               <Card>
                 <CardItem>
                   <Body>
                     <Text>{item.name}</Text>
                   </Body>
                 </CardItem>
               </Card>
               </TouchableOpacity>
              )}
          </Content>
        
      </Container>
      
    );
  }
}

