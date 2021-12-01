import React, { useState } from "react";
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

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const imgContainerHeight = screenHeight * 0.4;
const sub = imgContainerHeight * 0.2;

const aminitieSsize=screenHeight*.06

const HotelDetails = ({ navigation, route }) => {
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
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.imgContaner}>
      
        <ImageBackground source={list._image} style={{ width: "100%", height: "100%" }} >
        <View style={styles.headerContainer} 
            >
               
               <Feather name="arrow-left" size={30} color='#fff'
             onPress={()=>navigation.goBack()} /> 
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

        <Flatbutton  text='Check Availability'/>
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
});
