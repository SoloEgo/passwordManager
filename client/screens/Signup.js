import axios from 'axios';
import React, { useState } from 'react';
import { ImageBackground, Text, View, Alert, Image, TouchableOpacity } from "react-native";
import UserInput from '../components/auth/userInput';
import UserSubmitButton from '../components/auth/UserSubmitButtons'
import { styles } from '../components/styles/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';

const Signup = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const [state, setState] = useContext(AuthContext)

    const handleSubmit = async () => {
        setLoading(true)
        if (!name || !email || !password) {
            alert('All fields are required')
            setLoading(false);
            return;
        }

        try {
            const { data } = await axios.post('/api/signup', { name, email, password })
            if (data.error) {
                Alert.alert(
                    "Sign up failed!",
                    data.error,
                    [
                        { text: "OK" }
                    ]
                );
            } else {
                await AsyncStorage.setItem('@auth', JSON.stringify(data))
                // save in context
                setState(data);
                navigation.navigate('Home')
            }
            setLoading(false);
            //redirect
        } catch (error) {
            Alert.alert(
                "Sign up failed!",
                error,
                [
                    { text: "OK" }
                ]
            );
            setLoading(false);
        }
    }

    return (
        <View style={styles.signUpContainer}>
            <ImageBackground source={require("../assets/bg.png")} resizeMode="cover" style={styles.bgImage}></ImageBackground>
            <View style={styles.logoHolder}>
                <View style={styles.logoImageHolder}>
                    <Image source={require("../assets/icon.png")} style={styles.logoImage}></Image>
                </View>
                <View style={styles.logoTextHolder}>
                    <Text style={styles.logoText}>LOCK</Text>
                    <Text style={styles.logoTextColor}>KIT</Text>
                </View>
            </View>
            <View style={styles.signUpForm}>
                <View style={styles.signFormRow}>
                    <Text style={styles.signUpTitle}>Sign up</Text>
                    <UserInput
                        name="Name"
                        value={name}
                        setValue={setName} />
                    <UserInput
                        name="e-mail"
                        value={email}
                        setValue={setEmail}
                        autoCompleteType="email"
                        keyboardType="email-address" />
                    <UserInput
                        name="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true}
                        autoCompleteType="password" />
                </View>
                <View style={[styles.signFormRow, { marginBottom: 30 }]}>
                    <UserSubmitButton title="Sign up" handleSubmit={handleSubmit} loading={loading} />
                    <View style={styles.signUpLine}>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate("SignIn")} style={styles.signUpButton}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Text>{JSON.stringify({name, email, password}, null, 4)}</Text> */}
            </View>
        </View>
    )
}

export default Signup;