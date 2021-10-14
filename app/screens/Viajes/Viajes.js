import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";

import viajesLista from "./../../components/Destino/viajesLista";

export default function Viajes() {
    const navigation = useNavigation();
    return (

      

        <ScrollView centerContent={true} styles={styles.viewBody}>           
            <Text style={styles.textTitle}> " VIAJES " </Text>

            <View style={styles.viewBtn}>            
            <Image
                style={styles.photo}
                style={{ width: 700, height: 400}}
                source={require('./../../../assets/viajes.jpg')}
            />

              <viajesLista elementos={list}/>

                    <Button 
                    title="DESTINOS"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("destinos")}
                    />

                    <Button
                    title="Lstado Destino"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("viajes-lista")}
                    />

                    <Button 
                    title="Detalle Destinos"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("viajes-detalle")}
                />

                
                <Button 
                    title="EVENTOS"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("eventos")}
                />

                <Button 
                    title="Modal Destinos"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("viajes-modal")}
                />
                
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textTitle: {
      color: '#008000',
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold", 
      marginTop: 4,
      paddingVertical: 6,      
      borderWidth: 6,
      
      borderColor: '#20232a',
      backgroundColor: "#000000", 
    },
    btnStyle: {
      backgroundColor: "#006400"
    },
    btnContainer: {
      width: "40%",
      marginBottom: 10,
      marginTop: 10
      
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
    },
    photo: {
        height: 180,
        width: 180,
        marginBottom: 50,
        marginTop: 0
      }
  });

  const list = [
    {
      title: "Destino ",
      icon: "map-search"
    },
    {
      title: "Destino 2",
      icon: "map-search"
    },    
    {
      title: "Destino 3",
      icon: "map-search"
    },   
    {
      title: "Destino 4",
      icon: "map-search"
    }
  ];
