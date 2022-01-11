import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,Dimensions } from 'react-native'
const screenwidth=Dimensions.get('screen').width
const Creditcard = () => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.card}>

        </View>
            <Text></Text>
        </View>
        </SafeAreaView>
    )
}

export default Creditcard

const styles = StyleSheet.create({
       container:{
        flex:1,
        marginTop:5,
        backgroundColor:'white',
        width:screenwidth,
        padding:10,
    },
    card:{
        borderWidth:1,
        borderColor:'black',
        width:330,
        height:180,
    }
})
