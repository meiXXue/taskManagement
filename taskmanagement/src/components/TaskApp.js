import React, { Component } from 'react';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class TaskApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num_of_tasks_shown: 0,
            num_of_tasks_shown_max: 5,
            task_list: [],
            current_content: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCompleteTask = this.handleCompleteTask.bind(this);
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

    /**
     * When user clicks show more, the number of hidden tasks to be shown depends on how many tasks left to be shown.
     * If we have more than 5 tasks that haven't be rendered, then the number of tasks to be shown will be increased by 5.
     * If we have less than 5 tasks that haven't be rendered, then the number of tasks to be shown will be set as the length of the task list.
     * The maximum number of tasks to be shown will be increased by five.
     */
    handleShowMore = () => {
        let num_of_tasks_shown_temp =
            (this.state.num_of_tasks_shown + 5) > this.state.task_list.length ?
                this.state.task_list.length
                :
                (this.state.num_of_tasks_shown + 5);
        this.setState({
            num_of_tasks_shown: num_of_tasks_shown_temp,
            num_of_tasks_shown_max: this.state.num_of_tasks_shown_max + 5
        });
    }

    /**
    * When user clicks show less, the number of hidden tasks to be shown depends on how many takss left to be shown.
    * The number of tasks to be shown will be maximum number of tasks to be shown minus five (since the current number of tasks will be greater than maximum number of tasks to be shown minus five, I set the next state of current number of tasks to be multiple of 5).
    * The maximum number of tasks to be shown will be decreased by five.
    */
    handleShowLess = () => {
        let num_of_tasks_shown_temp = this.state.num_of_tasks_shown_max - 5;
        this.setState({
            num_of_tasks_shown: num_of_tasks_shown_temp,
            num_of_tasks_shown_max: this.state.num_of_tasks_shown_max - 5
        });
    }

    /**
    * When user clicked the checkbox, the value will be set as the opposite value of the previous one.
    * index: get from task list component, index of task list which completed flag to be modified
    */
    handleCompleteTask = (index) => {
        let task_list_temp = this.state.task_list;
        task_list_temp[index].completed = !task_list_temp[index].completed;
        this.setState({
            task_list: task_list_temp
        });
    }

    render() {
        return (
            <div>
                <h3>Task Management</h3>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <p>Enter the next task:</p>
                    <input
                        id="new_task"
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.current_content}
                    /> &nbsp;
                    <Button variant="primary" onClick={(e) => this.handleSubmit(e)}>Add #{this.state.task_list.length + 1}</Button>
                </form>
                <TaskList
                    handleCompleteTask={this.handleCompleteTask.bind(this)}
                    {...this.state}
                />
                {
                    this.state.task_list.length > this.state.num_of_tasks_shown_max ?
                        <Button variant="light" onClick={this.handleShowMore}>Show More</Button>
                        :
                        <div />
                }
                &nbsp;
                {
                    this.state.task_list.length > 5 && this.state.num_of_tasks_shown > 5 ?
                        <Button variant="light" onClick={this.handleShowLess}>Show Less</Button>
                        :
                        <div />
                }

            </div >
        );
    }
}

export default TaskApp;
