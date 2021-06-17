import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Menu from "./MenuStack";
import Viajes from "./ViajesStack";
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
    case "menu":
      iconName = "home-variant";
      break;
    case "somos":
      iconName = "account-group";
      break;
    case "viajes":
      iconName = "bus";
      break;
    case "fotos":
      iconName = "camera";
      break;
    case "contacto":
      iconName = "comment";
      break;
      case "redes":
      iconName = "facebook";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}