import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function FavouritesScreen() {
  return (
    <View>
      <Text style={styles.label}>My Favourite spots</Text>
      <ScrollView></ScrollView>
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
