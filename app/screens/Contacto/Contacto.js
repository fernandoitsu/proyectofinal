import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";

export default function Contacto() {
    return (

        
        
        <ScrollView centerContent={true} styles={styles.viewBody}>

          <View style={styles.viewBtn}> 
            
            <Text style={styles.textTitle}>ECOURUAPANI URUAPAN S.A. de C.V.</Text>
            <Text style={styles.textTitle}>DOMICILIO: MIGUEL HIDALGO # 82</Text>
            <Text style={styles.textTitle}>COL. CENTRO</Text>
            <Text style={styles.textTitle}>CEL: 4521287592</Text>
            <Text style={styles.textTitle}>CORREO: ECOURUAPANI@GMAIL.COM</Text>           

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
      color: '#f8f8ff',
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
        justifyContent: 'center',
        alignItems: 'center',         
        marginBottom: 20,
        marginTop: 20
      }
  });