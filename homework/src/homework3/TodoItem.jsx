import React from 'react';

export class TodoItem extends React.Component {
    onChange() {
        this.props.onChange(this.props.todo.id)
    };

    render() {
        return (
            <li>
                <span>
                    <input type="checkbox" onChange={() => this.onChange()} />
                    <strong>{this.props.index + 1}</strong>
                    {this.props.todo.title}
                </span>
                <button>X</button>
            </li>
        )
    };
};