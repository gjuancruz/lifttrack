import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Link } from "react-router-native";
import Constants from 'expo-constants'
import { register } from "../redux/slices/users";
import { useDispatch } from "react-redux";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(register({ 'email': email, 'username': username, 'password': password }));
    };

    return (
        <View style={styles.container}>

            <Image source={require('../../assets/logo.png')} />
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput}

                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput  style={styles.TextInput}

                    placeholder="Username..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <View  style={styles.inputView}>
                <TextInput style={styles.TextInput}

                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={styles.loginBtn}>

                <TouchableOpacity onPress={() => handleSubmit()}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
            
            <View>
                <TouchableOpacity style={styles.register_text}>
                    <Link to='/' underlayColor="#f0f4f7">
                        <Text>Back</Text>
                    </Link>
                </TouchableOpacity>
            </View>
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

export default Register