import React, { Children } from "react";
import { Image, View } from "react-native-elements";

const UserImage = ({ children }) => {
    return (
        <>
            {children ? children : (
                <Image
                    source={require("../../assets/icon.png")}
                    style={{
                        height: '100%',
                        aspectRatio: 1 / 1
                    }}
                />
            )}
        </>
    )
}

export default UserImage;