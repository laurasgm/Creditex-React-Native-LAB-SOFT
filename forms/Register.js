import React, { Component } from 'react';
import {StyleSheet,Text,View} from "react-native";

import inputTemplate from './templates/Input';

import t from "tcomb-form-native";

// Registro para crear una cuenta nueva
export const RegisterStruct = t.struct({
    name: t.String,
    description: t.String,
    tasainteres: t.Number
})

export const RegisterOptions = {
    fields:{
        name:{
            template: inputTemplate,
            config:{
                placeholder:"Nombre de la cuenta",
                iconType:"material-community",
                iconName: "account-outline"
            }
        },
        description:{
            template: inputTemplate,
            config:{
                placeholder:"Decribe tu cuenta",
                iconType:"material-community",
                iconName: "book-open-page-variant"
            }
        },
        tasainteres:{
            template: inputTemplate,
            config:{
                placeholder:"¿Tasa de interes?",
                iconType:"material-community",
                iconName:"currency-usd"

            }
        }

    }
};