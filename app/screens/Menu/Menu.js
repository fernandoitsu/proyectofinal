import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";
import color from 'color';
import { ImageBackground } from 'react-native';




export default function Menu() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>  
            <Text style={styles.textTitle}>"BIENVENIDOS A ECOURUAPANI"</Text>
            <View style={styles.viewBtn}>   

              <ImageBackground 
                style={styles.photo}
                style={{ width: 300, height: 300}}
                source={require('./../../../assets/LOGO.jpg')}
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
    },
        
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"   
        
      }
  });

  const list = [
    
    
  ];
