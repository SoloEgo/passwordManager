import React, { useRef } from 'react';
import { ImageBackground, Text, View, StyleSheet, SafeAreaView, TextInput, Animated, Button, Easing, Image } from "react-native";

const Signup = () => {

    return (
        <SafeAreaView style={styles.signUpContainer}>
            <ImageBackground source={require("../assets/bg.png")} resizeMode="cover" style={styles.bgImage} >
                <View>
                    
                </View>
            </ImageBackground>
            <View style={styles.signUpForm}>
                <Text style={styles.signUpTitle}>Вход</Text>
                <View style={styles.inputHolder}>
                    <TextInput placeholder="Введите имя" style={styles.signUpInput} />
                </View>
                <View style={styles.inputHolder}>
                    <TextInput placeholder="Введите пароль" style={styles.signUpInput} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1,
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
    signUpTitle: {
        fontSize: 30,
    },
    signUpInput: {
        fontSize: 20,
        backgroundColor: "#fff",
        width: '80%',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#d3d3d3',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    inputHolder: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
    },
    signUpForm: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '70%',
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,
        zIndex: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});

export default Signup;