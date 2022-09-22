import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const About =() => {
  return (
    <View>
      <Text>About</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container :{
      flex: 1,
      backgroundColor: '#E5DDDB',
    },
    title : {
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      marginTop: 10,
      color : '#29281D',
    },
    title2 : {
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      
      marginBottom: 30,
      color : '#29281D',
    },
    image: {
      width: '97%',
      height: '20%',
      resizeMode: 'center',
      justifyContent: 'center',
      marginLeft: 5,
  
    },
    txt : {
      fontSize: 15,
      fontWeight: 'semibold',
      marginTop: 80,
      marginBottom: 5,
      color : "#8C7C34",
      marginLeft: 15,
    },
    txt2 : {
      fontSize: 15,
      fontWeight: 'semibold',
      marginTop: 5,
      marginBottom: 5,
      color : "#8C7C34",
      marginLeft: 15,
    },
    txt3 : {
      fontSize: 15,
      fontWeight: 'semibold',
      marginTop: 5,
      marginBottom: 5,
      color : "#8C7C34",
      marginLeft: 15,
    },
    back : {
      marginTop: 12,
    },

   })

