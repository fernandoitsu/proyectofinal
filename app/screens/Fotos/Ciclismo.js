import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function Ciclismo() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>FOTOS DE CICLISMO</Text>

            <div>
            <View style={styles.photo}>
                
                <Image
                    style={{ width: 437, height: 293}}                
                    resizeMode='contain'
                    source={require('./../../../assets/ciclismo1.jpg')}                    
                /> 
            </View> 
            <View style={styles.photo}>
                
                <Image
                    style={{ width: 437, height: 293}}                
                    resizeMode='contain'
                    source={require('./../../../assets/ciclismo2.jpg')}                    
                /> 
            </View> 

            </div>                                   
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    btnStyle: {
      backgroundColor: "#00a680"
    },
    btnContainer: {
      width: "70%",
      marginBottom: 5,
      marginTop: 5
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
    },
    photo: {
        height: 180,
        width: 180,
        marginBottom: 20,
        marginTop: 20
      }
  });

  const list = [
    
  ];
