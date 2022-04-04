import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    signUpContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    },
    bgImage: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        zIndex: 0,
    },
    logoHolder: {
        flex: 1,
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signUpForm: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        zIndex: 10,
        shadowColor: '#d3d3d3',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        paddingHorizontal: 30,
        paddingTop: 30,
        maxWidth: 500
    },
    signFormRow: {
        width: '100%'
    },
    logoImageHolder: {
        width: '100%',
        height: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    logoImage: {
        width: '100%',
        height: '100%',
        maxWidth: 150,
        aspectRatio: 1 / 1
    },
    logoTextHolder: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#d3d3d3'
    },
    logoText: {
        fontSize: 20,
    },
    logoTextColor: {
        color: '#0A54FF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    signUpTitle: {
        width: '100%',
        fontSize: 36,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    foretPasswordHolder: {
        width: '100%',
        marginTop: 10,
    },
    foretPassword: {
        color: '#EC0B43',
        textAlign: 'right',
        width: '100%'
    },

    signUpLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    signUpButton: {
        fontWeight: 'bold',
        color: '#0A54FF',
        marginLeft: 5
    }
});

export { styles };