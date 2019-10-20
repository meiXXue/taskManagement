import React, { Component } from 'react';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class TaskApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num_of_tasks_shown: 5,
            num_of_tasks_shown_max: 5,
            task_list: [
                {
                    id: 1,
                    details: "task1",
                    completed: false
                },
                {
                    id: 2,
                    details: "task2",
                    completed: false
                },
                {
                    id: 3,
                    details: "task3",
                    completed: false
                },
                {
                    id: 4,
                    details: "task4",
                    completed: false
                },
                {
                    id: 5,
                    details: "task5",
                    completed: false
                },
                {
                    id: 6,
                    details: "task6",
                    completed: false
                },
                {
                    id: 7,
                    details: "task7",
                    completed: false
                },
                {
                    id: 8,
                    details: "task8",
                    completed: false
                },
                {
                    id: 9,
                    details: "task9",
                    completed: false
                },
                {
                    id: 10,
                    details: "task10",
                    completed: false
                },
                {
                    id: 11,
                    details: "task11",
                    completed: false
                },
                {
                    id: 12,
                    details: "task12",
                    completed: false
                }

            ],
            current_content: '',
            reached_the_end: false
        };
        this.handleCompleteTask = this.handleCompleteTask.bind(this);
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
        let reach_end = num_of_tasks_shown_temp === this.state.task_list.length ? true : false;
        this.setState({
            num_of_tasks_shown: num_of_tasks_shown_temp,
            num_of_tasks_shown_max: this.state.num_of_tasks_shown_max + 5,
            reached_the_end: reach_end
        });
    }

    /**
    * When user clicks show less, the number of hidden tasks to be shown depends on how many tasks left to be shown.
    * The number of tasks to be shown will be maximum number of tasks to be shown minus five (since the current number of tasks will be greater than maximum number of tasks to be shown minus five, I set the next state of current number of tasks to be multiple of 5).
    * The maximum number of tasks to be shown will be decreased by five.
    */
    handleShowLess = () => {
        let num_of_tasks_shown_temp = this.state.num_of_tasks_shown_max - 5;
        let reach_end = num_of_tasks_shown_temp === 5 ? false : true;
        this.setState({
            num_of_tasks_shown: num_of_tasks_shown_temp,
            num_of_tasks_shown_max: this.state.num_of_tasks_shown_max - 5,
            reached_the_end: reach_end
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
                <TaskList
                    handleCompleteTask={this.handleCompleteTask.bind(this)}
                    {...this.state}
                />
                {
                    !this.state.reached_the_end ?
                        <Button variant="light" onClick={this.handleShowMore}>Show More</Button>
                        :
                        <Button variant="light" onClick={this.handleShowLess}>Show Less</Button>
                }

            </div >
        );
    }
}

export default TaskApp;
