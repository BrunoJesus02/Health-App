import React from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import { icons } from '../constants';
import fakeDataAPI from '../constants/fakeDataAPI';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{height: 200}}>
        <View style={styles.circle}/>
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Image style={{height: 150, width: 150}} source={require('../img/profile.png')}/>
      </View>

      <View style={styles.content_icons}>
        <View style={styles.icons}>
          <IconMaterial name="bandage" size={30} color='#63877E'/>
        </View>
        <View style={styles.icons}>
          <IconMaterial name="help-rhombus-outline" size={30} color='#63877E' onPress={() => navigation.navigate('Maps')}/>
        </View>
        <View style={styles.icons}>
          <IconMaterial name="book-open-outline" size={30} color='#63877E'/>
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Text style={{fontWeight: '300'}}>HISTÓRICO DE TRIAGEM</Text>
      </View>

      <FlatList
      data={fakeDataAPI.user.triagem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => `${item.id}`}
      renderItem={({item, index}) => (
        <Pressable style={styles.card}>
          <View style={styles.card_icons}>
            <IconMaterial name={item.isGrave === 2 ? "alert-outline" : "check-circle-outline"} 
              size={25} 
              color='#FFF'
              style={{height: 30, margin: 5}}/>
            <Image source={icons.nurse}
            style={{position: 'absolute', right: 3, top: -20}}/>
          </View>
          <View>
            <View style={styles.icons_content}>
              <IconMaterial name="hospital-building"/>
              <Text style={{marginLeft: 5, fontWeight: '500'}}>{item.hospital}</Text>
            </View>
            <View style={styles.icons_content}>
              <IconMaterial name="calendar"/>
              <Text style={{marginLeft: 5, fontWeight: '500'}}>{item.dataVisita}</Text>
            </View>
            <Pressable style={styles.detalhes}
              onPress={() => navigation.navigate('Detalhes', {info: item})}>
              <Text  style={{fontSize: 10, color: '#FFF'}}>VER DETALHES</Text>
              <IconMaterial name="menu-right"/>
            </Pressable>
          </View>
        </Pressable>
      )}>

      </FlatList>
    
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  circle: {
    height: 600,
    width: 600,
    borderRadius: 300,
    backgroundColor: '#5CBFA6',
    position: 'absolute',
    left: -95,
    top: -290
  },
  icons: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25
  },
  content_icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  card: {
    height: 155,
    width: 130,
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    marginTop: 45,
    backgroundColor: '#5CBFA6',
    position: 'relative'
  },
  card_icons: {
    flexDirection: 'row',
    height: 40
  },
  detalhes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 45
  },
  icons_content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 5
  }
})