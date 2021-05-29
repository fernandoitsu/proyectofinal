import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Fotos from "../screens/Fotos/Fotos";
import Senderismo from "../screens/Fotos/Senderismo";
import Rappel from "../screens/Fotos/Rappel";
import Escalada from "../screens/Fotos/Escalada";
import Ciclismo from "../screens/Fotos/Ciclismo";

const Stack = createStackNavigator();

export default function FotosStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="fotos"
                component={Fotos}
                options={{title: "MIRA NUESTRAS FOTOS"}}
            />
            <Stack.Screen 
                name="senderismo"
                component={Senderismo}
                options={{title: "SENDERISMO"}}
            />
            <Stack.Screen 
                name="rappel"
                component={Rappel}
                options={{title: "RAPPEL"}}
            />  
            <Stack.Screen 
                name="escalada"
                component={Escalada}
                options={{title: "ESCALADA"}}
            />  
            <Stack.Screen 
                name="ciclismo"
                component={Ciclismo}
                options={{title: "CICLISMO"}}
            />                     
        </Stack.Navigator>
    );
}
