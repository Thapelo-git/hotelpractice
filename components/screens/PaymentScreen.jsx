import React from 'react'
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View,TextInput } from 'react-native'
import { CreditCardInput } from "react-native-credit-card-input";
const PaymentScreen = () => {
    const [cardInput,setCardInput]=useState(0)
    // _onFocus= field=>console.log(field)
    const _onFocus =(field) => {
        setCardInput(field)
      }
    // _onChange=formData=>console.log(JSON.stringify(formData,null,''))
    // const _onChange =(data) => {
    //     setCardInput(data)
    //   }
    return (
        <SafeAreaView>
        <View style={styles.container}>
        {/* <CreditCardInput 
         autoFocus
         requireName={true}
         requireCVC={true}
         requirePostalCode={true}
         validColor='black'
         invalidColor='red'
         placeholderColor='darkgray'
         labelStyle={{color:'black',fontSize:12}}
         InputStyle={{color:'black',fontSize:16}}
         
        
         /> */}
         
        </View>
        
        </SafeAreaView>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
        backgroundColor:'white'
    },
    inputContainerStyle : {
        backgroundColor:'#fff',
        borderRadius:5
      },
      inputStyle : {
        backgroundColor:'#222242',
        paddingLeft:15,
        borderRadius:5,
        color:'#fff'
      },
      labelStyle : {
        marginBottom:5,
        fontSize:12
      },
      inputs:{
        borderBottomColor:'black',
        
         flex:0.8,
        paddingLeft:10,
      
    },
    inputContainer:{
        borderRadius:30,
        height:48,
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        elevation:2,
        

    },
})
