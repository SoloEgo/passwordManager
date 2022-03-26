import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";
import UserInput from '../components/auth/userInput';
import UserSubmitButton from '../components/auth/UserSubmitButton'

const SignIn = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    return (
        <SafeAreaView style={styles.signUpContainer}>
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
                <Text style={styles.signUpTitle}>Sign in</Text>
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
                <UserSubmitButton title="Sign in" />
                <View style={styles.signUpLine}>
                    <Text>Don`t have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpButton}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: '#d3d3d3',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    logoImageHolder: {
        width: '100%',
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        borderRadius: 10,
    },
    logoText: {
        fontSize: 20,
    },
    logoTextColor: {
        color: '#0A54FF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    signUpForm: {
        bottom: 0,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '75%',
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
    submmitButton: {
        backgroundColor: '#0A54FF',
        width: '100%',
        borderRadius: 100,
        color: '#fff',
        textAlign: 'center',
        marginTop: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submmitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
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

export default SignIn;