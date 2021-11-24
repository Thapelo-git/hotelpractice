import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, FlatList, Dimensions,ImageBackground } from 'react-native'
import { COLORS } from '../styles/Colors'
import { ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Hotels from '../onbording/Hotels'
const {width}=Dimensions.get("screen")
const cardWidth =width/2 - 20
const HomeScreen = () => {
    const [ selectedBtnIndex,setSelectedBtnIndex] = useState(0);
    const Btn =[
        {id:'1',name:'Recomended'},
        {id:'2',name:'Popular'},
        {id:'3',name:'Top Ratings'},
        
    ]
    const ListBtn =()=>{
        return <ScrollView horizontal 
        showsHorizontalScrollIndicator={false} style={styles.btnListContainer}>
            {Btn.map((category,index)=>(
                <TouchableOpacity key={index} activeOpacity={0.8}
                onPress={()=> setSelectedBtnIndex(index)}>
                <View style={{
                    backgroundColor:selectedBtnIndex == index
                    ?COLORS.theme
                    :COLORS.lightgray,
                    ...styles.categoryBtn,
                }}>
                    <Text style={{
                        fontSize:15,fontWeight:'bold',marginLeft:10,
                        color:selectedBtnIndex == index?COLORS.white :COLORS.theme
                    }}>{category.name}</Text>
                </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    }
    const Card =({_image,_price})=>{
        return(<View style={styles.cardContainer}>
            <View style={{alignItems:'center'}}>
                <ImageBackground source={_image}
                style={{marginVertical:5,height:210,width:cardWidth}}
                resizeMode="contain">
                    <View style={{backgroundColor:'#fff',width:cardWidth,height:50,
                borderTopLeftRadius:70,marginTop:160}}>
                    <Text style={{marginHorizontal:10}}>{_price}</Text>
                    </View>
                    
                </ImageBackground>
                
            </View>
        </View>)
    }
    return (
    <SafeAreaView style={{flex:1 ,backgroundColor:COLORS.white}}>
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
        <FlatList
        horizontal 
         showsHorizontalScrollIndicator={false}
        //showsVerticalScrollIndicator={false}
        // numColumns={2}
        data={Hotels}
        renderItem={({item})=><Card {...item}/>}
        />
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

    }
})
