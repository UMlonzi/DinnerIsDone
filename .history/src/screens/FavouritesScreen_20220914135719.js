import { StyleSheet, SafeView, Text, ScrollView } from 'react-native'
import React from 'react'

export default function FavouritesScreen() {
  return (
    <SafeAView>
      <Text style={styles.label}>My Favourite spots</Text>
      <ScrollView>

      </ScrollView>
    </SafeView>
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
