import React, { Component } from 'react';
import {StyleSheet,Text,View} from "react-native";

import t from "tcomb-form-native";


export const RegisterStruct = t.struct({
    name: t.String,
    description: t.String,
    tasainteres: t.Number
})

export const RegisterOptions = {
    fields:{
        name:{
            label:"Nombre (*)",
            placeholder: "Nombre de la cuenta",
            error:"Nombre invalido"
        },
        description:{
            label:"Descripcion (*)",
            placeholder: "Decribe tu cuenta",
            error:"Descripcion invalida"
        },
        tasainteres:{
            label:"Tasa de interes (*)",
            placeholder: "¿De cuanto es tu tasa de interes?",
            error:"Tasa de interes invalida"

        }

    }
};