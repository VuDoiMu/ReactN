import { View, Text, TextInput } from 'react-native'
import React , { useState }from 'react'

import styles from './style'
import { TouchableOpacity } from 'react-native'
import { KeyboardAvoidingView, Keyboard } from 'react-native'
import { Platform } from 'react-native'

 const  Form = (props) => {
    const [input, setInput] = useState('')
    const handleAddTask = () => {
        if(input.length === 0) {
            alert('Please enter a task!')
            return false;
        }
        props.onAddTask(input);
        setInput('')
        Keyboard.dismiss();
    }
    return (
        <KeyboardAvoidingView 
        behavior = {Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset = {10}
        style={styles.addTask}>
            <TextInput 
            value = {input}
            placeholder="Your Task" 
            onChangeText={(text) => setInput(text)}
            style={styles.input} 
            />
            <TouchableOpacity 
            onPress={handleAddTask}
            style={styles.button}>
                <Text style={styles.icon}>+</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form;