import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import RestuarantReserved from './src/screens/RestuarantReserved';

import {Entypo } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'magnifying-glass' : 'magnifying-glass';
          }else if (route.name === 'Bookings') {
            iconName = focused ? 'book' : 'book';
          }else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outlined';
          } 

          // You can return any component that you like here!
          return <Entypo name={iconName} size={size} color={color} />;
         
        },
        tabBarActiveTintColor: '#',8C7C34
        tabBarInactiveTintColor: '#8C7C34',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookings" component={RestuarantReserved} />
      
      <Tab.Screen name="Favourites" component={FavouritesScreen } />
    </Tab.Navigator>
  </NavigationContainer>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
