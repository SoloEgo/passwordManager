import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

export const Tab = ({ name, iconName }) => (
    <TouchableOpacity>
        <View style={styles.FooterButtonCont}>
            <AntDesign name={iconName} size={25} color="black" />
            <Text>{name}</Text>
        </View>
    </TouchableOpacity>
)


export default function FooterTabs() {
    return (
        <View style={styles.FooterTabs}>
            <Tab name="Home" iconName="home" />
            <Tab name="Post" iconName="plussquareo" />
            <Tab name="Lins" iconName="link" />
            <Tab name="Account" iconName="user" />
        </View>
    )
}
const styles = StyleSheet.create({
    FooterTabs:{
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#d3d3d3',
        paddingTop: 15,
    },
    FooterButtonCont: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})