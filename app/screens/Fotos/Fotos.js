import React from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native';

export default function Fotos() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>FOTOS</Text>
    
            <View style={styles.viewBtn}>
                <Button 
                    title="SENDERISMO"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("senderismo")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="RAPPEL"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("rappel")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="ESCALADA"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("escalada")}
                />
            </View>

            <View style={styles.viewBtn}>
                <Button 
                    title="CICLISMO"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("ciclismo")}
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
