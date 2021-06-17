import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Somos from "../screens/Somos/Somos";

const Stack = createStackNavigator();

export default function SomosStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="somos"
                component={Somos}
                options={{title: <h1><center> " ¿QUIENES SOMOS? " </center></h1>}}
            />
        </Stack.Navigator>
    );
}

