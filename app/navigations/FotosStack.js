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
                options={{title: <h1><center> "MIRA NUESTRAS FOTOS" </center></h1>}}
            />
            <Stack.Screen 
                name="senderismo"
                component={Senderismo}
                options={{title: <h1><center> "SENDERISMO" </center></h1>}}
            />
            <Stack.Screen 
                name="rappel"
                component={Rappel}
                options={{title: <h1><center> "RAPPEL" </center></h1>}}
            />  
            <Stack.Screen 
                name="escalada"
                component={Escalada}
                options={{title: <h1><center> "ESCALADA" </center></h1>}}
            />  
            <Stack.Screen 
                name="ciclismo"
                component={Ciclismo}
                options={{title: <h1><center> "CICLISMO" </center></h1>}}
            />                     
        </Stack.Navigator>
    );
}
