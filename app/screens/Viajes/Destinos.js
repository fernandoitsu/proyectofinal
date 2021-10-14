import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from "react-native-elements";
import useFetch from '../../hooks/useFetch';

export default function Destino( { navigation }) {
  const { loading, data: destinos } = useFetch('http://localhost:3000/destinos')
    return (
      <View style={styles.container}>
      {loading ? <Text>Cargando ...</Text> :
          <FlatList
              style={styles.list}
              data={destinos}
              keyExtractor={x => x.id}
              renderItem={({ item }) =>
                  <ListItem
                      onPress={() => navigation.navigate('destino-detalle', { _id: item.id })}
                      lugar={item.lugar}
                      fecha={item.fecha}
                      nombre={item.nombre}
                      Telefono={item.Telefono}
                      numPersonas={item.numPersonas}
                  />
              }
          />}
  </View>
    );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
  },
  list: {
      alignSelf: 'stretch',
  }
})
