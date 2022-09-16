import { StyleSheet, Dimensions , View, Text, Pressable,  ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';


export default function HomeScreen() {

  const navigation = useNavigation();


  return (
    
    <View>
    <Pressable
      style={styles.searchButton}
      onPress={() => navigation.navigate('Search')}>
      <Fontisto name="search" size={25} color={'#8C7C34'} />
      <Text style={styles.searchButtonText}>Where are you going?</Text>
    </Pressable>

    <ImageBackground
      source={require('../../assets/images/wallpaper.png')}
      style={styles.image}>
      <Text style={styles.title}>Dinner is Done</Text>

      
    </ImageBackground>
    <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Explore Restaurants 
        
        <Entypo name="bowl" size={24} color="black" /></Text>
      </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#E5DDDB',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#E5DDDB',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8C7C34'
  },

  searchButton: {
    backgroundColor: '#E5DDDB',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
