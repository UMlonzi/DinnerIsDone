import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.label} >Filter search by</Text>
      <ScrollView>
      <TouchableOpacity style={styles.cuisine} >

      </TouchableOpacity>
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
    cuisine : {
        padding: 50,
    margin: 10,
    borderWidth: 25,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
    }
})