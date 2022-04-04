import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const UserSubmitButton = ({ title, handleSubmit, loading }) => {
    return (
        <TouchableOpacity 
        style={styles.submitButton}
        onPress={handleSubmit}
        >
            <Text style={styles.submitButtonText}>{loading ? "Please wait..." : title}</Text>
        </TouchableOpacity>
    )
}

export default UserSubmitButton;

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#0A54FF',
        width: '100%',
        borderRadius: 100,
        color: '#fff',
        textAlign: 'center',
        marginTop: 25,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }

})