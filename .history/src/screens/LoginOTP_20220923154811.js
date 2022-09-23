import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Image} from 'react-native'
import React, { useRef, useState} from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app'
import { firebaseConfig } from '../,,';
import { useNavigation } from '@react-navigation/native'

const login = () => {
  return (
    <View>
      <Text>login</Text>
    </View>
  )
}

export default login