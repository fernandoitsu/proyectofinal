import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Viajes from "../screens/Viajes/Viajes";
import Eventos from "../screens/Viajes/Eventos";
import viajesAgregar from "../screens/Viajes/viajesAgregar";
import ViajesLista from "../screens/Viajes/ViajesLista1";
import ViajesLista1 from "../screens/Viajes/ViajesLista1";
import ViajesDetalle from "../screens/Viajes/ViajesDetalle";
import ViajesModal from "../screens/Viajes/ViajesModal";

const Stack = createStackNavigator();

export default function ViajesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="viajes"
                component={Viajes}
                options={{title: <h1><center>" SERVICIO DE VIAJES " </center></h1>}}
            />
            <Stack.Screen 
                name="destinos"
                component={viajesAgregar}
                options={{title: <h1><center> "NUESTROS DESTINOS" </center></h1>}}
            />
            <Stack.Screen 
                name="viajes-lista"
                component={ViajesLista1}
                options={{title: <h1><center> "DESTINO LISTA" </center></h1>}}
            />    

            <Stack.Screen 
                name="eventos"
                component={Eventos}
                options={{title: <h1><center> "EVENTOS" </center></h1>}}
            />    

            <Stack.Screen 
                name="viajes-detalle"
                component={ViajesDetalle}
                options={{title: <h1><center> "DESTINO DETALLE" </center></h1>}}
            />
            <Stack.Screen 
                name="viajes-modal"
                component={ViajesModal}
                options={{title: <h1><center>"MODAL DESTINO"</center></h1>}}
            />          
           

        </Stack.Navigator>
    );
}
