import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/screens/WelcomeScreen';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import ForgetPassword from './components/screens/ForgetPassword';
import TabScreen from './components/screens/TabScreen';
import HotelDetails from './components/screens/HotelDetails';
import GalleryScreen from './components/screens/GalleryScreen';
import CheckAvailability from './components/screens/CheckAvailability';
import confirmScreen from './components/screens/confirmScreen';
import EditProfile from './components/screens/EditProfile';
import Creditcard from './components/screens/Creditcard';
import PaymentScreen from './components/screens/PaymentScreen';
import SearchScreen from './components/screens/SearchScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeTap">
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      <Stack.Screen name="WelcomeScreen" options = {{headerShown :false}} component={WelcomeScreen} />
      <Stack.Screen name="SignIn"  component={SignIn} />
      <Stack.Screen name="SignUp"  component={SignUp} />
      <Stack.Screen name="ForgetPassword"  component={ForgetPassword} />
      <Stack.Screen name="Hotel Details" options = {{headerShown :false}} component={HotelDetails} />
      <Stack.Screen name="GalleryScreen" options = {{headerShown :false}} component={GalleryScreen} />
      <Stack.Screen name="HomeTap" options = {{headerShown :false}} component={TabScreen} />
      <Stack.Screen name="CheckAvailability" options = {{headerShown :false}} component={CheckAvailability} />
      <Stack.Screen name="confirmScreen" options = {{headerShown :false}} component={confirmScreen} />
      <Stack.Screen name="EditProfile" options = {{headerShown :false}} component={EditProfile} />
      <Stack.Screen name="Creditcard" options = {{headerShown :false}} component={Creditcard} />
      <Stack.Screen name="PaymentScreen" options = {{headerShown :false}} component={PaymentScreen} />
      {/* <Stack.Screen name="SearchScreen" options = {{headerShown :false}} component={SearchScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
