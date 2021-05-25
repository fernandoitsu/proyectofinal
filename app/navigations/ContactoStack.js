import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contacto from "../screens/Contacto";

const Stack = createStackNavigator();

export default function ContactoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="contacto"
                component={Contacto}
                options={{title: "CONTACTO"}}
            />
        </Stack.Navigator>
    );
}