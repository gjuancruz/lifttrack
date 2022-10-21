import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { Link } from "react-router-native";
import Constants from 'expo-constants'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ marginTop: Constants.statusBarHeight }}>
            <Text>Register</Text>
            <Image source={require('../../assets/logo.png')} />
            <View>
                <TextInput

                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View >
                <TextInput

                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View>

            <TouchableOpacity >
                <Text>Register</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>

            <Link to='/' underlayColor="#f0f4f7">
                <Text>aaaaaaaaa</Text>
            </Link>
            </TouchableOpacity>
            </View>
        </View>

    )
}

export default Register