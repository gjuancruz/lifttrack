import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity as Button, StyleSheet } from 'react-native'


const RoutineCard = (props) => {

    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.exercises} {props.reps}</Text>
        </View>
    )
}

export default RoutineCard