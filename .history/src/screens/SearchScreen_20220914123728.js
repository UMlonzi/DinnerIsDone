import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { View } from '@aws-amplify/ui-react'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.label} >Filter search by</Text>
      <ScrollView>
      <Text style={styles.label2} >Cuisines</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
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
                <Text style={styles.txt} >Kota</Text>
            </TouchableOpacity>
        </ScrollView>
        <Text style={styles.label2} >Category</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
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
                <Text style={styles.txt} >Kota</Text>
            </TouchableOpacity>
        </ScrollView>
        <Text style={styles.label2} >Budget</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
            <TouchableOpacity style={styles.budget} >
                <Text style={styles.txt} >Indian</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.budget} >
                <Text style={styles.txt} >Mexican</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.budget} >
                <Text style={styles.txt} >Italian</Text>
            </TouchableOpacity>
            
        </ScrollView>
        <View></View>
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
    padding: 60,
    width: '18%',
    margin: 10,
    backgroundColor: '#f9f9f9'
    },
    scroll :{
        flexDirection: 'row',
    }, 
    label2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        width: '70%',
        marginLeft: 25,
        marginTop: 5,
    }, 
    budget : {
        padding: 60,
        width: '30%',
        margin: 10,
        backgroundColor: '#f9f9f9'
        },
})