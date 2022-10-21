import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { Link } from "react-router-native";
import Constants from 'expo-constants'
import { getAllUsersAPI } from "../redux/slices/users";

const Landing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsersAPI())
    }, [])
    return (
        <View style={{ marginTop: Constants.statusBarHeight }}>
            <Text>Welcome</Text>
            <Image source={require('../../assets/logo.png')} />
            <View>
                <TextInput

                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View >
                <TextInput

                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity >
                <Text>LOGIN</Text>
            </TouchableOpacity>
            <Link
                to="/register">

                <Text>regitrate papy</Text>

            </Link>
        </View>

    )
}

export default Landing