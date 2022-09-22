import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const App =() => {
     return (
      <View style={styles.container} >
        <Text style={styles.title} >About </Text>
        <Text style={styles.title2} >Dinner is Done!</Text>
        <Image
            source={require('./assets/Logo.png')}
            style={styles.image}>
        </Image>
        <Text style={styles.txt} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis. Morbi orci neque, congue nec porta in, lobortis et justo. Nunc est magna, dapibus eu venenatis sit amet, imperdiet ut est. Suspendisse tincidunt risus et risus eleifend, et vestibulum eros sollicitudin. Donec est ipsum, ullamcorper sit amet lobortis a, molestie et augue. Nam dictum lectus ligula, vel rutrum erat luctus non. Nunc iaculis nunc tortor, at maximus urna semper id. Sed non risus sed eros aliquam tempor.
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
      color : '#29281D',
    },
    title2 : {
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      
      marginBottom: 30,
      color : '#29281D',
    },
    image: {
      width: '97%',
      height: '20%',
      resizeMode: 'center',
      justifyContent: 'center',
      marginLeft: 5,
  
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