import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const App =() => {
     return (
      <View style={styles.container} >
        <Text style={styles.title} >About
Dinner is Done!</Text>


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