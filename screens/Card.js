import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title, View, Fab, Button, Icon} from 'native-base';

export default class Cards extends Component {

    render(){
        return(
          <TouchableOpacity onPress={() => console.log("hola")}>
          <Card>
            <CardItem>
              <Body>
                <Text>{this.props.name}</Text>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
        );
    }
}