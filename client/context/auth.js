import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APIURL } from '../config';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        user: null,
        token: ""
    });

    //axios.defaults.baseURL = APIURL;

    useEffect(() => {
        const loadFromAsyncStorage = async() => {
            let data = await AsyncStorage.getItem('@auth')
            const dataJS = JSON.parse(data);
            setState({...state, user: dataJS.user, token: dataJS.token });
        };
        loadFromAsyncStorage
    }, [])

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};