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
  ImageBackground,
  Dimensions,ImageBackgroud,Animated,Pressable,TextInput
} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Flatbutton from "../styles/button"
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Entypo from 'react-native-vector-icons/Entypo'
// import SlidingUpPanel from "rn-sliding-up-panel";

// import Animated from "react-native-reanimated";
// import MapView, { PROVIDER_GOOGLE ,Marker} from "react-native-maps";
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
      borderRadius:10,top:10}}>
        
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
    const [date,setDate]=useState(Date())
      const [isDatePickerVisible,setDatePickerVisibility]= useState(false)
      const [checkin,setCheckin]=useState('')
      const [checkout,setCheckout]=useState('')
      const [adultPlus,setAdultPlus]=useState(1)
  
      const [childPlus,setChildPlus]=useState(0)
      
      const showDatePicker = () => {
          setDatePickerVisibility(true);
        };
      
        const hideDatePicker = () => {
          setDatePickerVisibility(false);
        };
      
        const handleConfirm = (date) => {
          const currentDate =  date;
      
        //let tempDate = new Date(currentDate)
        let tempDate =currentDate
        let checkin = tempDate.getDate()+'/'+ (tempDate.getMonth()+ 1)+'/'+tempDate.getFullYear()
        let checkout= tempDate.getDate()+'/'+ (tempDate.getMonth()+ 1)+'/'+tempDate.getFullYear()
        setCheckin(checkin)
        setCheckout(checkout)
          // console.warn("A date has been picked: ", date);
          
          hideDatePicker();
         
        };
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
            <View style={{width:70,height:60,left:130}}>
              <Entypo name='circle-with-cross' size={50}/>
            </View>
          </TouchableOpacity>
          <SafeAreaView>
               
              <View  >
                <Text>CHECK IN</Text>
              <View style={styles.inputContainer}>
          <View style={styles.inputIconView}>
          <Pressable style={[
              styles.button,
            ] }
          onPress={showDatePicker}>
            <Feather
                   name="calendar" size={22}
                   color='white'
                   />
                   </Pressable>
          </View>
              <TextInput
               style={styles.inputs}
               placeholder='Enter checkin Date'
              
               value={checkin}
              //  onChangeText={props.handleChange('email')}
              //  value={props.values.email}
              //  onBlur={props.handleBlur('email')}
               />
          
          </View> 
          <Text>CHECK OUT</Text>
          <View style={styles.inputContainer}>
          <View style={styles.inputIconView}>
          <Pressable style={[
              styles.button,
            ] }
          onPress={showDatePicker}>
            <Feather
                   name="calendar" size={22}
                   color='white'
                   />
                   </Pressable>
          </View>
              <TextInput
               style={styles.inputs}
               placeholder='Enter checkout Date'
           
               value={checkout}
              //  onChangeText={props.handleChange('email')}
              //  value={props.values.email}
              //  onBlur={props.handleBlur('email')}
               />
          
          </View>
              <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode='date'
              value={checkout}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              />
           </View>
           <View style={{flexDirection:'row' ,alignItems:'stretch',
           justifyContent:'space-between',padding:30}}>
           <View>
           <Text>No of Adults</Text>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Pressable style={[
              styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
            ] }
          onPress={()=>setAdultPlus(Math.min(5,adultPlus+1))}>
            <Feather
                   name="plus" size={22}
                   color='black'
                   />
        
            </Pressable>
            <Text style={{fontSize:21}}>{adultPlus}</Text>
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
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Pressable style={[
              styles.buttonAdding,{backgroundColor: '#fff',flexDirection:"row"}
            ] }
          onPress={()=>setChildPlus(Math.max(0,childPlus+1))}>
            <Feather
                   name="plus" size={22}
                   color='black'
                   />
        
            </Pressable>
            <Text style={{fontSize:21}}>{childPlus}</Text>
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
  // const toggleAnimation =()=>{

  // }
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
               <Feather name="arrow-left" size={30} color='#fff'
             onPress={()=>navigation.goBack()} /> 
             </View>
            <Text style={styles.headerTitle}></Text>
            </View>
        </ImageBackground>
      </View>

      <View style={styles.cardBox}>
        <View style={{flexDirection:'row'}}>
          <MaterialIcons name='location-pin' size={20}/>
      <Text>{list._location}</Text>
      </View>
        <View style={{marginLeft:270,top:-20,flext:1}}>
          
      <Text style={{fontWeight:'bold',fontSize:15}}>R{list._price}</Text>
      <Text style={{fontSize:10}}>per night</Text>
      </View>
      <Text style={{fontSize:15,fontWeight:'bold',top:-5}}>Aminities</Text>
        <FlatList
          keyExtractor={(_, key) => key.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list.Aminities}
          renderItem={({ item }) => <Aminities aminity={item} />}
        />
         
         <View style={{top:-160}}>
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

        <Flatbutton  text='Check Availability'style={{top:-90}} 
        onPress={()=>{toggleAnimation()}}/>
        
        {/* <SlidingUpPanel
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
            style={{height:120,backgroundColor:"transparent",
            alignItems:"center",
            justifyContent:'center'}}>
              <Feather name='arrow-up' size={30}/>
              <Text>Swipe up</Text>
            </View>
            <View style={{flex:1,
            backgroundColor:"#fff",alignItems:'center',justifyContent:'center'}}>
                <MapView
                style={{width:'100%',height:'100%'}}
                provider={PROVIDER_GOOGLE}
               initialRegion={list.coordinates}

              >
                  <Marker coordinate={list.coordinates}
                  />
               
                </MapView>
            </View>
          </View>

        </SlidingUpPanel>
     */}
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
  width:200,

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
});
