import React from 'react'
import  {RViewerTrigger, RViewer} from 'react-viewerjs';

function App(){

  let imagenes=[
    require("./../../../assets/escalada1.JPG"),
    require("./../../../assets/escalada2.JPG"),
    require("./../../../assets/escalada3.JPG"),
    require("./../../../assets/escalada4.JPG"),
    require("./../../../assets/escalada5.JPG"),
 
  ];

  return(
    <div>
        <RViewer imageUrls={imagenes}>
          <div style={{display: 'flex', marginTop: '40px'}}>
            {imagenes.map((imagen, index)=>{
              return(
                <RViewerTrigger index={index}>
                  <img src={imagen} style={{width:'150px', height:'150px', marginLeft:'20px', border:'2px solid black'}}/>
                </RViewerTrigger>
              )
            })}

          </div>
        </RViewer>
    </div>

  );
}

export default App;



/*import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";


export default function Escalada() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>FOTOS DE ESCALADA</Text>

            <div>
            <View >
            <center>
                <Image
                    style={styles.photo}
                    style={{ width: 437, height: 293}}                
                    resizeMode='contain'
                    source={require('./../../../assets/escalada1.JPG')}                    
                /> 
                </center>
            </View> 
            <br></br>
            <View>
            <center>
                <Image
                    style={styles.photo}
                    style={{ width: 437, height: 293}}                
                    resizeMode='contain'
                    source={require('./../../../assets/escalada2.jpg')}                    
                /> 
                </center>
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
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
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
    
  ];*/
