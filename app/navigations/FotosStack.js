import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Fotos from "../screens/Fotos";

const Stack = createStackNavigator();

export default function FotosStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="fotos"
                component={Fotos}
                options={{title: "FOTOS"}}
            />
        </Stack.Navigator>
    );
}