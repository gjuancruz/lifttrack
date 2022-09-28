import React from "react";
import {Text, View} from 'react-native'
import Constants from 'expo-constants'

const Landing = ()=>{
    return(
        <View style={{marginTop: Constants.statusBarHeight}}>
            <Text>Welcome</Text>
        </View>
    )
}

export default Landing