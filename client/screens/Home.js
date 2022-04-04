import React, { useContext } from "react";
import { Text, View } from 'react-native';
import { AuthContext } from "../context/auth";
import FooterTabs from "../components/nav/FooterTabs";

const Home = () => {

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
                </View>
                <View style={{
                }}>
                    {/* {JSON.stringify(state, null, 4)} */}
                    <FooterTabs />
                </View>
            </View>
        </View>

    )
}

export default Home;