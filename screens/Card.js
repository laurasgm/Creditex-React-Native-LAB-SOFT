import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Title, View, Fab, Button, Icon} from 'native-base';

export default class Cards extends Component {

    render(){
        return(
            <Card>
            <CardItem>
              <Body>
                <Text>{this.props.name}</Text>
              </Body>
            </CardItem>
          </Card>
        );
    }
}