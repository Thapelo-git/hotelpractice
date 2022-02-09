import React,{useEffect, useState,useRef} from 'react'

import { SafeAreaView,FlatList, StyleSheet, Text, View ,Picker,
  Pressable,TextInput, Image,TouchableOpacity,Animated} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Hotels from '../onbording/Hotels'
import Flatbutton from '../styles/button'
import ConfirmScreen from './confirmScreen'

const CheckAvailability = ({navigation,route}) => {
  const [roomnumber,setRoomnumber]=useState(0)
  const [roomtwo,setRoomtwo]=useState(0)
  const [roomthree,setRoomthree]=useState(0)
  const [roomfour,setRoomfour]=useState(0)
  const [cont,setcount]=useState(1)
  const [pickerindex,setpickerindex]=useState(0)
    const [sorts,setSorts]=useState('')
    const room1=route.params.room1
    const room2=route.params.room2
    const room3=route.params.room3
    const room4=route.params.room4
    const diff=route.params.diff
  const [price,setPrice]=useState([
    room1,room2,room3,room4
  ])
  // price.price.sort(function(a,b){return a-b})
// price.push(room1)
// price.push(room2)
// price.push(room3)
// price.push(room4)
    const hotel=route.params.list
   
   const [animationValue,setAnimationValue]=useState(-1000)
  const showAnimation= useRef(new Animated.Value(animationValue)).current
  
  const toggleAnimation=()=>{
    
    const val= animationValue === 0 ? -1000 : 0
    Animated.timing(showAnimation,{
      useNativeDriver: false,
      toValue:val,
      duration:350

    }).start()
    setAnimationValue(val)
  }
    return (
        <SafeAreaView style={{padding:20}}>
             <View style={{flexDirection:'row',
      height:30,justifyContent:'flex-start',alignItems:'center',
      }}>
         
               <Feather name="arrow-left" size={30} color='#000'
             onPress={()=>navigation.goBack()} /> 
             
            <Text style={styles.headerTitle}>Bookings</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            {/* <Text style={styles.titles}>Sort By</Text>
              <Picker 
              selectedValue={sorts}
              
              onValueChange={(value,index)=>setSorts( value)}
              >
                  <Picker.Item label='Lowest Price' value='Lowest Price'/>
                  <Picker.Item label='Highest Price' value='Highest Price'/>
               
              </Picker> */}
              </View>
              {/* <Text style={styles.text}> {price.price}</Text> */}
            
                 
                    
                    
                <View style={{height:100,backgroundColor:'#eee'}}>
            <View style={styles.cardItemContainer}>
            <View style={{width:90,
            height:80,marginLeft:-10}}>
            <Image source={room1.image} style={{height:'100%',width:'100%',borderRadius:10,top:10}}/>
            </View>
            <View style={{flex:1}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{room1.name}</Text>
              
              <Text >{room1.bedtype}</Text>
              
              
       
            <Text style={{fontSize:16,fontWeight:'bold'}}>Price R {room1.price}</Text>
            
           
            </View>
            
               <View style={{width:80}}>
               
      <View style={{flexDirection:'row',justifyContent:'space-between',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2,}}>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomnumber(Math.max(1,roomnumber+1))}>
                <Feather
                       name="plus" size={22}
                       color='black'
                       />
            
                </Pressable>
                <Text style={{fontSize:21}}> {roomnumber} </Text>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomnumber(Math.max(1,roomnumber-1))}>
                <Feather
                       name="minus" size={22}
                       color='black'
                       />
            
                </Pressable>

                </View>
                </View>
               
            </View>
            </View>
   
                  
                
               
                <View style={{height:100,backgroundColor:'#eee'}}>
            <View style={styles.cardItemContainer}>
            <View style={{width:90,
            height:80,marginLeft:-10}}>
            <Image source={room2.image} style={{height:'100%',width:'100%',borderRadius:10,top:10}}/>
            </View>
            <View style={{flex:1}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{room2.name}</Text>
              
              <Text >{room2.bedtype}</Text>
              
              
       
            <Text style={{fontSize:16,fontWeight:'bold'}}>Price R {room2.price}</Text>
            
           
            </View>
            {/* <View style={{flexDirection:'row' ,alignItems:'stretch',
               justifyContent:'space-between',padding:30}}> */}
               <View style={{width:80}}>
               
      <View style={{flexDirection:'row',justifyContent:'space-between',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2,}}>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomtwo(Math.max(1,roomtwo+1))}>
                <Feather
                       name="plus" size={22}
                       color='black'
                       />
            
                </Pressable>
                <Text style={{fontSize:21}}> {roomtwo} </Text>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomtwo(Math.max(1,roomtwo-1))}>
                <Feather
                       name="minus" size={22}
                       color='black'
                       />
            
                </Pressable>

                </View>
                </View>
                
               
            </View>
            </View>
             <View style={{height:100,backgroundColor:'#eee'}}>
             <View style={styles.cardItemContainer}>
             <View style={{width:90,
             height:80,marginLeft:-10}}>
             <Image source={room3.image} style={{height:'100%',width:'100%',borderRadius:10,top:10}}/>
             </View>
             <View style={{flex:1}}>
             <Text style={{fontSize:16,fontWeight:'bold'}}>{room3.name}</Text>
               
               <Text >{room3.bedtype}</Text>
               
               
        
             <Text style={{fontSize:16,fontWeight:'bold'}}>Price R {room3.price}</Text>
             
            
             </View>
             {/* <View style={{flexDirection:'row' ,alignItems:'stretch',
                justifyContent:'space-between',padding:30}}> */}
                <View style={{width:80}}>
                
       <View style={{flexDirection:'row',justifyContent:'space-between',
     borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
     elevation:2,}}>
                 <Pressable style={[
                   styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                 ] }
               onPress={()=>setRoomthree(Math.max(1,roomthree+1))}>
                 <Feather
                        name="plus" size={22}
                        color='black'
                        />
             
                 </Pressable>
                 <Text style={{fontSize:21}}> {roomthree} </Text>
                 <Pressable style={[
                   styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                 ] }
               onPress={()=>setRoomthree(Math.max(1,roomthree-1))}>
                 <Feather
                        name="minus" size={22}
                        color='black'
                        />
             
                 </Pressable>
 
                 </View>
                 </View>
                 
                
             </View>
             </View>
           <View style={{height:100,backgroundColor:'#eee'}}>
           <View style={styles.cardItemContainer}>
           <View style={{width:90,
           height:80,marginLeft:-10}}>
           <Image source={room4.image} style={{height:'100%',width:'100%',borderRadius:10,top:10}}/>
           </View>
           <View style={{flex:1}}>
           <Text style={{fontSize:16,fontWeight:'bold'}}>{room4.name}</Text>
             
             <Text >{room4.bedtype}</Text>
             
             
      
           <Text style={{fontSize:16,fontWeight:'bold'}}>Price R {room4.price}</Text>
           
          
           </View>
           {/* <View style={{flexDirection:'row' ,alignItems:'stretch',
              justifyContent:'space-between',padding:30}}> */}
              <View style={{width:80}}>
              
     <View style={{flexDirection:'row',justifyContent:'space-between',
   borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
   elevation:2,}}>
               <Pressable style={[
                 styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
               ] }
             onPress={()=>setRoomfour(Math.max(0,roomfour+1))}>
               <Feather
                      name="plus" size={22}
                      color='black'
                      />
           
               </Pressable>
               <Text style={{fontSize:21}}> {roomfour} </Text>
               <Pressable style={[
                 styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
               ] }
             onPress={()=>setRoomfour(Math.max(0,roomfour-1))}>
               <Feather
                      name="minus" size={22}
                      color='black'
                      />
           
               </Pressable>

               </View>
               </View>
               
              
           </View>
           </View>
   
   
               <Text>{diff}</Text>
               <Text style={{fontSize:25}}>{(room1.price * roomnumber+
               room2.price * roomtwo+room3.price * roomnumber+
               room4.price * roomnumber)*diff}</Text>
               
        </SafeAreaView>
    )
}

export default CheckAvailability

const styles = StyleSheet.create({
    buttonAdding:{
        // borderWidth:1,
        // width:30,
        // height:30,
        // borderRadius:15,
        // borderColor:'black',
        // justifyContent:'center',
        // alignItems:'center'
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
  buttonstyle:{
    borderRadius:5,
   marginStart:80,
    width:100,
    backgroundColor:'#4A1DD6',
    

},
buttonText:{
    color:'#fff',
    fontWeight:'normal',
    // textTransform:'uppercase',
    fontSize:16,
    fontStyle:'normal',
    textAlign:'center'
},
headerTitle:{
  marginLeft:130
},
cardItemContainer:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:-5,
  paddingHorizontal:12,
 
  borderRadius:10,
}
})
