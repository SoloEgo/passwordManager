import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const SocialAuthButtons = () => {
    return (
        <View style={styles.socAuthBlock}>
            <View style={[styles.lineText]}>
                <View style={styles.lineTextLine} />
                <Text style={styles.lineTextText}>or continue with</Text>
                <View style={styles.lineTextLine} />
            </View>
            <View style={styles.socialHolder}>
                <TouchableOpacity style={[styles.socilaButton,styles.elevation]}>
                    <Image source={require("../../assets/apple-logo.png")} style={styles.socialImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socilaButton,styles.elevation]}>
                    <Image source={require("../../assets/google.png")} style={styles.socialImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socilaButton,styles.elevation]}>
                    <Image source={require("../../assets/facebook.png")} style={styles.socialImage}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SocialAuthButtons;

const styles = StyleSheet.create({
    socAuthBlock: {
        width: '100%',
    },
    lineText: {
        width: '100%',
        flexDirection: 'row'
    },
    lineTextLine: {
        backgroundColor: '#9E9E9E',
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    lineTextText: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#9E9E9E'
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
        backgroundColor: "#fff",
        shadowColor: '#d3d3d3',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        borderRadius: 15,
    },
    elevation: {
        elevation: 4,
        shadowColor: '#9E9E9E',
    },
})