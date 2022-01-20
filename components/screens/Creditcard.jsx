import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View,Dimensions,TextInput,Image } from 'react-native'


const screenwidth=Dimensions.get('screen').width
const Creditcard = () => {
    const [cardNumber,setCardnumber]=useState('')
    const [cardName,setCardName]=useState('')
    const [CVV,setCVV]=useState('')
    const [Expiry,setExpiry]=useState('')
    return (
        <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.card}>
        <Image source={require('../images/MasterCard.png')}
                style={{height:40,width:80,position:'absolute',top:20,right:20}}/>
                <View style={{position:'absolute',bottom:10,left:0,right:0,paddingHorizontal:20}}>
                    <Text style={{fontSize:20}}>{cardName}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1}}>{cardNumber}</Text>
                    <Text>{Expiry}</Text>
                    </View>
                </View>
        </View> 
           <View style={{padding:10}}>
               <Text>Card Number</Text>
               <TextInput
               placeholder='number'
               onChangeText={(text)=>setCardnumber(text)}
               keyboardType='numeric'
               />
                <Text>Cardholder Name</Text>
               <TextInput
               placeholder='Name'
               onChangeText={(text)=>setCardName(text)}
               
               />

               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
               <Text>Expiry Date</Text>  
               <Text>CVV</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
             
               <TextInput
               placeholder='Expiry'
               onChangeText={(text)=>setExpiry(text)}
               
               />
               
               <TextInput
               placeholder='CVV'
               onChangeText={(text)=>setCVV(text)}
               
               />
                   </View>
               
           </View>
        </View>
        </SafeAreaView>
    )
}

export default Creditcard

const styles = StyleSheet.create({
       container:{
 
        marginTop:5,
        backgroundColor:'white',
        width:screenwidth,
        padding:10,
    },
    card:{
        borderWidth:1,
        borderColor:'black',
        width:"100%",
        height:180,
        borderRadius:10,
    }
})
