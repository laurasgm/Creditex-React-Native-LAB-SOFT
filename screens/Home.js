import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title, View, Fab, Button, Icon} from 'native-base';
import Cards from './Card';
import firebase from 'firebase';


/*
var serviceAccount = require("../creditex-d5548-firebase-adminsdk-ub5y8-88db07d86d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://creditex-d5548.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("/");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
*/
export default class HomeCard extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      active: false,
      cuenta: " "
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

    firebase.database().ref("/").ref.once("value", ((snapshot) => {
      console.log(snapshot.val().cuenta1.nombre)
      this.setState({
        cuenta : snapshot.val().cuenta1.nombre
        
      })
    })
    )};


  
  
  render() {
    return (
      <Container>

        <Content>
          <Cards name= {this.state.cuenta}></Cards>
          <Cards name='Bancolombia #1'></Cards>
        </Content>

      </Container>
    );
  }
}

