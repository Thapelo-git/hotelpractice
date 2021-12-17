import React,{useEffect, useState} from 'react'

import { SafeAreaView,FlatList, StyleSheet, Text, View ,Pressable,TextInput, Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const CheckAvailability = ({navigation,route}) => {
    const list=route.params.list
    const [index,setindex]=useState(0)
    console.log(list)
    // useEffect(()=>{
    //   console.log('Availableroom')
    // })
    const Rooms=({rooms})=>{
      <Image source={rooms} style={{height:80,width:80,borderRadius:20}}/>
    }
    return (
        <SafeAreaView>
             <View style={{flexDirection:'row',
      height:30,justifyContent:'center',alignItems:'center',
      }}>
         
               <Feather name="arrow-left" size={30} color='#000'
             onPress={()=>navigation.goBack()} /> 
             
            <Text style={styles.headerTitle}>Bookingss</Text>
            </View>
           {/* <FlatList
           showsVerticalScrollIndicator={false}
           data={Availablerooms}
            renderItem={({item})=><Rooms rooms={item} />}/> */}
            {
              list[index].Room.map((items)=>{
                <Text>{items.bedtype}</Text>
              })
            }
        </SafeAreaView>
    )
}

export default CheckAvailability

const styles = StyleSheet.create({
    buttonAdding:{
        borderWidth:1,
        width:30,
        height:30,
        borderRadius:15,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
      borderRadius:30,
      height:48,
      marginVertical:12,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#fff',
      elevation:2,
      

  },
  inputIconView:{
      width:50,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#4A1DD6',
      height:'100%',
      borderRadius:30,
      alignSelf:'center',
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      elevation:2,
  },
})
