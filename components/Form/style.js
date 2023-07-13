import { StyleSheet } from "react-native";
import color from './../../contains/color';

const styles = StyleSheet.create({
    addTask: {
        bottom: 15,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: color.white,
        borderRadius: 20,
        borderColor: color.primary,
        borderWidth: 1.5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: color.text
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: color.primary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: color.background
    },
    icon: {
        fontSize: 30,
        color: color.white,
        fontWeight: 'bold'
    }
})

export default styles;