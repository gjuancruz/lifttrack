import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity as Button, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Link } from "react-router-native";
import { useDispatch, useSelector } from "react-redux";
import { postRoutine } from "../redux/slices/users";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Test = () => {
    const dispatch = useDispatch()
    const [routineTitle, setRoutineTitle] = useState('')
    const [routineExercise, setRoutineExercise] = useState({})
    const [routineReps, setRoutineReps] = useState()
    const [routineFull, setRoutineFull] = useState([])
    const userId = useSelector((state) => state.users.currentUserId)
    const handleExercises = () => {
        setRoutineFull(
            [...routineFull,
            {
                exercise: routineExercise,
                reps: routineReps
            }]
        )
    }

    const handleSubmit = () => {
        dispatch(postRoutine({
            title: routineTitle,
            exercises: routineFull,
            userId: userId
        }))
    }
    const handleLogOut = async() =>{
        await AsyncStorage.removeItem('sw-token')
    }
    return (
        <View style={styles.container}>
            <Text>test</Text>

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                onChangeText={(title) => setRoutineTitle(title)}
                    placeholder="title"
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.container2}>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                onChangeText={(exercise) => setRoutineExercise(exercise)}
                    placeholder="ex 1"
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}
                onChangeText={(reps) => setRoutineReps(reps)}
                    placeholder="desc"
                    placeholderTextColor="#003f5c"
                />
            </View>
            </View>

            
                <Button style={styles.btn}
                 onPress={() => handleExercises()}>
                    <Text>add</Text>
                </Button>
            
            
                <Button style={styles.btn}
                onPress={() => handleSubmit()}>
                    <Text>send</Text>
                </Button>
            
            
                <Button style={styles.btn}
                onPress={() => handleLogOut()}>
                    <Text>logout</Text>
                </Button>
            
                <Link
                    to="/">
            {/* <Button style={styles.btn}> */}

                    <Text>back</Text>

            {/* </Button> */}
                </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    inputView: {
        backgroundColor: "#ffd50008",
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#ffd50080",
        borderRadius: 25,

        width: "30%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
        margin:20
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 15,
    },
    container2: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#ffd50080",
        alignItems: "center",
        justifyContent: "center",
        margin:20,
        flexDirection: "row",
        padding:'10%',
    },
    btn: {
        width: "20%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ffd500",
    },
});

export default Test