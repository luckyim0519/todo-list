import React, {useState} from 'react';
import './App.css';
import {SafeAreaView,StyleSheet,KeyboardAvoidingView,Platform} from 'react-native';
import Greeting from './components/Greeting';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();
  console.log(today);

  const [todos, setTodos] = useState([
    {id: 1, text: 'Do HW for ece326', done: true},
    {id: 2, text: 'React project', done: false},
    {id: 3, text: 'Todo list', done: false},
  ]);

  const onInsert = text =>{
    //new id should be found
    // get the biggest id and add 1
    //if the list is empty, default id = 1 
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo=>todo.id)) +1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  return (
        <SafeAreaView edges={['bottom']} style={styles.block}>
          <Greeting name="Lucky"/>
          <KeyboardAvoidingView 
          behavior={Platform.select({ios: 'padding', android: undefined})} 
          style={styles.avoid}>
            <DateHead date={today}/>
            {todos.length === 0? <Empty /> : <TodoList todos = {todos}/>}
            
            <AddTodo onInsert={onInsert} />
          </KeyboardAvoidingView>          
        </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid:{
    flex: 1,
  },
});

export default App;
