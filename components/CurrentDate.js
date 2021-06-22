import React from 'react'
import { Text, View } from 'react-native'


const getCurrentDate =(props) => {
    let date = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()
  
    return <View> <Text>{date + '-' + month + '-' + year}</Text></View>
  }

  export default getCurrentDate