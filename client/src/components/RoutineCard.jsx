import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity as Button, StyleSheet } from 'react-native'


const RoutineCard = (props) =>{
    
    return(
        <View>
        <Text>{props.title}</Text>
        <Text>{props.exercises}</Text>
        <Text>{props.reps}</Text>
        <Text>a</Text>
        </View>
    )
}

export default RoutineCard