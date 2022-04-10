import axios from 'axios';
import React, { useState, useContext, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { AuthContext } from "../context/auth";
import { AntDesign } from '@expo/vector-icons';
import { APIURL } from '../config';
import FooterTabs from "../components/nav/FooterTabs";
import UserInput from '../components/auth/userInput';
import UserSubmitButton from '../components/auth/UserSubmitButtons'
import UserImage from "../components/content/UserImage";
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
export default function Account() {
    const [state, setState] = useContext(AuthContext)
    const [name, setName] = useState(state.user.name)

    const [email, setEmail] = useState(state.user.email)
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")

    const [role, setRole] = useState(state.user.role)

    const [uploadImage, setUploadImage] = useState(state.user.image.url)
    const [image, setImage] = useState({ url: state.user.image.url, publick_id: '' })

    useEffect(() => {
        if (state) {
            //const {email, name, image} = state.user
            setEmail(email)
            setName(name)
            setImage(image)
        }
    }, [state])

    const handleSubmit = async () => {
        setLoading(true)
        if (!email || !password) {
            alert('All fields are required')
            setLoading(false);
            return;
        }

        try {
            const { data } = await axios.post('/signin', { email, password })
            if (data.error) {
                Alert.alert(
                    "Update failed!",
                    data.error,
                    [
                        { text: "OK" }
                    ]
                );
            } else {
                // save resp in async storage
                await AsyncStorage.setItem('@auth', JSON.stringify(data))
                // save in context
                //setState(data);
                //setLoading(false);
            }
            //redirect
        } catch (error) {
            alert(error)
            setLoading(false);
        }
    }
    const handleUpload = async () => {
        let permissionResultGallery = await ImagePicker.requestMediaLibraryPermissionsAsync()
        let permissionResultCamera = await ImagePicker.requestCameraPermissionsAsync()
        let base64Image = ''
        let pickerResult

        if (!permissionResultCamera.granted) {
            alert('Yo need to access camera')
            return
        }

        if (!permissionResultCamera.granted) {
            alert('Yo need to access gallery')
            return
        }

        Alert.alert(
            "Choose source",
            "Form where take a pic",
            [
                {
                    text: "Camera",
                    onPress: async () => {
                        pickerResult = await ImagePicker.launchCameraAsync({
                            allowsEditing: true,
                            aspect: [4, 3],
                            base64: true
                        })
                        if (pickerResult.cancelled) {
                            return
                        } else {
                            base64Image = `data:image/jpg;base64,${pickerResult.base64}`
                            setUploadImage(base64Image)
                            const { data } = await axios.post(
                                '/upload-image',
                                {
                                    image: base64Image,
                                })
                        }
                    }
                },
                {
                    text: 'Gallery',
                    onPress: async () => {
                        pickerResult = await ImagePicker.launchImageLibraryAsync({
                            allowsEditing: true,
                            aspect: [4, 3],
                            //base64: true
                        })
                        if (pickerResult.cancelled) {
                            return
                        } else {
                            const manipResult = await manipulateAsync(
                                pickerResult.uri,
                                [
                                    { resize: { width: 200 } },
                                ],
                                {
                                    compress: 1,
                                    base64: true
                                }
                            );
                            //console.log(manipResult)
                            base64Image = `data:image/jpg;base64,${manipResult.base64}`
                            setUploadImage(base64Image)
                            const { data } = await axios.post(
                                '/upload-image',
                                {
                                    image: base64Image
                                }).then((data) => {
                                    console.log('get data')
                                    console.log(data);
                                }).catch((error) => {
                                    console.error(error);
                                });
                        }
                    }
                }
            ]
        )
    }
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
                <ScrollView>
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-between',
                    }}>
                        <View style={styles.cardView}>
                            <View style={styles.userImageHolder}>
                                <UserImage>
                                    {image && image.url && uploadImage == '' ? (
                                        <View>
                                            <TouchableOpacity onPress={() => handleUpload()}>
                                                <Image
                                                    source={{ uri: image.url }}
                                                    style={{
                                                        height: '100%',
                                                        aspectRatio: 1 / 1,
                                                        borderRadius: 1000
                                                    }}
                                                />
                                                <View style={styles.cameraIcon}>
                                                    <AntDesign name="camerao" size={30} color="black" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ) : uploadImage ? (
                                        <View>
                                            <TouchableOpacity onPress={() => handleUpload()}>
                                                <Image
                                                    source={{ uri: uploadImage }}
                                                    style={{
                                                        height: '100%',
                                                        aspectRatio: 1 / 1,
                                                        borderRadius: 1000
                                                    }}
                                                />
                                                <View style={styles.cameraIcon}>
                                                    <AntDesign name="camerao" size={30} color="black" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ) : (
                                        <View>
                                            <TouchableOpacity onPress={() => handleUpload()}>
                                                <Image
                                                    source={require("../assets/icon.png")}
                                                    style={{
                                                        height: '100%',
                                                        aspectRatio: 1 / 1
                                                    }}
                                                />
                                                <View style={styles.cameraIcon}>
                                                    <AntDesign name="camerao" size={30} color="black" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </UserImage>
                            </View>
                            <Text style={styles.userName}>
                                Hey, {name} !
                            </Text>
                            <Text style={styles.roleName}>
                                Your role is: {role}
                            </Text>
                            <View style={styles.inputLine}>
                                <Text style={styles.inputLabel}>
                                    Your email:
                                </Text>
                                <UserInput
                                    name="e-mail"
                                    value={email}
                                    setValue={setEmail}
                                    autoCompleteType="email"
                                    keyboardType="email-address" />
                            </View>
                            <View style={styles.inputLine}>
                                <Text style={styles.inputLabel}>
                                    Change password:
                                </Text>
                                <UserInput
                                    name="Password"
                                    value={password}
                                    setValue={setPassword}
                                    secureTextEntry={true}
                                    autoCompleteType="password" />
                            </View>
                            <View>
                                <UserSubmitButton title="Apply changes" handleSubmit={handleSubmit} loading={loading} />
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View>
                    <FooterTabs />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 20,
        paddingBottom: 50,
        shadowColor: '#d3d3d3',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        borderRadius: 20
    },
    userImageHolder: {
        width: '100%',
        maxHeight: 200,
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userImage: {
        height: '100%',
        aspectRatio: 1 / 1
    },
    userName: {
        fontSize: 40,
        textAlign: 'center'
    },
    roleName: {
        marginTop: 10,
        textAlign: 'center'
    },
    inputLine: {
        marginTop: 20
    },
    inputLabel: {
        marginBottom: 5,
        fontSize: 16
    },
    cameraIcon: {
        position: 'absolute',
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 100,
        right: 10,
        bottom: 10
    }
})