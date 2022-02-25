import React,{useState,useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View,Dimensions,TextInput,Image,
    TouchableOpacity } from 'react-native'
    import { Formik } from 'formik'
    import * as yup from 'yup'
import { db,auth } from './firebase'

const screenwidth=Dimensions.get('screen').width
const Creditcard = ({navigation,route}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
   const datetoday=new Date()
    const user = auth.currentUser.uid;
    const ReviewSchem=yup.object({
        cardNumber:yup.string().required().min(16).max(16),
        cardName:yup.string().required().min(2),
        CVV:yup.string().required().min(3).max(3),
        Expiry:yup.string().required().min(4).max(4),
   
    })
    const addCard=(data)=>{
        const {cardName,cardNumber,CVV,Expiry} = data
        const userid= auth.currentUser.uid
        db.ref(`/users`).child(userid).update({
            cardName:cardName,cardNumber:cardNumber,CVV:CVV,Expiry:Expiry
          })
    }

    const hotelinfor=route.params.hotelinfor
    const hotelimg=hotelinfor.url
    const hotelname=hotelinfor.name
    const diff=route.params.diff
    const checkin=route.params.checkin
    const checkout=route.params.checkout
   const  adultPlus=route.params.adultPlus
   const roomnumber=route.params.roomnumber
   const totPrice=route.params.totPrice
   const room=route.params.room
   const roomT=route.params.roomT
//    useEffect(()=>{
//     db.ref('/users/'+ user).on('value',snap=>{
      
//       setName(snap.val() && snap.val().name);
  
//   setEmail(snap.val().email)
//     })
  
    
//   },[])
    const addBooking=()=>{
        
        const userid= auth.currentUser.uid

        // db.ref('/users').child(userid).push({
        //     Booking:[{
        db.ref('Booking').push({
            userid,Status:'Pending',
            description:'Successfully paid booking',hotelname,
            diff,checkin,checkout,adultPlus,roomnumber,totPrice,roomT,hotelimg,
            datetoday
        //   }]
        })
    }
    return (
        <SafeAreaView>
             <View style={styles.header}>
                <Text style={{color:'#fff'}}>My Cards</Text>
                </View>
        <View style={styles.container}>
        <View style={styles.card}>
        <Image source={require('../images/MasterCard.png')}
                style={{height:40,width:80,position:'absolute',top:20,right:20}}/>
                <View style={{position:'absolute',bottom:10,left:0,right:0,paddingHorizontal:20}}>
                    {/* <Text style={{fontSize:20}}>{cardName}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1}}>{cardNumber}</Text>
                    <Text>{Expiry}</Text>
                    </View> */}
                </View>
        </View> 
        <Formik
        initialValues={{cardNumber:'',cardName:'',CVV:'',Expiry:''}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
            addCard(values)
        }}
        >
            {(props)=>(
           <View style={{padding:10}}>
               <Text>Card Number</Text>
               <TextInput
               placeholder='number'
          
               keyboardType='numeric'
               onChangeText={props.handleChange('cardNumber')}
             value={props.values.cardNumber}
             onBlur={props.handleBlur('cardNumber')}
               />
                <Text style={{color:'red',marginTop:-15,paddingVertical:10}}>{props.touched.cardNumber && props.errors.cardNumber}</Text>
                <Text>Cardholder Name</Text>
               <TextInput
               placeholder='Name'
               onChangeText={props.handleChange('cardName')}
               value={props.values.cardName}
               onBlur={props.handleBlur('cardName')}
               
               />
                <Text style={{color:'red',marginTop:-15,paddingVertical:10}}>{props.touched.cardName && props.errors.cardName}</Text>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
               <Text>Expiry Date</Text>  
               <Text>CVV</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
             <View>
               <TextInput
               placeholder='Expiry'
               keyboardType='numeric'
               onChangeText={props.handleChange('Expiry')}
               value={props.values.Expiry}
               onBlur={props.handleBlur('Expiry')}
               
               />
                 <Text style={{color:'red',marginTop:-15,paddingVertical:10}}>{props.touched.Expiry && props.errors.Expiry}</Text>
                 </View>
                 <View>
               <TextInput
               placeholder='CVV'
               keyboardType='numeric'
               
               onChangeText={props.handleChange('CVV')}
               value={props.values.CVV}
               onBlur={props.handleBlur('CVV')}
               />
               <Text style={{color:'red',marginTop:-15,paddingVertical:10}}>{props.touched.CVV && props.errors.CVV}</Text>
               </View>
                   </View>

                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:30}}>
                       <TouchableOpacity onPress={props.handleSubmit}>
                           <Text>Add Card</Text>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={addBooking()}>
                       <Text>Add Card</Text>
                       </TouchableOpacity>
                   </View>
                   
           </View>
           )}</Formik>
        </View>
        </SafeAreaView>
    )
}

export default Creditcard

const styles = StyleSheet.create({
       container:{
        height:'100%',
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
    ,header: {
        width:'100%',
        height:50,
        paddingVertical: 10,
        // borderRadius:10,
        alignItems:'center',
        backgroundColor: '#0225A1',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom:12,
        justifyContent:'center',
       
        },
})
