import React ,{useState}from 'react'
import { StyleSheet, Text, View ,Animated,TouchableOpacity,
ScrollView,Pressable,Dimensions,SafeAreaView,TextInput, Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Flatbutton from "../styles/button"
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const ConfirmScreen = ({navigation,route}) => {
    
       const room=route.params.room
          const [roomnumber,setRoomnumber]=useState(0)  
          const hotelinfor=route.params.hotelinfor
          const diff=route.params.diff
          
          const checkin=route.params.checkin
          const checkout=route.params.checkout
          
          const [adultPlus,setAdultPlus]=useState(1)

          const [childPlus,setChildPlus]=useState(0)
    return (
        
      <SafeAreaView >
              
                <View style={{
                  flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                   <TouchableOpacity onPress={()=>navigation.goBack()}> 
                  <Feather name="arrow-left" size={30}/>
                  </TouchableOpacity>
                  <Text style={styles.headerTitle}>Room</Text>
                </View>
                <View style={{padding:10,width:screenWidth}}>
                <Image source={{uri:room.roomurl}} style={{height:190,width:'100%',borderRadius:7}}/>
                </View>
                
             
              <View style={{
                  flexDirection:'row',paddingHorizontal:20,justifyContent:'space-between'}} >
                    <View>
                    <Text style={{color:'#0225A1', fontWeight:'bold', fontSize:18}}>Room Type</Text>
                    <View style={{paddingVertical:10}}>
                    <Text style={{color:'gray'}}>{room.bedType}</Text>
                    </View>
              </View>
              <View>
              <Text style={{color:'#0225A1', fontWeight:'bold', fontSize:18,marginRight:40}}>Capacity</Text>
              <View style={{paddingVertical:10}}>
                  
                  <Text style={{color:'gray'}}>{room.roomname}</Text>
              </View>
              </View>
               
               </View>
               <View style={{
                  flexDirection:'row',paddingHorizontal:20,justifyContent:'space-between',}} >
                    <View>
                    <Text style={{color:'#0225A1', fontWeight:'bold', fontSize:18 }}>Check In</Text>
                    <View style={{paddingVertical:10}}>
                    <Text style={{color:'gray'}}>{checkin}</Text>
                    </View>
              </View>
              <View>
              <Text style={{color:'#0225A1', fontWeight:'bold', fontSize:18, marginRight:30}}>Check Out</Text>
              <View style={{paddingVertical:10}}>
                  
                  <Text style={{color:'gray'}}>{checkout}</Text>
              </View>
              </View>
               
               </View>
              
                   
                  
               <View style={{flexDirection:'row' ,paddingHorizontal:20, justifyContent:'space-between'}}>
               <View>
               <Text style={{color:'#0225A1', fontWeight:'bold', fontSize:18}}>No of Rooms </Text>
      <View style={{flexDirection:'row',justifyContent:'space-around',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2, marginTop:10}}>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomnumber(Math.max(0,roomnumber+1))}>
                <Feather
                       name="plus" size={22}
                       color='black'
                       />
            
                </Pressable>
                <Text style={{fontSize:21}}> {roomnumber} </Text>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomnumber(Math.max(0,roomnumber-1))}>
                <Feather
                       name="minus" size={22}
                       color='black'
                       />
            
                </Pressable>
                </View>
                </View>

                <View>
               <Text style={{color:'#0225A1', fontWeight:'bold', fontSize:18}}> No. Of Guests</Text>
      <View style={{flexDirection:'row',justifyContent:'space-around',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2, marginTop:10}}>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomnumber(Math.max(0,roomnumber+1))}>
                <Feather
                       name="plus" size={22}
                       color='black'
                       />
            
                </Pressable>
                <Text style={{fontSize:21}}> {roomnumber} </Text>
                <Pressable style={[
                  styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
                ] }
              onPress={()=>setRoomnumber(Math.max(0,roomnumber-1))}>
                <Feather
                       name="minus" size={22}
                       color='black'
                       />
            
                </Pressable>
                </View>
                </View>
               
                </View>
                {/* <View style={{flexDirection:'row' ,alignItems:'stretch',
           justifyContent:'center',padding:10}}>
           <View>
           <Text>No of Adults</Text>
  <View style={{flexDirection:'row',justifyContent:'space-between',
borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
elevation:2,}}>
            <Pressable style={[
              styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
            ] }
          onPress={()=>setAdultPlus(Math.max(1,adultPlus+1))}>
            <Feather
                   name="plus" size={22}
                   color='black'
                   />
        
            </Pressable>
            <Text style={{fontSize:21}}> {adultPlus} </Text>
            <Pressable style={[
              styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
            ] }
          onPress={()=>setAdultPlus(Math.max(1,adultPlus-1))}>
            <Feather
                   name="minus" size={22}
                   color='black'
                   />
        
            </Pressable>
            </View>
            </View> */}
            {/* <View>
            <Text>No of Children</Text>
  <View style={{flexDirection:'row',justifyContent:'space-between',
borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
elevation:2,}}>
            <Pressable style={[
              styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
            ] }
          onPress={()=>setChildPlus(Math.max(0,childPlus+1))}>
            <Feather
                   name="plus" size={22}
                   color='black'
                   />
        
            </Pressable>
           
            <Text style={{fontSize:21}}> {childPlus} </Text>
            <Pressable style={[
              styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
            ] }
          onPress={()=>setChildPlus(Math.max(0,childPlus-1))}>
            <Feather
                   name="minus" size={22}
                   color='black'
                   />
        
            </Pressable>
            </View>
            </View>
            </View> */}
                <View style={{paddingVertical:10,paddingHorizontal:18,flexDirection:'row',
           justifyContent:'space-between',padding:20,borderWidth:3, marginTop:20, borderColor:'#0225A1',}}>
                <Text style={{fontSize:21}}>Total    </Text>
                <Text style={{fontSize:20}}>R  {room.beds * roomnumber}</Text>
                {/* <View style={{justifyContent:'space-between',
    borderRadius:10,padding:10,alignItems:'center',backgroundColor:'#EDEDED',
    elevation:2,}}>
      <Text style={{fontSize:25}}>{room.beds * roomnumber}</Text>
    </View> */}
    </View>
                <View style={{left:70, marginTop:50}}>
                <Flatbutton text='Book Now'
                   onPress={()=>navigation.navigate('PaymentScreen')}/>
                </View>
                
              </SafeAreaView>
            
    )
}

export default ConfirmScreen

const styles = StyleSheet.create({
  headerTitle:{
    marginLeft:130
  }
})
