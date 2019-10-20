import React, { Component } from 'react';
import TaskList from './TaskList';
import uuid from "uuid";

class TaskApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num_of_tasks_shown: 0,
            num_of_tasks_shown_max: 5,
            task_list: [],
            current_content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * When user input of task changed, the current content will be set as the user input
     * e: event triggered by user
    **/
    handleChange(e) {
        this.setState({ current_content: e.target.value });
    }

    /**
     * When user submit the task changed, a new task with id (sequentially increased with the length of task list),
     * completed flag default as false, and details from current content will be added into task list.
     * Number of tasks to be shown will increase by 1 if it did not exceed the maximum number of tasks that can be rendered.
     * Current content will be reset to empty and wait for a new user input.
     * e: event triggered by user
    **/
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.current_content.length) {
            return;
        }
        const newTask = {
            details: this.state.current_content,
            id: this.state.task_list.length + 1,
            completed: false
        };
        let num_of_tasks_shown_temp = this.state.num_of_tasks_shown;
        if (this.state.task_list.length < this.state.num_of_tasks_shown_max) {
            num_of_tasks_shown_temp += 1;
        }
        this.setState({
            task: this.state.task_list.push(newTask),
            current_content: '',
            num_of_tasks_shown: num_of_tasks_shown_temp
        });
    }

    render() {
        return (
            <div>
                <h3>Task Management</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Enter the next task:</p>
                    <input
                        id="new_task"
                        onChange={this.handleChange}
                        value={this.state.current_content}
                    />
                    <button>
                        Add #{this.state.task_list.length + 1}
                    </button>
                </form>
                <TaskList
                    {...this.state}
                />
            </div >
        );
    }
}

export default TaskApp;
