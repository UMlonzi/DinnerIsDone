import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Help =() => {
  return (
    <View>
      <Text style={styles.title} >Help Center</Text>
      <Text style={styles.header} >Sed ornare diam sed sodales fringilla?</Text>
      <Text style={styles.txt} > Pellentesque sollicitudin suscipit ex, at fermentum diam mollis vel. Sed velit lectus, 
        pellentesque nec bibendum eu, imperdiet ut massa. Nulla ut tempor eros. 
        Nullam sed ante ac arcu pharetra malesuada. Morbi sit amet risus a massa hendrerit varius. 
        Morbi mattis efficitur dictum. Maecenas pulvinar molestie dui et suscipit. </Text>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
title : {

},
header : {

},
txt : {

},

})