import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title, View, Fab, Button, Icon} from 'native-base';
import Cards from './Card';


export default class HomeCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  
  render() {
    return (
      <Container>

        <Content>
          <Cards name='Davivienda'></Cards>
          <Cards name='Bancolombia #1'></Cards>
        </Content>

      </Container>
    );
  }
}

