import React from 'react'
import  {RViewerTrigger, RViewer} from 'react-viewerjs';

function App(){

  let imagenes=[
    require("./../../../assets/senderismo1.jpg"),
    require("./../../../assets/senderismo2.jpg"),
    require("./../../../assets/senderismo3.jpg"),
    require("./../../../assets/senderismo4.jpg"),
    require("./../../../assets/senderismo5.jpg"),
    require("./../../../assets/senderismo6.jpg"), 
    
    
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


export default function Senderismo() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>FOTOS DE SENDERISMO</Text>

            <div>
            <View style={styles.photo}>
            
                <Image
                    
                    style={{ width: 600, height: 450}}                
                    resizeMode='contain'
                    source={require('./../../../assets/senderismo1.jpg')}                    
                /> 
                
            </View> 
            
            <View style={styles.photo}>
            
                <Image
                    
                    style={{ width: 600, height: 380}}                
                    resizeMode='contain'
                    source={require('./../../../assets/senderismo2.jpg')}                    
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
    
  ];
*/