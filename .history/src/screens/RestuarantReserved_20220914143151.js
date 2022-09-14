import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function RestuarantReserved() {
  return (
    <SafeAreaView>
      <Text style={styles.label}>RestuarantReserved</Text>
    </View>
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
