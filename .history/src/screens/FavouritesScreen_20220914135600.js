import { StyleSheet, View, Text, Scro } from 'react-native'
import React from 'react'

export default function FavouritesScreen() {
  return (
    <View>
      <Text style={styles.label}>My Favourite spots</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    width: '70%',
    marginLeft: 15,
    marginTop: 5,
  },
});
