import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Menu from "./MenuStack";
import Viajes from "./ViajesStack";
import Inicio from "./InicioStack";
import Somos from "./SomosStack";
import Fotos from "./FotosStack"
import Contacto from "./ContactoStack"
import Redes from "./RedesStack"

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="menu"
          tabBarOptions={{
            inactiveTintColor: "#646464",
            activeTintColor: "#00a685"
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color)
          })}
        >
            <Tab.Screen
              name="menu"
              component={Menu}
              options={{ title: "HOME" }}
            />
            <Tab.Screen
              name="inicio"
              component={Inicio}
              options={{ title: "INICIO" }}
            />
            <Tab.Screen
              name="somos"
              component={Somos}
              options={{ title: "¿QUIENES SOMOS?" }}
            />
            <Tab.Screen
              name="viajes"
              component={Viajes}
              options={{ title: "VIAJES" }}
            />
            <Tab.Screen
              name="fotos"
              component={Fotos}
              options={{ title: "FOTOS" }}
            />      
            <Tab.Screen
              name="contacto"
              component={Contacto}
              options={{ title: "CONTACTO" }}
            />     
            <Tab.Screen
              name="redes"
              component={Redes}
              options={{ title: "REDES SOCIALES" }}
            />          
            
          </Tab.Navigator>
        </NavigationContainer>
      );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "alumnos":
      iconName = "account";
      break;
    case "grupos":
      iconName = "account-group";
      break;
    case "maestros":
      iconName = "account-check";
      break;
    case "materias":
      iconName = "book";
      break;
    case "promedios":
      iconName = "chart-bar";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}