import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native';

export default function Viajes() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>VIAJES</Text>
    
            <View style={styles.viewBtn}>
                <Button 
                    title="DESTINOS"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("destinos")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="PROXIMOS EVENTOS"
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
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    btnAddMaestro: {
      marginBottom: 5
    },
    btnStyle: {
      backgroundColor: "#00a680"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 1,
      alignItems: "center",
      marginBottom: 30
    }
  });
