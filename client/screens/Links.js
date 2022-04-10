import React, { useContext } from 'react'
import {View, Text} from 'react-native'
import FooterTabs from "../components/nav/FooterTabs";
import { AuthContext } from "../context/auth";

export default function Links (){
    const [state, setState] = useContext(AuthContext)
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fff'
        }}>
            <View style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                maxWidth: 500,
                backgroundColor: '#f5f5f5'
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-between',
                }}>
                    <Text>
                    <Text>
                        {JSON.stringify(state, null, 4)}
                    </Text>
                    </Text>
                </View>
                <View>
                    <FooterTabs />
                </View>
            </View>
        </View>
    )
}