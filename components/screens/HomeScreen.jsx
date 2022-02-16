import React, { useState ,useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,
     FlatList, Dimensions,ImageBackground,StatusBar } from 'react-native'
import { COLORS } from '../styles/Colors'
import { ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import Hotels from '../onbording/Hotels'
import { auth ,db} from './firebase'
const {width}=Dimensions.get("screen")
const cardWidth =width/1.8
const HomeScreen = ({navigation}) => {
    const [name,setName]=useState(false)
    const [location,setLocation]=useState(false)
    const [images,setImage]=useState('')
    const [url,setUrl]=useState('')
    const [Hotels,setAddHotels]=useState([])
    const user = auth.currentUser.uid;
    useEffect(()=>{
        db.ref('/hotels').on('value',snap=>{
          
         const Hotels=[]
            snap.forEach(action=>{
                const key=action.key
                const data =action.val()
                Hotels.push({
                    key:key,
                    location:data.location,
                    name:data.name,
                    url:data.url,
                    price:data.price,
                    food:data.food,
                    gym:data.gym,
                    wifi:data.wifi,
                    pool:data.pool
                })
                setAddHotels(Hotels)
                console.log(Hotels)
            })
        })
      
        
      },[])
      useEffect(()=>{
        db.ref('/users/'+ user).on('value',snap=>{
          
          setName(snap.val() && snap.val().name);
      // setPhonenumber(snap.val().Phonenumber)
    
        })
      
        
      },[])
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
            {Btn.map((category,index)=>(
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
        {/* <View style={styles.cardContainer}> */}
        <ImageBackground style={styles.cardImage} source={{uri:Hotels.url}}>
            <View style={{height:100,alignItems:'center'}}>
                {/* <Image source={Hotels._image}
                style={{flex:1,resizeMode:'contain'}}vb
                /> */}
                    <View style={{backgroundColor: 'white',
opacity: 0.7,width:'90%',height:55,
        paddingt:10,paddingHorizontal:12,marginTop:120,
                justifyContent:'flex-start',alignItems:'flex-start'}}>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name='location-sharp' size={16} />
                    <Text style={{marginHorizontal:10,marginStart:0}}>{Hotels.location}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name='star' size={16} color='orange'/>
                    {/* <Text style={{marginHorizontal:10,marginStart:0}}>{Hotels.rating}</Text> */}
                    </View>
                    </View>
                    
             
                
            </View>
            </ImageBackground>
        {/* </View> */}
        </TouchableOpacity>)
    }
    const CardNear =({Hotels})=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate('Hotel Details',{data:Hotels})}>
        <View style={styles.cardNearContainer}>
           
                <Image source={{uri:Hotels.url}}
                style={{height:60,width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10}}
                />
                   <View style={{paddingVertical:5,paddingHorizontal:10}}>
                       <Text style={{fontSize:12,fontWeight:'bold'}}>{Hotels.location}</Text>
                       {/* <View style={{flexDirection:'row'}}>
                        <Ionicons name='star' size={12} color='orange'/>
                    <Text style={{marginHorizontal:10,marginStart:0,fontSize:10}}> {Hotels.rating}</Text>
                    </View> */}
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
            <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
                <Image source={{ uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540chabathapelo%252Fprojectpractice/ImagePicker/7999748e-de51-4cbc-9228-5bc61c45fb3c.jpg'}}
                style={{height:50,width:50,borderRadius:25}}/>
                </TouchableOpacity>
                <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,
            marginTop:18}}>{name}</Text>
            </View>
            <TouchableOpacity onPress={navigation.navigate('SearchScreen')}>
          <Ionicons name="notifications" size={24}/>
          </TouchableOpacity>
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
        <View >
        {/* {Hotels?( */}
            <FlatList
            keyExtractor={(_,key)=>key.toString()}
            horizontal 
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{ paddingLeft:20}}
            data={Hotels}
            renderItem={({item,index})=><Card Hotels={item} index={index}/>}
            />
        {/* ):(
            <Text>No Hotels this side</Text>
        )} */}
        {/* {Hotels?( */}
            <View>
                <View style={{flexDirection:'row',
                justifyContent:'space-between',marginHorizontal:20,paddingVertical:20}}>
                        <Text style={{fontWeight:'bold',color:'grey'}}>Near You</Text>
                        <Text style={{color:'grey'}}>Show all</Text>
                </View>
            <FlatList
            keyExtractor={(_,key)=>key.toString()}
            horizontal 
             showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft:20,}}
            data={Hotels}
            renderItem={({item,id})=><CardNear Hotels={item} index={id}/>}
            />
            </View>
        {/* ):(
            <Text>No Hotels this side</Text>
        )} */}
        </View>
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
        height:200,
        width:cardWidth,
        marginRight:20,
        // marginBottom:20,
        // marginHorizontal:10,
        // marginTop:5,
        borderRadius:15,
        elevation:15,
        backgroundColor:COLORS.white

    },
    cardNearContainer:{
      height:120,
    //   width:cardWidth/2,
      borderRadius:15, 
      backgroundColor:COLORS.white ,
      elevation:15,
      width:120,
      marginHorizontal:10,
    //   marginLeft:12

    
    },
    cardImage:{
        height:190,
        width:width/2,
        marginRight:20,
        padding:10,
        overflow:'hidden',
        borderRadius:10,
    }
})
