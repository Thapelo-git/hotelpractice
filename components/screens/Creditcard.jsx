import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import {CreditCardInput} from 'react-native-credit-card-input'
export default class Creditcard extends Component {
    _onFocus= field=>console.log(field)
    _onChange=formData=>console.log(JSON.stringify(formData,null,''))
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                <CreditCardInput 
                autoFocus
                requireName={true}
                requireCVC={true}
                requirePostalCode={true}
                validColor='black'
                invalidColor='red'
                placeholderColor='darkgray'
                labelStyle={{color:'black',fontSize:12}}
                InputStyle={{color:'black',fontSize:16}}
                onfocus={this._onFocus}
                onChange={this._onChange}
                />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:5,
        backgroundColor:'white'
    }
})
