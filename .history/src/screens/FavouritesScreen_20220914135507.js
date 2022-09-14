import { StyleSheet, View, Text } from 'react-native'
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
