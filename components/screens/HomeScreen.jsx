import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,
     FlatList, Dimensions,ImageBackground,StatusBar } from 'react-native'
import { COLORS } from '../styles/Colors'
import { ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Hotels from '../onbording/Hotels'
const {width}=Dimensions.get("screen")
const cardWidth =width/2 - 20
const HomeScreen = ({navigation}) => {
    const [ selectedBtnIndex,setSelectedBtnIndex] = useState(0);
    const [ selectedHotelIndex,setSelectedHotelIndex] = useState(0);
    const Btn =[
        {id:'1',name:'Recomended'},
        {id:'2',name:'Popular'},
        {id:'3',name:'Top Ratings'},
        
    ]
    const ListBtn =()=>{
        return <ScrollView horizontal 
        showsHorizontalScrollIndicator={false} style={styles.btnListContainer}>
            {Hotels.map((category,index)=>(
                <TouchableOpacity key={index} activeOpacity={0.8}
                onPress={()=> setSelectedBtnIndex(index)} style={{alignItems:'center',justifyContent:'center'
                ,}}>
                <View style={{
                    backgroundColor:selectedBtnIndex == index
                    ?COLORS.theme
                    :COLORS.lightgray,
                    ...styles.categoryBtn,
                }}>
                    <Text style={{
                        fontSize:15,fontWeight:'bold',
                        color:selectedBtnIndex == index?COLORS.white :COLORS.theme
                    }}>{category.name}</Text>
                </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    }
    const Card =({Hotels,index})=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('Hotel Details',{data:Hotels,index:index})}>
        <View style={styles.cardContainer}>
            <View style={{alignItems:'center'}}>
                <ImageBackground source={Hotels._image}
                style={{marginVertical:5,height:210,width:cardWidth}}
                resizeMode="contain">
                    <View style={{backgroundColor: 'white',
opacity: 0.7,width:'93%',height:50,
                borderTopLeftRadius:70,marginTop:160,paddingt:20,marginStart:6}}>
                    <Text style={{marginHorizontal:10,marginStart:80}}>{Hotels._price}</Text>
                    </View>
                    
                </ImageBackground>
                
            </View>
        </View>
        </TouchableOpacity>)
    }
    const CardNear =({Hotels})=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('Hotel Details',{data:Hotels})}>
        <View style={styles.cardNearContainer}>
            <View style={{alignItems:'center'}}>
                <ImageBackground source={Hotels._image}
                style={{marginVertical:5,height:110,width:cardWidth/1}}
                resizeMode="contain">
                    <View style={{backgroundColor: 'rgba(50, 50, 50, 0.8)',width:'93%',height:50,
                borderTopLeftRadius:70,marginTop:160,paddingt:20,marginStart:6}}>
                    <Text style={{marginHorizontal:10,marginStart:80}}>{Hotels._price}</Text>
                    </View>
                    
                </ImageBackground>
                
            </View>
        </View>
        </TouchableOpacity>)
    }
    return (
    <SafeAreaView style={{flex:1 ,backgroundColor:COLORS.white}}>
         <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />
        <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../images/profile.jpg')}
                style={{height:50,width:50,borderRadius:25}}/>
                <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,
            marginTop:18}}>Thapelo</Text>
            </View>
          <Ionicons name="notifications" size={24}/>
        </View>
        <View style={{
            marginTop:20,
            flexDirection:'row',
            paddingHorizontal:20,
        }}>
        <View style={styles.inputContainer}>
        <Ionicons name="search" size={24}/>
        <TextInput 
        style={{fontSize:18,flex:1,marginLeft:10}}
        placeholder="Where to go ?"/>
        </View>
        </View>
        <View>
            <ListBtn/>
        </View>
        {Hotels?(
            <FlatList
            keyExtractor={(_,key)=>key.toString()}
            horizontal 
             showsHorizontalScrollIndicator={false}
            
            data={Hotels[selectedBtnIndex].hotel}
            renderItem={({item,index})=><Card Hotels={item} index={index}/>}
            />
        ):(
            <Text>No Hotels this side</Text>
        )}
        {Hotels?(
            <FlatList
            keyExtractor={(_,key)=>key.toString()}
            horizontal 
             showsHorizontalScrollIndicator={false}
            
            data={Hotels[selectedHotelIndex+ 3].hotel}
            renderItem={({item,id})=><CardNear Hotels={item}/>}
            />
        ):(
            <Text>No Hotels this side</Text>
        )}
        
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    inputContainer:{
        flex:1,
        height:50,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:COLORS.lightgray,
        alignItems:'center',
        paddingHorizontal:20, 
    },
    btnListContainer:{
        marginLeft:-20,
        paddingHorizontal:20,
        paddingVertical:30,
        // alignItems:'center'
    },
    categoryBtn:{
      height:45,
      width:120,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:5,
      flexDirection:'row',

    },
    card:{
       height:220, 
    },
    cardContainer:{
        height:220,
        width:cardWidth/1,
        marginBottom:20,
        marginHorizontal:10,
        marginTop:5,
        borderRadius:15,
        elevation:13,
        backgroundColor:COLORS.white

    },
    cardNearContainer:{
      height:120,
      width:cardWidth/2,
      borderRadius:15, 
      backgroundColor:COLORS.white ,
      elevation:13,
      marginLeft:12
    }
})
