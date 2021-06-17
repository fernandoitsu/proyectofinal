import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Menu from "../screens/Menu/Menu";

const Stack = createStackNavigator();

export default function MenuStack() {
    return(
        <Stack.Navigator>
            
                <Stack.Screen 
                    name="menu"
                    component={Menu}               
                    options={{title:  <h1><center>"HOME" </center></h1>}}                
                />
            
        </Stack.Navigator>
    );
}

