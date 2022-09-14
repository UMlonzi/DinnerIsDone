import { StyleSheet, SafeAreaView,View, Text,Box, ScrollView, Image } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text>SearchScreen</Text>
      <ScrollView style={styles.scrollView} >
        
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
    flexDirection: 'row'
  }
});