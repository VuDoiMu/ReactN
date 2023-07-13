import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';

import styles from './App.components.style';
import Task from "./components/Task";
import Form from "./components/Form";
import { Alert } from 'react-native';

export default function App() {
    const [taskList, setTaskList] = useState([])
    const handleAddTask = (input) => {
        setTaskList([...taskList, input])
    }

    const handleDeleteTask = (index) => {
        Alert.alert(
            'Notification!',
            'Delete this task?',
            [
                {
                    text: 'OK',
                    onPress: () => {
                        let taskListTemp = [...taskList];
                        taskListTemp.splice(index, 1);
                        setTaskList(taskListTemp);
                    },
                },
                {
                    text: 'Cancel', 
                    onPress: () => {}
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.headerText}>
                    To Do List
                </Text>
                <ScrollView style={styles.list}>
                    {
                        taskList.map((item , index) => {
                            return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
                        })
                    }
                </ScrollView>
            </View>
            <Form onAddTask={handleAddTask}/>
        </View>
    )
}
