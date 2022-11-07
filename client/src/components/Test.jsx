import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity as Button } from 'react-native'
import Constants from 'expo-constants'
import { Link } from "react-router-native";
import { useDispatch } from "react-redux";
import { postRoutine } from "../redux/slices/users";

const Test = () => {
    const dispatch = useDispatch()
    const [routineTitle, setRoutineTitle] = useState('')
    const [routineExercise, setRoutineExercise] = useState({})
    const [routineReps, setRoutineReps] = useState()
    const [routineFull, setRoutineFull] = useState([])

    const handleExercises = () =>{
        setRoutineFull(
            [...routineFull, 
            {exercise: routineExercise,
            reps: routineReps}]
        )
    }

   const handleSubmit = ()=>{
        dispatch(postRoutine({
            title:routineTitle,
            exercises:routineFull,
            userId:'0a9b75d7-4399-41ed-84fc-de94363e32d7'
        }))
    }

    return (
        <View style={{ marginTop: Constants.statusBarHeight }}>
            <Text>test</Text>

            <View>
                <TextInput onChangeText={(title) => setRoutineTitle(title)}
                    placeholder="title"
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View>
                <TextInput onChangeText={(exercise) => setRoutineExercise(exercise)}
                    placeholder="ex 1"
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View>
                <TextInput onChangeText={(reps) => setRoutineReps(reps)}
                    placeholder="desc"
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View>
            <Button onPress={() => handleExercises()}>
                <Text>add</Text>
            </Button>
        </View>
        <View>
            <Button onPress={() => handleSubmit()}>
                <Text>press</Text>
            </Button>
        </View>
            <View>
            <Link
                    to="/">

                    <Text>back</Text>

                </Link>
            </View>
        </View>
    )
}

export default Test