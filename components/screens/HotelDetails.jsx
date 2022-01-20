import React, { useState ,useRef} from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,ToastAndroid,
  Dimensions,ImageBackgroud,Animated,Pressable,TextInput
} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Flatbutton from "../styles/button"
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Entypo from 'react-native-vector-icons/Entypo'
import SlidingUpPanel from "rn-sliding-up-panel";
import DatePicker from "react-native-datepicker";
import moment from 'moment'

import MapView, { PROVIDER_GOOGLE ,Marker} from "react-native-maps";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const {height} = Dimensions.get('window')
const imgContainerHeight = screenHeight * 0.4;
const sub = imgContainerHeight * 0.2;

const aminitieSsize=screenHeight*.06

const HotelDetails = ({ navigation, route }) => {
  let _panel= React.useRef(null)
  let bs=React.createRef();
  let fall = new Animated.Value(1)
  const list = route.params.data;
  const galary = route.params.data.innerimages;
  const room1 = route.params.data.Room1
  const room2 = route.params.data.Room2
  const room3 = route.params.data.Room3
  const room4 = route.params.data.Room4
  const anyprice= list.price
  

  const Imageslist = ({ images, index }) => {
    return (
      <View style={{ marginRight: 20 ,}}>
       
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("GalleryScreen", {
              galary: galary,
              index: index,
            })
          }
        >
          <Image source={images} style={{ height: 80, width: 80,borderRadius:20 }} />
        </TouchableOpacity>
      </View>
    );
  };

  const Aminities = ({ aminity }) => {
    return (
      <View style={{backgroundColor:'lightgray',marginRight:10,width:aminitieSsize,
      height:aminitieSsize,justifyContent:'center',alignItems:'center',
      borderRadius:10}}>
        
        <MaterialIcons name={aminity} size={aminitieSsize/2}/>
      </View>
    );
  };
  const renderInner=()=>(
    <Text>hello</Text>
  )
  const renderHeader=()=>(
    <View style={styles.header}>
      <View style={styles.panelHeader}>
      <View style={styles.panelHandle}>

      </View>
      </View>
    </View>
  )
  const BottomSheet =({onCancel,animation})=>{
    const [date,setDate]=useState( new Date())
  
      const [checkin,setCheckin]=useState(date)
      const [checkout,setCheckout]=useState(date)
      const [adultPlus,setAdultPlus]=useState(1)

      const [childPlus,setChildPlus]=useState(0)
      const setToastMsg =msg=>{
        ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
    }
      var a =moment(checkout)
      var b =moment(checkin)
      var given=moment("2022-01-15","YYYY-MM-DD")
     
        var datetoday= new Date()
        var out =datetoday.setDate(datetoday.getDate()+1)
    return(
      <Animated.View style={{
        width:screenWidth,
  
        backgroundColor:'#fff',
        borderTopLeftRadius:30,borderTopRightRadius:30,padding:20,
        position:'absolute',
        zIndex:3,alignItems:'center',justifyContent:'center',
        maxHeight:3000,shadowColor:'#000',shadowOffset:{width:0,height:12},shadowOpacity:0.50,shadowRadius:16.80,
        bottom:animation,elevation:24, 
      }}>
        <ScrollView showsVerticalScrollIndicator={false} 
        style={{width:'100%'}}>
          <TouchableOpacity onPress={()=>onCancel()}>
            <View style={{
              flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
                <Text></Text>
              <Feather name='x' size={30}/>
            </View>
          </TouchableOpacity>
           {/* AIzaSyD1oU6YlQOAAv9e8NsErGZLIizIDnbWmxw\\ mnbhgfttdfd */}
          <SafeAreaView>
          
               
              <View style={{
              flexDirection:'row',alignItems:'center',justifyContent:'space-around'}} >
         
                    <DatePicker
        style={{width: 140}}
        date={checkin}
        mode="date"
        placeholder="CHECK IN"
        format="YYYY/MM/DD"
         minDate={datetoday}
        // maxDate={datetoday}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {setCheckin(date)}}
      />
                        <DatePicker
        style={{width: 140}}
        date={checkout}
        mode="date"
        placeholder="CHECK OUT"
        format="YYYY/MM/DD"
         minDate={datetoday}
        // maxDate={datetoday}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {setCheckout(date)}}
      />

              
           </View>
      <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
        {
              moment(checkin).isBefore(checkout)?(
                <Text></Text>
              ):(
             
              //  setToastMsg('checkout must not be before checkin')
              <Text style={{color:'red'}}>checkout must not be before checkin</Text>
              )
            }
             {
              moment(checkin).isSame(checkout)?(
                setToastMsg('date must not be the same')
               
              ):(
               <Text></Text>
              )
            }
            
      <Text>{a.diff(b,'days')} Nights</Text>
            {/* <Text>{moment.duration(given.diff(current)).asDays()}</Text> */}
      </View>
           <View style={{flexDirection:'row' ,alignItems:'stretch',
           justifyContent:'space-between',padding:30}}>
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
            </View>
            <View>
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
            </View>
            <View style={{left:50}}>
            <Flatbutton text='Book Now'
               onPress={()=>
                navigation.navigate('CheckAvailability',{
                  room1:room1,
                  room2:room2,
                  room3:room3,
                  room4:room4,
                  })}/>
            </View>
          </SafeAreaView>
        </ScrollView>
      </Animated.View>
    )
  }
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
    <SafeAreaView style={{flex:1}}>
      <View style={styles.imgContaner}>
      
        <ImageBackground source={list._image} style={{ width: "100%", height: "100%" }} >
        <View style={styles.headerContainer} 
            >
               <View style={{backgroundColor: 'white',
opacity: 0.7,width:30,
      height:30,justifyContent:'center',alignItems:'center',
      borderRadius:10,}}>
               <Feather name="arrow-left" size={30} color='black'
             onPress={()=>navigation.goBack()} /> 
             </View>
            <Text style={styles.headerTitle}></Text>
            </View>
        </ImageBackground>
      </View>

      <View style={styles.cardBox}>
        <View style={{marginTop:-10}}>
      <Text
          style={{color:'#032B7A',fontWeight:'bold',fontSize:20}}
          >{list.name}</Text>
        <View style={{flexDirection:'row'}}>
          <MaterialIcons name='location-pin' size={20}/>
      <Text>{list._location}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
                        <Ionicons name='star' size={16} color='orange'/>
                        <Ionicons name='star' size={16} color='orange'/>
                        <Ionicons name='star-half-sharp' size={16} color='orange'/>
                    <Text style={{marginHorizontal:10,marginStart:0}}>{list.rating}</Text>
                    </View>
        <View style={{marginLeft:320,top:-70,flext:1}}>
          
      <Text style={{fontWeight:'bold',fontSize:15}}>R{list._price}</Text>
      <Text style={{fontSize:10}}>per night</Text>
      </View>
      </View>
      <View style={{paddingVertical:5}}>
      <Text style={{fontSize:15,fontWeight:'bold',top:-5}}>Aminities</Text>
        <FlatList
          keyExtractor={(_, key) => key.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list.Aminities}
          renderItem={({ item }) => <Aminities aminity={item} />}
        />
         
        
         <Text style={{fontSize:15,fontWeight:'bold',}}>Gallery</Text>
        <FlatList
          keyExtractor={(_, key) => key.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list.innerimages}
          renderItem={({ item, index }) => (
            <Imageslist images={item} index={index} />
          )}
        />
        
        </View>
              <View style={{marginLeft:190,top:-40,}}>
        <Flatbutton  text='Check Availability'style={{top:10,}} 
        onPress={()=>{toggleAnimation()}}/>
</View>
        <SlidingUpPanel
         ref={c=>(_panel=c)}
        draggableRange={{top:700,bottom:120}}
        showBackdrop={false}
        snappingPoints={[200]}
        height={900}
        friction={0.7}
        >
          <View
          style={{flex:1,
          backgroundColor:"transparent"}}>
            <View
            style={{height:120,backgroundColor:"transparent",marginLeft:-180,
            alignItems:"center",
            justifyContent:'center'}}>
              <Feather name='arrow-up' size={30}/>
              <Text style={{fontWeight:'bold'}}> Location Swipe up</Text>
            </View>
            <View style={{flex:1,
            backgroundColor:"#fff",alignItems:'center',justifyContent:'center'}}>
                <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
              //  initialRegion={list.coordinates}
              region={list.coordinates}
              >
                  <Marker coordinate={list.coordinates}
                  />
               
                </MapView>
            </View>
          </View>

        </SlidingUpPanel>
    
     <BottomSheet
     onCancel={()=>{toggleAnimation()}}
     animation={showAnimation}/>
      </View>
    </SafeAreaView>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  cardBox: {
    paddingTop: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 10,
    marginTop: imgContainerHeight - sub,
    backgroundColor: "white",
    flex:1
  },
  imgContaner: {
    width: screenWidth,
    height: imgContainerHeight,
    position: "absolute",
    top: 0,
  },
  headerContainer:{
    top:10,
    flexDirection:'row',justifyContent:'space-between',
    alignContent:'center'
    

  },
  header:{
    backgroundColor:'#fff',
    shadowColor:'#333333',
    shadowOffset:{width:-1,height:-2},
    shadowRadius:2,
    shadowOpacity:0.4,
    paddingTop:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20

  },
  panelHandle: {
    width:40,
    height:8,
    borderRadius:4,
    
    backgroundColor: 'white',
    marginBottom:10,
  },
  panelHeader: {
    
    alignItems: 'center',
   
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1
  },
  buttonAdding:{
    // borderWidth:1,
    width:30,
    height:30,
    borderRadius:1,
    // borderColor:'black',
    justifyContent:'center',
    alignItems:'center'
},
inputContainer:{
  borderRadius:10,
  height:48,
  padding:10,
  flexDirection:'row',
  alignItems:'center',
  backgroundColor:'#EDEDED',
  elevation:2,
  width:150,

},
inputIconViewi:{
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
cvv: {
  paddingLeft: 12,
  width: '40%'

},
dataContainer: {
  flexDirection: "row",

  paddingBottom: 5,
  width: '100%',
  // justifyContent: 'space-between'
},
input: {
  width: '70%',
  borderColor: "black",
  borderStyle: "solid"
},
inputBox: {
  borderWidth: 2,
  borderRadius: 10,
  flexDirection: 'row',
  // paddingRight: 15,
  padding: 5,
  width: '60%',
  backgroundColor:'#EDEDED'
},

map:{...StyleSheet.absoluteFillObject},
});
