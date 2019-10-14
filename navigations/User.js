import React, { Component } from 'react';
import { Icon } from 'react-native-elements'

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Screens Creditex
import HomeScreen from '../screens/Home';
import CuentaScreen from '../screens/Cuenta';
import DetallesScreen from '../screens/Detalles';

//mis cabeceras de navegacion
const homescreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Home"
        })
    },
    Detalles: {
        screen: DetallesScreen,
        navigationOptions: ({ navigation }) => (
            {
                title: navigation.state.params.item.name
            }
        )
    }
});

const cuentascreenStack = createStackNavigator({
    Cuenta:{
        screen: CuentaScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Crear cuenta"
        })
    }
});

//mi barra de abajo de la navegacion
const RootStack = createBottomTabNavigator({
    Home:{
        screen: homescreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:"Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                name="bank"
                type= "material-community"
                size= {22}
                color= {tintColor} 
                />

            )
        })
    },
    Cuenta:{
        screen: cuentascreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:"New",
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                name= "plus-circle-outline"
                type= "material-community"
                size= {30}
                color= {tintColor} 
                />

            )
        })
    }
},
{
    initialRouteName:'Home',
    order:['Home','Cuenta'],
    tabBarOptions:{
        inactiveTintColor:"#646464",
        activeTintColor:"#558b2f"
    }
}
);

//despliega mis screens
export default createAppContainer(RootStack);