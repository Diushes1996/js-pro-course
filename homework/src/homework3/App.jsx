import React from 'react';
import { TodoList } from './TodoList';
//import { Routing } from './Routing';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, completed: false, title: 'Купить хлеб' },
        { id: 1, completed: false, title: 'Купить масло' },
        { id: 2, completed: false, title: 'Купить молоко' }
      ]
    };
  };

  onChange(id) {
    return console.log('todo id', id);
  };

  render() {
    return (
      <div className="wrapper">
        <h1>React tutorial</h1>
        <TodoList todos={this.state.todos} onChange={this.onChange} />
      </div>
    );
  };
};