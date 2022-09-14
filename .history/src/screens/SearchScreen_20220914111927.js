import { StyleSheet, SafeAreaView,View, Text,Box, ScrollView, Image } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text>SearchScreen</Text>
      <ScrollView style={styles.scrollView} >
        <View style={{ height: 130 , width: 130}}>
          <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>
        <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>
        <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>

        </View>
      </ScrollView>
      <Text>Catagory</Text>
      <ScrollView>
        <View style={{ height: 130 , width: 130}}>
          <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>
        <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>
        <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>

        </View>
      </ScrollView>
      <Text>Budget</Text>
      <ScrollView>
        <View style={{ height: 130 , width: 130}}>
          <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>
        <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>
        <View style={{ flex: 2}}>
          <Image source= {require ('../../assets/images/half.jpg')}
          style={{ flex: 1, width: "50%", height: "50%", resizeMode: 'cover' }}
          />
            <Text>
              Home
            </Text>
         
        </View>

        </View>
      </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  scrollView : {
    flex: 1,
    flexDirection: 
  }
});