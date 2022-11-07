import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image, TextInput, TouchableOpacity as Button } from 'react-native'
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
    const allUsers = useSelector(state => state.users.allUsers)

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


            <Button >
                <Text>LOGIN</Text>
            </Button>
            <Link
                to="/register">

                <Text>regitrate papy</Text>

            </Link>

            <View>
                {allUsers.map(e => {
                    return (
                        <View>
                            <Text>{e.username}</Text>
                            <Text>{e.email}</Text>
                        </View>
                    )
                })}

                <Link
                    to="/test">

                    <Text>test</Text>

                </Link>

            </View>
        </View>

    )
}

export default Landing