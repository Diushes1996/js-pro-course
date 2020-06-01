import React from 'react';
import { TodoItem } from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
};

export class TodoList extends React.Component {
    render() {
        return (
            <ul style={styles.ul}>
                {this.props.todos.map((todo, index) => {
                    return <TodoItem todo={todo} key={todo.id} index={index} onChange={this.props.onChange} />
                })}
            </ul>
        );
    };
};