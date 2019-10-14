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
        const {
            name,
            descripcion,
            tasa
        } = this.props.navigation.state.params.item
        return (  
            <Container>
                <View style={styles.viewinfo}>
                    <Text style={styles.viewTitulos}>NOMBRE DE LA CUENTA</Text>
                    <Text style={styles.viewSubtextos}>{name}</Text>
                
                
                    <Text style={styles.viewTitulos}>DESCRIPCION</Text>
                    <Text style={styles.viewSubtextos}>{descripcion}</Text>
               
                    <Text style={styles.viewTitulos}>LA TASA DE INTERES ES</Text>
                    <Text style={styles.viewSubtextos}>{tasa}%</Text>
                </View>

                
                
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#558b2f' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon type= "MaterialCommunityIcons" name="plus" />
                    <Button style={{ backgroundColor: '#558b2f' }} onPress={() => console.log("nueva transaccion")}>
                        <Icon  type= "MaterialCommunityIcons" name="briefcase-plus-outline" />
                    </Button>
                    <Button style={{ backgroundColor: '#00838f' }} onPress={() =>console.log("historial transaccion")}>
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
    },
    viewinfo:{
        marginTop: 110,
        marginLeft: 50,
        marginRight:15
    },
    viewTitulos:{
        fontSize: 20,
        fontWeight: "bold"
    },
    viewSubtextos:{
        fontSize: 15,
        color: "grey",
        marginTop: 10,
        marginBottom: 10
    }
});