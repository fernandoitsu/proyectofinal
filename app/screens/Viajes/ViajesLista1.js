import React from 'react';
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import useFetch from '../../hooks/useFetch';
import { useNavigation } from "@react-navigation/native";
import ListItems from '../../components/Destino/ListItem';

export default function ProductoLista1() {
  const { loading, data: destinos } = useFetch('http://localhost:3000/destinos/')
  const navigation = useNavigation();
    return (
      <ScrollView style={styles.ScrollviewBody}>
        <View style={styles.container}>
              {loading ? <Text>Cargando ...</Text> :
                  <FlatList
                      style={styles.list}
                      data={destinos}                      
                      renderItem={({ item }) =>
                          <ListItems
                              onPress={() => navigation.navigate('viajes-detalle', 
                                { id: item.id, lugar: item.lugar, fecha: item.fecha, nombre: item.nombre, Telefono: item.Telefono, numPersonas: item.numPersonas })}
                              id={item.id}
                              lugar={item.lugar}
                              fecha={item.fecha}
                              nombre={item.nombre}
                              Telefono={item.Telefono}
                              numPersonas={item.numPersonas}
                          >
                          </ListItems>
                      }
                  />}
          </View>
      </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#e5c',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
  },
  list: {
      alignSelf: 'stretch',
  }
})

