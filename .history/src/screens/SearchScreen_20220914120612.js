import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.label} >Filter search by</Text>
      <Text style={styles.label2} >Cuisines</Text>
        <ScrollView style={styles.scroll}>
            <TouchableOpacity style={styles.cuisine} >
                <Text style={styles.txt} >Indian</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
                <Text style={styles.txt} >Mexican</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
                <Text style={styles.txt} >Italian</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
                <Text style={styles.txt} >Indian</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
                <Text style={styles.txt} >Indian</Text>
            </TouchableOpacity>
        </ScrollView>
        <Text style={styles.label2} >Category</Text>
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
    padding: 60,
    width: '50%',
    margin: 10,
    backgroundColor: '#f9f9f9'
    },
    scroll :{
        flexDirection: 'column',
    }, 
    label2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        width: '70%',
        marginLeft: 25,
        marginTop: 5,
    },
})