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
      <Stack.Screen name="HomeTap" options = {{headerShown :false}} component={TabScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
