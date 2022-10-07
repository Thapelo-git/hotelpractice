import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './components/Screens/SignIn';
import SignUp from './components/Screens/SignUp';
import ForgetPassword from './components/Screens/ForgetPassword';
const Stack =createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen name='SingIn' options={{headerShown:false}} component={SignIn}/>
      <Stack.Screen name='SingUp' options={{headerShown:false}} component={SignUp}/>
      <Stack.Screen name='ForgetPassword' options={{headerShown:false}} component={ForgetPassword}/>
      </Stack.Navigator>
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
