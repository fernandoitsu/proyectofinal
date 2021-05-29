import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Viajes from "../screens/Viajes/Viajes";
import Destinos from "../screens/Viajes/Destinos";
import Eventos from "../screens/Viajes/Eventos";

const Stack = createStackNavigator();

export default function ViajesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="viajes"
                component={Viajes}
                options={{title: "SERVICIO DE VIAJES"}}
            />
            <Stack.Screen 
                name="destinos"
                component={Destinos}
                options={{title: "NUESTROS DESTINOS"}}
            />
            <Stack.Screen 
                name="eventos"
                component={Eventos}
                options={{title: "EVENTOS"}}
            />            
        </Stack.Navigator>
    );
}
