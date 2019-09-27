import React, { Component } from 'react';
import {StyleSheet,View} from "react-native";

import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'

export default (inputTemplate = locals =>{
    return(
        <View style= {styles.viewContainer}>
            <Input 
            placeholder={locals.config.placeholder}
            rightIcon={
                <Icon
                  type={locals.config.iconType}
                  name={locals.config.iconName}
                  size={24}
                  color="#b3b3b3"
                />
              }
            onChangeText= {value => locals.onChange(value)}
            ></Input>
        </View>
    )

});

const styles = StyleSheet.create({
    viewContainer:{
        marginTop:12,
        marginBottom:12
    }
});