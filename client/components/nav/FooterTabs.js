import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";

export const Tab = ({ name, iconName, handlePress, screenName, routeName }) => {
    const activeScreenColor = screenName === routeName? 'blue' : 'black'
    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.FooterButtonCont}>
                <AntDesign name={iconName} size={25} color={activeScreenColor} />
                <Text style={{color: activeScreenColor}}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default function FooterTabs() {
    const navigation = useNavigation();
    const route = useRoute();
    const handlePress = (screenName) => {
        navigation.navigate(screenName)
    }
    return (
        <View style={styles.FooterTabs}>
            <Tab
                handlePress={() => handlePress('Home')}
                name="Home"
                iconName="home"
                screenName="Home"
                routeName = {route.name}
            />
            <Tab
                handlePress={() => handlePress('Post')}
                name="Post"
                iconName="plussquareo"
                screenName="Post"
                routeName = {route.name}
            />
            <Tab
                handlePress={() => handlePress('Links')}
                name="Links"
                iconName="link"
                screenName="Links"
                routeName = {route.name}
            />
            <Tab
                handlePress={() => handlePress('Account')}
                name="Account"
                iconName="user"
                screenName="Account"
                routeName = {route.name}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    FooterTabs: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#d3d3d3',
        paddingTop: 15,
        paddingBottom: 30,
        backgroundColor: '#fff'
    },
    FooterButtonCont: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})