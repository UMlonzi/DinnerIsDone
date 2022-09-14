import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text >Filter by</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    }
})