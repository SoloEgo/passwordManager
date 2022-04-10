import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";

const UserInput = ({
    name,
    value,
    setValue,
    autoCorrect = false,
    keyboadType = "default",
    autoCapitalize = 'none',
    secureTextEntry = false }) => {
    return (
        <View style={styles.inputHolder}>
            <TextInput
                style={styles.signUpInput}
                value={value}
                placeholder={name}
                onChangeText={(text) => setValue(text)}
                autoCorrect = {autoCorrect}
                keyboadType = {keyboadType}
                secureTextEntry = {secureTextEntry}
                autoCapitalize = {autoCapitalize}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputHolder: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    signUpInput: {
        fontSize: 16,
        borderWidth: 1,
        backgroundColor: "#fff",
        width: '100%',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#CBCBCB'
    }
})

export default UserInput;