import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);  ////App.js 에서 받아온 removeTodo
    console.log(this.props.todo);
  }

  render() {
    return(
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>remove</button>
      </div>
    );
  }
}
