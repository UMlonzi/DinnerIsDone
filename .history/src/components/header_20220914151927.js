import React from 'react';
import { Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class header extends Component {
  render() {
    return (
      <View>
        <Image
      source={require('../../assets/Logo.png')}
      style={styles.image}>
    </Image>
    
      </View>
    )
  }
}
