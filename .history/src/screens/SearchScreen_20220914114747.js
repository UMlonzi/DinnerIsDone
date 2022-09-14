import { SafeAreaView, ScrollView, StyleSheet, Text, Tou } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.label} >Filter search by</Text>
      <ScrollView>

      </ScrollView>
    </SafeAreaView>
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
})