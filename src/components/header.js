<<<<<<< HEAD
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import logo from '../../assets/Logo.png';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
      <View style={styles.header}>
        <Image source={logo} styles={styles.logo} alt={'logo'}/>
        <TouchableOpacity style={styles.profileIcon}>
         <Ionicons name="person-circle-sharp" size={80} color="black" />
        </TouchableOpacity>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: "1px",
    height: "1px",
  },
  profileIcon: {
    width: 100,
    height: 100,
    padding: 10,
  }
})
=======
import React from 'react';
import { Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
    return (
      <View>
        <Image
      source={require('../../assets/Logo.png')}
      style={styles.image}>
    </Image>
    <Ionicons name="md-person-circle" size={24} color="black" />
      </View>
    )
  }
>>>>>>> b022fd81c1ad5627b6125445b5104237d3e11276
