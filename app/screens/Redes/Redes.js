import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";

export default function Redes() {
    return (
        
        <ScrollView centerContent={true} styles={styles.viewBody}>
            
            <View style={styles.viewBtn}> 
            <Text style={styles.textTitle}>https://www.facebook.com/canekefey/?ref=pages_you_manage </Text>
            <Text style={styles.textTitle}>https://www.instagram.com/chanekefey/?hl=es-la </Text>
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