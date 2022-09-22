import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
    </View>
    );
   }

   export default App

   
const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#F3D34B',
  },
  title : {
    alignSelf: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30,
    marginEnd: 30,
  },
  header : {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  txt : {
    fontSize: 15,
    fontWeight: 'semibold',
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