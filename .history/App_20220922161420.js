import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const App =() => {
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

        <Text style={styles} >
        <Feather name="mail" size={30} color="black" />
          help@appname.com
        </Text>
    </View>
    );
   }

   export default App

   
const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#E5DDDB',
  },
  title : {
    alignSelf: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
    color : '#29281D',
  },
  header : {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    color : "#29281D",
  },
  txt : {
    fontSize: 15,
    fontWeight: 'semibold',
    marginTop: 5,
    marginBottom: 5,
    color : "#8C7C34",
    marginLeft: 15,
  },
  
  })
































// import TabNavigation from './src/navigation/stackNavigation';
// import Header from './src/components/header';

// export default function App() {
//   return (
//     <>
//       <Header/>
//       <TabNavigation />
//     </>  
//   );
// }