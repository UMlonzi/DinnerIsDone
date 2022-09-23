import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Image} from 'react-native'
import React, { useRef, useState} from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app'
import { firebaseConfig } from '../../config';
import { useNavigation } from '@react-navigation/native'

const login = () => {

  const navigation = useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');

    const [code, setCode] = useState('');
 
    const [verificationId, setVerificationId] = useState(null);
 
    const recaptchaVerifier = useRef(null);
 
    const sendVerification = () => {
     const phoneProvider = new firebase.auth.PhoneAuthProvider();
     phoneProvider
         .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
         .then(setVerificationId);
         setPhoneNumber('');
    };
     const confirmCode = () => {
         const credential = firebase.auth.PhoneAuthProvider.credential(
             verificationId,
             code
         );
         firebase.auth().signInWithCredential(credential)
         .then(() => {
             setCode('')
         })
         .catch((error) => {
             // show an alert in case of error
             alert(error)
         })
         Alert.alert(
             'Login Successful. Welcome To Your Journal Diary',
         );
         navigation.navigate('Home')
         
  return (
    <View>
      <Text>login</Text>
    </View>
  )
}

export default login