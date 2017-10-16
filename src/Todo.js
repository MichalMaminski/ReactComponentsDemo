import React, { Component } from 'react'

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            todoValue: ""
        }
    }

    addTodo(e) {

        if (this.state.todoValue) {
            this.setState((prev, props) => {

                prev.todos.push(this.state.todoValue);
                return { todos: prev.todos };
            });
        }

    }

    updateInputState(e) {
        this.setState({ todoValue: e.target.value });
    }

    render() {
        return (
            <div>
                <p>{this.state.todos.length === 0 ? "Add your first TODO" : "Your todos"}</p>
                <ul>
                    {this.state.todos.map((todo, index) =>
                        <li key={index}>{todo}</li>)}
                </ul>
                <div>
                    <input type="text" onChange={(e) => this.updateInputState(e)} value={this.state.todoValue} />
                    <input type="button" value="add new todo" onClick={(e) => this.addTodo(e)} />
                </div>
            </div>
        );
    }
}

export default Todo;