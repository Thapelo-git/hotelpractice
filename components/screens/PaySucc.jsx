import { StyleSheet, Text, View ,Button,SafeAreaView} from 'react-native'
import React from 'react'

const PaySucc = ({navigation}) => {
  return (
    <SafeAreaView>
    <StatusBar
   backgroundColor="#0225A1"
   barStyle="light-content"
   />
<View style={styles.container}>
   
   <LottieView style={styles.hotel}
source={require('../onbording/animation2.json')} autoPlay loop/>
    <Button style={{with:100}}
                       title='Add Card'
                       onPress={()=>navigation.navigate('HomeTap')}/>
 </View>
</SafeAreaView>
  )
}

export default PaySucc

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