import { StyleSheet } from 'react-native'
import color from './contains/color';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: color.background
    },
    body: {
        flex: 1,
        marginTop: 25,
        padding: 20
    },
    headerText: {
        fontSize: 24,
        color: color.primary,
        fontWeight: 'bold'
    },
    list: {
        marginTop: 15
    }
   

})

export default styles;