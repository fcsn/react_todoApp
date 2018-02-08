import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'


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

  addTodo(todoText) {   //todoText는 이 메소드의 인자일 뿐.
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
          <ul>
          {/*todos라는 배열을 map 함수를 통해 todo라는 todos배열의 요소를 처리. todo는 todos배열의 인자(들)*/}
            {this.state.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
            })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
