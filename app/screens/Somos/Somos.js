import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function Somos() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            
          <View style={styles.viewBtn}>  

          <Text style={styles.textTitle}>
            SOMOS UNA EMPRESA MULTIDISCIPLINARIA CON UNA CONCIENCIA SOCIALMENTE RESPONSABLE. <br></br>              
            ENFOCADA EN LA CONSTRUCCION DE LA VIDA SOSTENIBLE Y SUSTENTABLE A TRAVES DE MULTIPLES ACTIVIDADES Y SERVICIOS.<br></br> </Text>
            
          <Image
                style={styles.photo}
                style={{ width: 600, height: 600}}
                source={require('./../../../assets/somos.JPG')}
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
      fontSize: 26,
      fontWeight: "bold", 
      marginTop: 4,
      paddingVertical: 6,      
      borderWidth: 6,
      borderColor: '#20232a',
      backgroundColor: "#000000", 
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

  