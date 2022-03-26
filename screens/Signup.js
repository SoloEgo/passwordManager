import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import UserInput from '../components/auth/userInput';
import UserSubmitButton from '../components/auth/UserSubmitButton'
import axios from 'axios';

const Signup = ({navigation}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        if(!name || !email || !password){
            alert('All fields are required')
            setLoading(false);
            return;
        }

        try {
            const {data} = await axios.post('http://localhost:8000/api/signup', {name, email, password})
            console.log('Sign up succes ', data);
            alert('Sign up succes')
            setLoading(false);
            //redirect
        } catch (error) {
            console.log(error)
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
                <View style={styles.signFormRow}>
                    <View style={[styles.lineText]}>
                        <View style={styles.lineTextLine} />
                        <Text style={styles.lineTextText}>or continue with</Text>
                        <View style={styles.lineTextLine} />
                    </View>
                    <View style={styles.socialHolder}>
                        <TouchableOpacity style={styles.socilaButton}>
                            <Image source={require("../assets/apple-logo.png")} style={styles.socialImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socilaButton}>
                            <Image source={require("../assets/google.png")} style={styles.socialImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socilaButton}>
                            <Image source={require("../assets/facebook.png")} style={styles.socialImage}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.signFormRow, {marginBottom: 30}]}>
                    <UserSubmitButton title="Sign up" handleSubmit={handleSubmit} loading={loading}/>
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

const styles = StyleSheet.create({
    signUpContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    },
    bgImage: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        zIndex: 0,
    },
    logoHolder: {
        flex: 0,
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signUpForm: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        zIndex: 10,
        shadowColor: '#d3d3d3',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        paddingHorizontal: 50,
        paddingTop: 50,
    },
    signFormRow: {
        width: '100%',
    },
    logoImageHolder: {
        width: '100%',
        height: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    logoImage: {
        width: '100%',
        height: '100%',
        maxWidth: 150,
        aspectRatio: 1 / 1
    },
    logoTextHolder: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#d3d3d3'
    },
    logoText: {
        fontSize: 20,
    },
    logoTextColor: {
        color: '#0A54FF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    signUpTitle: {
        width: '100%',
        fontSize: 36,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    foretPasswordHolder: {
        width: '100%',
        marginTop: 10,
    },
    foretPassword: {
        color: '#EC0B43',
        textAlign: 'right',
        width: '100%'
    },
    lineText: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 50,
    },
    lineTextLine: {
        backgroundColor: 'black',
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    lineTextText: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 14
    },
    socialHolder: {
        display: 'flex',
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    socilaButton: {
        padding: 10,
        shadowColor: '#d3d3d3',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        borderRadius: 15,
        backgroundColor: '#fff'
    },
    signUpLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    signUpButton: {
        fontWeight: 'bold',
        color: '#0A54FF',
        marginLeft: 5
    }
});

export default Signup;