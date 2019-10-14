import React, { Component } from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';

export default class Detalles extends Component {

    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
      }

    render(){
        return (  
            <Container>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#558b2f' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon type= "MaterialCommunityIcons" name="plus" />
                    <Button style={{ backgroundColor: '#558b2f' }}>
                        <Icon  type= "MaterialCommunityIcons" name="briefcase-plus-outline" />
                    </Button>
                    <Button style={{ backgroundColor: '#00838f' }}>
                        <Icon type= "MaterialCommunityIcons" name="book-outline" />
                    </Button>
                </Fab>
            </Container>
          );
        }
      }

const styles = StyleSheet.create({
    viewBody:{
        flex: 1
    }
});