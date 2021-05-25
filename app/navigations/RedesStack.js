import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Redes from "../screens/Redes";

const Stack = createStackNavigator();

export default function RedesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="redes"
                component={Redes}
                options={{title: "REDES SOCIALES"}}
            />
        </Stack.Navigator>
    );
}