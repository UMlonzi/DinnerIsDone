import React from 'react';
import { Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default Header {
  render() {
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
}
