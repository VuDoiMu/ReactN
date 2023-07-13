import { StyleSheet } from 'react-native';
import color from './../../contains/color';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: color.white,
        marginBottom: 10,
        padding: 5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: color.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    even: {
        backgroundColor: color.green
    },
    number:{
        fontSize: 16,
        fontWeight: '700',
        color: color.white
    },
    content: {
        width: '80%',
        fontSize: 16
    }
})

export default styles;