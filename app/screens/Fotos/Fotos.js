import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function Fotos() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>

           
            <Text style={styles.textTitle}>FOTOS</Text>

            <View style={styles.viewBtn}>            
            <Image
                style={styles.photo}
                source={require('./../../../assets/camara.png')}
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
                    title="SENDERISMO"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("senderismo")}
                />
                <Button 
                    title="CICLISMO"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("ciclismo")}
                />

                <Button 
                    title="ESCALADA"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("escalada")}
                />
                <Button 
                    title="RAPPEL"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("rappel")}
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
      width: "20%",
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
        marginBottom: 20,
        marginTop: 20
      }
  });

  const list = [
    
    
  ];
