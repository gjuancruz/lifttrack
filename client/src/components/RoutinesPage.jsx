import React, { useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity as Button, StyleSheet } from 'react-native'
import RoutineCard from "./RoutineCard";
import { Link, useParams } from "react-router-native";
import { useDispatch, useSelector } from "react-redux";
import { getRoutine } from "../redux/slices/users";

const RoutinesPage = () => {
const routines = useSelector((state) => state.users.routines)
    console.log(routines)
    const dispatch = useDispatch()

    const idParams = useParams()
    console.log(idParams)
    useEffect(() => {
        dispatch(getRoutine(idParams.id))
    }, [])
    return (
        <View>
            {/* <RoutineCard title={routines[0].createdAt}></RoutineCard> */}
            {routines && routines.map((r)=>{
                return(
                    <RoutineCard title={r.title} exercises={r.exercises.map(e=> e.exercise).join(', ')} reps={r.exercises.map(e=> e.reps).join(', ')}></RoutineCard>
                )
            })}

            <Link
                to="/test">
                <Text>back</Text>
            </Link>
        </View>
    )
}

export default RoutinesPage