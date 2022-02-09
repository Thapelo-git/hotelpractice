import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import MapView, { PROVIDER_GOOGLE ,Marker} from "react-native-maps";

const map = ({route}) => {
    const list = route.params.list
  return (
      <SafeAreaView>
                 {/* <View style={{flexDirection:'row',
      justifyContent:'flex-start',alignItems:'center',
      }}>
         
               <Feather name="arrow-left" size={30} color='#000'
             onPress={()=>navigation.goBack()} /> 
             
            <Text style={styles.headerTitle}></Text>
            </View> */}
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
            style={{height:60,backgroundColor:"transparent",marginLeft:-180,
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

        </SlidingUpPanel> */}
    </View>
    </SafeAreaView>
  );
};

export default map;

const styles = StyleSheet.create({
    map:{...StyleSheet.absoluteFillObject},
});
