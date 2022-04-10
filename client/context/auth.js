import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APIURL } from '../config';
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        user: null,
        token: ""
    });
    const token = state && state.token ? state.token : "";
    const navigation = useNavigation();

    axios.defaults.baseURL = APIURL+'/api';
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    axios.interceptors.response.use(
        async function(response){
            return response
        },
        async function(error){
            let res = error.response;
            if(res.status == 401 && res.config && !res.config.__isRetryRequest){
                await AsyncStorage.removeItem('@auth')
                setState({
                    user: null,
                    token: ''
                })
                navigation.navigate('SignIn')
            }
        }
    )

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