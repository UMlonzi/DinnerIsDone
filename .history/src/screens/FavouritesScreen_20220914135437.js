import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function FavouritesScreen() {
  return (
    <View>
      <Text>My Favourite spots</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
