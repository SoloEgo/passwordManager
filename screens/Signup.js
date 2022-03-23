import React, { useRef } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Animated, Button, Easing } from "react-native";
import { BlurView } from 'expo-blur';

const Signup = () => {
    const animate_state = {
        start: 0,
        end: 2000
    }

    const value = useRef(new Animated.Value(animate_state.start)).current

    const startAnimate = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(value, {
                    toValue: animate_state.end,
                    useNativeDriver: true,
                    duration: 10000,
                    easing: Easing.ease
                }),
                Animated.timing(value, {
                    toValue: animate_state.start,
                    useNativeDriver: true,
                    duration: 10000,
                    easing: Easing.cubic
                }),
            ])
        ).start()
    }
    const inputRange = [animate_state.start, animate_state.end] //или Object.values(animate_state)
    const translateY = value.interpolate({ inputRange, outputRange: [0, 200] })
    const opacity = value.interpolate({ inputRange, outputRange: [1, 0.2] })

    React.useEffect(() => {
        startAnimate()
    }, []);



    return (
        <SafeAreaView style={styles.signUpContainer}>
            <Animated.View style={{
                transform: [
                    {
                        translateY: value.interpolate({ inputRange: [0, 100], outputRange: [0, 100] })
                    },
                    {
                        translateX: value.interpolate({ inputRange: [0, 100], outputRange: [0, 10] })
                    }
                ],
                position: 'absolute',
                top: -500,
                left: 100,
                height: '50%',
                width: '100%',
                borderRadius: 1000,
                backgroundColor: '#4649ad',
                opacity: 0.1,
                zIndex: 5
            }}  >
            </Animated.View>
            <View style={{
                position: 'absolute',
                bottom: -150,
                left: -150,
                height: '50%',
                width: '150%',
                borderRadius: 10,
                backgroundColor: 'purple',
                opacity: 0.1,
                transform: [{rotate: 45}],
                zIndex: 0
            }} ></View>
            <BlurView
                intensity={100}
                style={styles.signBG}>
            </BlurView>
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
        height: '100%'
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
    signBG: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '200%',
        zIndex: 10,
    },
    signUpForm: {
        width: '100%',
        height: '100%',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20
    }
});

export default Signup;