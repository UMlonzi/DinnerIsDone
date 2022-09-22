import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';


const App =() => {
     return (
      <SafeAreaView style={styles.container} >
        <TouchableOpacity style={styles.back} >
        <Ionicons name="md-arrow-back-sharp" size={50} color="black" />
        </TouchableOpacity>
        <Text style={styles.title} >About </Text>
        <Text style={styles.title2} >Dinner is Done!</Text>
        <Image
            source={require('./assets/Logo.png')}
            style={styles.image}>
        </Image>
        <Text style={styles.txt} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
         Morbi orci neque, congue nec porta in, lobortis et justo. Nunc est magna, dapibus eu venenatis sit amet, imperdiet ut est. 
        
         
        </Text>
        <Text style={styles.txt2} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
         Morbi orci neque, congue nec porta in,  
         
        </Text>
        <Text style={styles.txt3} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
         Morbi orci neque, congue nec porta in, lobortis et justo. Nunc est magna, dapibus eu venenatis sit amet, 
          
         Aenean luctus, eros et facilisis varius, sapien mi aliquam arcu, 
         venenatis commodo leo urna a sapien.
        </Text>

      </SafeAreaView>
    );
   }

   export default App

  































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