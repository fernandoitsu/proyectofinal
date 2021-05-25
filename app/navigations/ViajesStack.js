import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Viajes from "../screens/Viajes";

const Stack = createStackNavigator();

export default function ViajesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="viajes"
                component={Viajes}
                options={{title: "VIAJES"}}
            />
        </Stack.Navigator>
    );
}

