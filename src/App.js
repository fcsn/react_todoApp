import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "일하기"},
        {id: 1, text: "놀기"},
        {id: 2, text: "잠자기"}
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    console.log("Todo Added; ", todoText);
  }

  removeTodo(id) {
    console.log("removing; ", id);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header/>
          <TodoInput todoText="" addTodo={this.addTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
