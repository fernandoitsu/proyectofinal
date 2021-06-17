import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function Eventos() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>"PROXIMOS EVENTOS"</Text>

            <div>

            <View style={styles.photo}>            
                <Image                  
                    style={{ width: 400, height: 500}}
                    resizeMode='contain'
                    source={require('./../../../assets/congreso.jpg')}     
                />

                <View style={styles.photo}>            
                <Image                     
                    style={{ width: 700, height: 550}}                
                    resizeMode='contain'
                    source={require('./../../../assets/curso.PNG')}                    
                />            
            </View>
                    
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
        /*height: 180,
        width: 180,*/
        marginBottom: 0,
        marginTop: 0
      }
  });

  const list = [
    
  ];


    