import React,{useState,useEffect} from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'


const GalleryScreen = ({route}) => {

    // console.log(route.params.galary)
     const galaryArr=route.params.galary
    const index=route.params.index
    const [myGalary,setMyGalary]=useState(0);
    const [backImg,setBackImg]=useState()
    const [myIndex,setMyIndex]=useState(index);

   
   

    useEffect(()=>{
        var temp=[]
        
        const changeImg=()=>{
            temp=galaryArr.filter((img,index)=>index!==myIndex)
        }
        const getBackgroundImg=()=>{
            
            setBackImg(galaryArr[myIndex])
        }
        changeImg()
        getBackgroundImg()
        setMyGalary(temp)
        
    },[myIndex])

    const list = route.params
    const Gallery=({pic,_index})=>(
         <TouchableOpacity onPress={()=>setMyIndex(_index)}>
        <Image source={pic} style={{height:120,width:120}}/>
         </TouchableOpacity>
    )
    return (
        <ImageBackground source={backImg} style={{flex:1}}>
           
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={galaryArr}
            renderItem={({item,index})=><Gallery pic={item} _index={index} />}/>
            
        </ImageBackground>
    )
}

export default GalleryScreen

const styles = StyleSheet.create({})
