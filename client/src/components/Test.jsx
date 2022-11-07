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

   const handleSubmit = ()=>{
        dispatch(postRoutine({
            title:routineTitle,
            exercises:{[routineExercise]:routineReps},
            userId:'0844025d-5dae-4547-b1f5-6f1bbc852276'
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