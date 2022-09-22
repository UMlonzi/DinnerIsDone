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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
         Morbi orci neque, congue nec porta in, lobortis et justo. Nunc est magna, dapibus eu venenatis sit amet, imperdiet ut est. 
         Suspendisse tincidunt risus et risus eleifend, et vestibulum eros sollicitudin. Donec est ipsum, ullamcorper sit amet lobortis a, 
         
        </Text>
        <Text style={styles.txt} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
         Morbi orci neque, congue nec porta in, lobortis et justo. Nunc est magna, dapibus eu venenatis sit amet, imperdiet ut est. 
         
        </Text>
        <Text style={styles.txt} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
         Morbi orci neque, congue nec porta in, lobortis et justo. Nunc est magna, dapibus eu venenatis sit amet, imperdiet ut est. 
         ut faucibus metus, et pharetra lorem. Nunc ornare odio neque, nec tincidunt sapien pellentesque sed. 
          
         Aenean luctus, eros et facilisis varius, sapien mi aliquam arcu, 
         venenatis commodo leo urna a sapien. Mauris dapibus odio id iaculis cursus. Aenean nec convallis quam.
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