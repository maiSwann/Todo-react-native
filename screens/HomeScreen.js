import React, { useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, TextInput, Button, Keyboard } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <BouncyCheckbox
                iconStyle={{ borderColor: "#C4C4C4" }}
                fillColor="#C4C4C4"
                text={props.text}
                textStyle={{ color: "#343434", fontSize: 16 }}
            />
        </View>
    )
}

const HomeScreen = ({navigation}) => {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        // put everything that was already in taskItems as a new array and then appens the new task
        if (task != null) {
            setTaskItems([...taskItems, task])
            // set to null so addTaskWrapper is null
            setTask(null);
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
            <Image
                style={{ width: 50, height: 50 }}
                source={require('./../assets/logo.png')}
            >
            </Image>),
            headerRight: () => (
            <TouchableOpacity
                style={styles.burgerButton}
                onPress={() => navigation.navigate('SideMenuScreen')}
            >
                <Image
                    style={styles.burgerImg}
                    source={require('./../assets/burger.png')}
                />
            </TouchableOpacity>
            )
        })
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.tasks}>
                <Text style={styles.listTitleText}>Todo</Text>
                {
                    taskItems.map((item, index) => {
                        return <Task key={index} text={item}/>
                    })
                }
            </View>
            {/* Write a task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.addTaskWrapper}
            >
                <TextInput
                    style={styles.addTaskInput}
                    placeholder={"Add a task"}
                    placeholderTextColor="#CEE5D0"
                    value={task}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => handleAddTask()}
                >
                    <Image
                        style={styles.plusButtonImg}
                        source={require('./../assets/signe-plus.png')}
                    />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    tasks: {
        top: 60
    },
    taskContainer: {
        marginBottom: -15,
        padding: 27,
        paddingTop: 10
    },
    listTitleText: {
        color: "#343434",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 15,
        marginLeft: 32
    },
    addTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    addTaskInput: {
        paddingVertical: 15,
        paddingLeft: 13,
        width: 250,
        borderColor: "#CEE5D0",
        borderWidth: 1,
        borderRadius: 15,
    },
    plusButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusButtonImg: {
        height: 55,
        width: 55
    },
    burgerButton: {
        bottom: 10,
    },
    burgerImg: {
        height: 55,
        width: 55
    },
});

export default HomeScreen
