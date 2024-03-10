import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {

    // Define the state variable with the initial tasks array
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    // Function to add a new task
    const addTask = (taskText) => {
        // Add the new task to the current list of tasks
        setTasks(currentTasks => [...currentTasks, taskText]);
    };


    return (
        <SafeAreaView style={styles.container}>
            <ToDoList tasks = { tasks }/>
            <ToDoForm onAddTask = { addTask }/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50, // Adjusted for visibility
    },
});

export default App;
// The App component is the main entry point for the application. It renders the ToDoList and ToDoForm components. The ToDoList component displays the list of tasks, and the ToDoForm component provides a form to add new tasks. The styles object is used to define the styles for the container.