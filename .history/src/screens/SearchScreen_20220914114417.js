import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.label} >Filter by</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
})