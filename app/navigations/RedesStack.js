import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Redes from "../screens/Redes/Redes";

const Stack = createStackNavigator();

export default function RedesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="redes"
                component={Redes}
                options={{title: <h1><center> "REDES SOCIALES" </center></h1>}}
            />
        </Stack.Navigator>
    );
}