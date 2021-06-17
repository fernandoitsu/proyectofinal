import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";


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

          

            {list.map((item, i) => (
                <ListItem key={i} bottomDivider>
                    <Icon name={item.icon} type="material-community" />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ))}

                <Button 
                    title="DESTINOS"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("destinos")}
                />
                <Button 
                    title="EVENTOS"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("eventos")}
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
    
    
  ];
