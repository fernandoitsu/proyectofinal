import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "../screens/Producto";

const Stack = createStackNavigator();

export default function ProductoStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="product"
                component={Product}
                options={{title: "CATALOGO DE PRODUCTOS"}}
            />
        </Stack.Navigator>
    );
}

