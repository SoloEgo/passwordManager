import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { ImageBackground, Text, View, Alert, Image, TouchableOpacity } from "react-native";
import UserInput from '../components/auth/userInput';
import UserSubmitButton from '../components/auth/UserSubmitButtons'
import { APIURL } from '../config';
import {styles} from '../components/styles/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const [state, setState] = useContext(AuthContext)

    useEffect(()=>{

    },[])

    const handleSubmit = async () => {
        setLoading(true)
        if( !email || !password){
            alert('All fields are required')
            setLoading(false);
            return;
        }

        try {
            const {data} = await axios.post('/signin', {email, password})
            if(data.error){
                Alert.alert(
                    "Sign in failed!",
                    data.error,
                    [
                        { text: "OK" }
                    ]
                );
            }else{
                // save resp in async storage
                await AsyncStorage.setItem('@auth', JSON.stringify(data))
                // save in context
                setState(data);
                
                setLoading(false);
                navigation.navigate('Home')
                // console.log('Sign in succes ', data);
            }
            //redirect
        } catch (error) {
            alert(error)
            setLoading(false);
        }
    }

    const loadFromAsyncStorage = async () => {
        let data = await AsyncStorage.getItem("@auth");
    }

    loadFromAsyncStorage();

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
                    <Text style={styles.signUpTitle}>Sign in</Text>
                    <View style={styles.userInput}>
                        <UserInput
                            name="e-mail"
                            value={email}
                            setValue={setEmail}
                            autoCompleteType="email"
                            autoCapitalize='none'
                            keyboardType="email-address" />
                    </View>
                    <View style={styles.userInput}>
                        <UserInput
                            name="Password"
                            value={password}
                            setValue={setPassword}
                            secureTextEntry={true}
                            autoCompleteType="password" />
                    </View>
                </View>
                <View style={[styles.signFormRow, { marginBottom: 30 }]}>
                    <UserSubmitButton title="Sign in" handleSubmit={handleSubmit} loading={loading} />
                    <View style={styles.signUpLine}>
                        <Text>Don`t have an account?</Text>
                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate("SignUp")} style={styles.signUpButton}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default SignIn;