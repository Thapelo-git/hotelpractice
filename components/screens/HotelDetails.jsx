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
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
      <View style={{ marginRight: 20 }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("GalleryScreen", {
              galary: galary,
              index: index,
            })
          }
        >
          <Image source={images} style={{ height: 120, width: 120 }} />
        </TouchableOpacity>
      </View>
    );
  };

  const Aminities = ({ aminity }) => {
    return (
      <View style={{backgroundColor:'lightgray',marginRight:10,width:aminitieSsize,height:aminitieSsize,justifyContent:'center',alignItems:'center',borderRadius:10}}>
        <MaterialIcons name={aminity} size={aminitieSsize/2}/>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.imgContaner}>
        <Image source={list._image} style={{ width: "100%", height: "100%" }} />
      </View>

      <View style={styles.cardBox}>
        <FlatList
          keyExtractor={(_, key) => key.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list.Aminities}
          renderItem={({ item }) => <Aminities aminity={item} />}
        />
        <FlatList
          keyExtractor={(_, key) => key.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={list.innerimages}
          renderItem={({ item, index }) => (
            <Imageslist images={item} index={index} />
          )}
        />

        <Text>{list._price}</Text>
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
