import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image, TextInput, TouchableOpacity as Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from "react-router-native";
import Constants from 'expo-constants'
import { getAllUsersAPI, login } from "../redux/slices/users";
import { StatusBar } from "expo-status-bar";
import {useNavigate} from 'react-router-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Landing = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch()

    const handleSubmit = async() => {
        dispatch(login({ 'email': email, 'password': password }));
        const token = await AsyncStorage.getItem('sw-token')
        if(token){ 
            navigate("/test")
        console.log(token)
        }
    };

    useEffect(() => {
        dispatch(getAllUsersAPI())
    }, [])
    const allUsers = useSelector(state => state.users.allUsers)

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.image} />
            <StatusBar style="auto" />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <Button style={styles.loginBtn} onPress={()=> handleSubmit()} >
                <Text>LOGIN</Text>
            </Button>

            <TouchableOpacity>
                <Link to="/register" underlayColor="#f0f4f7">
                    <Text style={styles.register_text}>Don’t have an account? Sign up</Text>
                </Link>
            </TouchableOpacity>


            {/* <View>
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

            </View> */}
            <Link
                    to="/test">

                    <Text>test</Text>

                </Link>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#ffd50008",
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#ffd50080",
        borderRadius: 25,

        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 15,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ffd500",
    },

    register_text: {
        margin: 20
    }
});


export default Landing