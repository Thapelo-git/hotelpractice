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
  Dimensions,ImageBackgroud
} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Flatbutton from "../styles/button"
// import SlidingUpPanel from "rn-sliding-up-panel";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
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

        <Flatbutton  text='Check Availability'style={{top:-90}} onPress={()=>navigation.navigate('CheckAvailability')}/>
        {/* <BottomSheet
        // ref={bs}
        snapPoints={[330,0]}
        // renderContent={renderInner}
        // renderHeader={renderHeader}
        // initialSnap={1}
        // callbackNode={fall}
        // enabledGestureInteraction={true}
        /> */}
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
  }
});
