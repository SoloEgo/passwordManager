import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../../context/auth';
import HeaderTabs from './HeaderTabs';
import { Text} from 'react-native';
import Signup from '../../screens/Signup';
import SignIn from '../../screens/SignIn';
import Home from '../../screens/Home';
import Account from '../../screens/Account';
import Post from '../../screens/Post';
import Links from '../../screens/Links';

const Stack = createNativeStackNavigator();

export default function ScreensNav() {
    const [state, useState] = useContext(AuthContext)
    const authenticated = state && state.token !== '' && state.user !== null;
    const screenOptionStyle = {
        headerShown: true,
        headerStyle: {
            backgroundColor: "#fff",
        }
    }

    return (
        <Stack.Navigator initialRouteName="SignIn" screenOptions={screenOptionStyle} >
            {
                authenticated ?
                    (<>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                title: 'LockKit',
                                headerRight: () => {
                                    return <HeaderTabs />
                                }
                            }}
                        />
                        <Stack.Screen
                            name="Post"
                            component={Post}
                            options={{headerLeft: () => <Text></Text>}}
                        />
                        <Stack.Screen
                            name="Links"
                            component={Links}
                            options={{headerLeft: () => <Text></Text>}}
                        />
                        <Stack.Screen
                            name="Account"
                            component={Account}
                            options={{headerLeft: () => <Text></Text>}}
                        />
                    </>) :
                    (
                        <>
                            <Stack.Screen
                                name="SignIn"
                                component={SignIn}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Stack.Screen
                                name="SignUp"
                                component={Signup}
                                options={{
                                    headerShown: false
                                }}
                            />
                        </>
                    )
            }


        </Stack.Navigator>
    );
}