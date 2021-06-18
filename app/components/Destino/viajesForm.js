import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Button, Icon, Input } from 'react-native-elements';

          
export default function viajesForm(props) {

    const [lugar, setlugar] = useState();
    const [fecha, setfecha] = useState();
    const [nombre, setnombre] = useState();
    const [Telefono, setTelefono] = useState();
    const [numPersonas, setnumPersonas] = useState();
    return (

      
      <ScrollView centerContent={true} styles={styles.viewBody}>

        <View>            

            <Text style={styles.textTitle}>{props.name}</Text>
            <Input
                placeholder='Lugar'
                leftIcon={{ type: 'material-community', name: 'map-search' }}
                onChange={(e) => setlugar(e.nativeEvent.text)}
            />
            <Input
                placeholder='Fecha'
                leftIcon={{ type: 'material-community', name: 'calendar-check' }}
                onChange={(e) => setfecha(e.nativeEvent.text)}
            />
            <Input
                placeholder='Nombre'
                leftIcon={{ type: 'material-community', name: 'card-account-details' }}
                onChange={(e) => setnombre(e.nativeEvent.text)}
            />
            <Input
                placeholder='Telefono'
                leftIcon={{ type: 'material-community', name: 'cellphone-basic' }}
                onChange={(e) => setTelefono(e.nativeEvent.text)}
            />
            <Input
                placeholder='Numero de Personas'
                leftIcon={{ type: 'material-community', name: 'human-male-male' }}
                onChange={(e) => setnumPersonas(e.nativeEvent.text)}
            />
            <Button 
                title="Reservar Destino"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => {
                  fetch('http://localhost:3000/destinos/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      lugar: lugar,
                      fecha: fecha,
                      nombre: nombre,
                      Telefono: Telefono,
                      numPersonas: numPersonas
                    })
                }).then(()=>{ 
                  setlugar();
                  setlugar('Escribe el lugar ...');
                  setfecha();
                  setfecha('Escribe la fecha ...');
                  setnombre();
                  setnombre('Escribe tu nombre ...');
                  setTelefono();
                  setTelefono('Escribe tu Telefono ...');
                  setnumPersonas();
                  setnumPersonas('Escribe el numero de personas ...');
                  alert('Destino agregado'+' '+lugar+' '+fecha+' '+nombre+' '+Telefono+' '+numPersonas);
                })
                }}
            />
            <View style={styles.viewBtn}>
            <Image style={styles.photo}                    
                  style={{ width: 500, height: 350}}                
                  resizeMode='contain'
                  source={require('./../../../assets/viajes programados.png')}                    
              />
              </View>

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
