import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
import { Ionicons, AntDesign , SimpleLineIcons } from '@expo/vector-icons';


const Help =() => {
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Help Center</Text>
      <Text style={styles.header} >Sed ornare diam sed sodales fringilla?</Text>
      <Text style={styles.txt} > Pellentesque sollicitudin suscipit ex, at fermentum diam mollis vel. Sed velit lectus, 
        pellentesque nec bibendum eu, imperdiet ut massa. Nulla ut tempor eros. 
        Nullam sed ante ac arcu pharetra malesuada. Morbi sit amet risus a massa hendrerit varius. 
        Morbi mattis efficitur dictum. Maecenas pulvinar molestie dui et suscipit. </Text>
        <Text style={styles.header} >Sed ornare diam sed sodales fringilla?</Text>
      <Text style={styles.txt} > Pellentesque sollicitudin suscipit ex, at fermentum diam mollis vel. Sed velit lectus, 
        pellentesque nec bibendum eu, imperdiet ut massa. Nulla ut tempor eros. 
        Nullam sed ante ac arcu pharetra malesuada. Morbi sit amet risus a massa hendrerit varius. 
        Morbi mattis efficitur dictum. Maecenas pulvinar molestie dui et suscipit. </Text>

        <Text style={styles.mail} >
        <Ionicons name="mail" size={32} color="black" style={styles.icon} />
             help@appname.com
        </Text>
        <Text style={styles.cell} >
        <SimpleLineIcons name="screen-smartphone" size={32} color="black" />
           mobile consultant
        </Text>
        <Text style={styles.cell} >
        <AntDesign name="customerservice" size={32} color="black" />
          call centre agent
        </Text>
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