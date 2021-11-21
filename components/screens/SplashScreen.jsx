import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
const SplashScreen = ({navigation}) => {
  setTimeout(()=>{
    navigation.replace('WelcomeScreen');
  }, 4000);
    return (
        <SafeAreaView>
             <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
<View style={styles.container}>
            
            <LottieView style={styles.hotel}
       source={require('../onbording/animation1.json')} autoPlay loop/>
          </View>
        </SafeAreaView>
        
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:90,
        marginTop:110,
        
      },
      hotel: {
        width:150,
        height:150,
        
      },
})
