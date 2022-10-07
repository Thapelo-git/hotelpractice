import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

const Flatbutton = ({text,onPress,style}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <View style={styles.buttonstyle}>
            <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default Flatbutton

const styles = StyleSheet.create({
    buttonstyle:{
        borderRadius:10,
        paddingVertical:10,
        width:200,
        backgroundColor:'#4A1DD6',
        

    },
    buttonText:{
        color:'#fff',
        fontWeight:'normal',
        // textTransform:'uppercase',
        fontSize:20,
        fontStyle:'normal',
        textAlign:'center'
    },
})
