import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'


export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.label} >Filter search by</Text>
      <ScrollView style={styles.scrol2} >
      <Text style={styles.label2} >Cuisines</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
            <TouchableOpacity style={styles.cuisine} >
                <Image
                source={require}
                >

                </Image>
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
        marginTop: 30,
    },
    cuisine : {
    padding: 60,
    width: '18%',
    margin: 10,
    backgroundColor: '#f9f9f9'
    },
    scroll :{
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 15,
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
        scrol2: {
            marginBottom: 50,
        },
})