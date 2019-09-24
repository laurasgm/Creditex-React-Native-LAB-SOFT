import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title, View, Fab, Button, Icon} from 'native-base';
import ListaCard from './lista';

export default class CardExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }


  render() {
    return (
      <Container>
        <Header noLeft span>
          <Left />
            <Body>
              <Title>Creditex</Title>
            </Body>
          <Right />
        </Header>


        <Content>
          <ListaCard name='Davivienda'></ListaCard>
          <ListaCard name='Bancolombia #1'></ListaCard>
          <ListaCard name='Banco de Bogota'></ListaCard>
          <ListaCard name='Bancolombia #2'></ListaCard>
        </Content>

        

        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}