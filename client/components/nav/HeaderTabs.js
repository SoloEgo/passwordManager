import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { AuthContext } from '../../context/auth';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderTabs = () => {
    const [state, setState] = useContext(AuthContext)

    const signOut = async () => {
        alert('signout')
        setState({token: '', user: null})
        await AsyncStorage.removeItem('@auth')
    }

    return (
        <SafeAreaView >
            <TouchableOpacity onPress={signOut}>
                <AntDesign name="logout" size={25} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    )

}

export default HeaderTabs;