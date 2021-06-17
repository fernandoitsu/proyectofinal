import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function Destinos() {
    const navigation = useNavigation();
    return (

      
        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}> " DESTINOS " </Text>
            <div>
            <View style={styles.photo}>            
                <Image                    
                    style={{ width: 500, height: 350}}                
                    resizeMode='contain'
                    source={require('./../../../assets/viajes programados.png')}                    
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
      color: '#20232a',
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold", 
      marginTop: 4,
      paddingVertical: 6,      
      borderWidth: 6,      
      borderColor: '#20232a',
      backgroundColor: "#61dafb", 
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

  const list = [
    
  ];
