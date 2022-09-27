import React, {useState, useEffect } from 'react';
import { hospitais } from '../hospitais.json';
import { StyleSheet, Text, View, TextInput, Pressable, Modal} from 'react-native';


const MapsScreen = () => {

    const [ data, setData ] = useState();
    var destinations = '';
    const apiKey = 'AIzaSyC9-UJSfbULPg4DCkyTsH8oD0x_Pl1K2Uw'
    const origin = '-23.724399162440584,%20-46.86348076410735'

    const onInit = async () => {
        formatarQueryDestino()
      };

    const pesquisar = async () => {
      console.log(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destinations}&origins=${origin}&key=${apiKey}`);
      try {
        const response = await fetch('https://maps.googleapis.com/maps/api/distancematrix/json?destinations=-23.718466323041998,%20-46.560175166228184|-23.63037519720466,%20-46.521421956293|-23.6699315696113,%20-46.44840176491919|-23.712538743615273,%20-46.54633585072779|-23.643722530643885,%20-46.64210728211316&origins=-23.724399162440584,%20-46.86348076410735&key=AIzaSyC9-UJSfbULPg4DCkyTsH8oD0x_Pl1K2Uw');
        const json = await response.text();
        console.log(json)
      } catch {
        console.log('error');
      }
    }

    const formatarQueryDestino = () => {
      var controle = 0;
     hospitais.forEach(e => {
      if(controle === (hospitais.length - 1)) {
        destinations += e.loc;
      } else {
        destinations += e.loc + '|';
        controle += 1;
      }
     })
    }

    useEffect(() => { onInit(); }, []);

    return (
      <View style={styles.container}>
            <Pressable 
                    style={styles.botaoAcessar}
                    onPress={() => teste()}>
                    <Text style={{color: '#FFF', fontWeight: '400', fontSize: 15}}>CONFIRMAR</Text>
                </Pressable>
               
      </View>
    );
}

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  botaoAcessar: {
    width: 320,
    height: 40,
    backgroundColor: '#82B3A6',
    borderRadius: 20,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
})