import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import RestuarantReserved from './src/screens/RestuarantReserved';
import { Ionicons, Entypo  } from '@expo/vector-icons';



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
              : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'magnifying-glass' : 'search-circle-outline';
          }else if (route.name === 'Bookmarks') {
            iconName = focused ? 'md-bookmarks' : 'md-bookmarks-outline';
          }else if (route.name === 'Favourites') {
            iconName = focused ? 'heart-circle-sharp' : 'heart-circle-outline';
          } 

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
          return <
        },
        tabBarActiveTintColor: '#8C7C34',
        tabBarInactiveTintColor: '#29281d',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookmarks" component={FavouritesScreen} />
      <Tab.Screen name="Favourites" component={RestuarantReserved} />
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
