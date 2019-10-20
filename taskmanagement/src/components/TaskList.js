import React, { Component } from 'react';

class TaskList extends Component {
    /**
    * When user clicked the checkbox, the value will be passed to parent component.
    * index: get from task list component, index of task list which completed flag to be modified
    */
    handleChecked(index) {
        this.props.handleCompleteTask(index);
    }

    render() {
        return (
            <ul>
                {
                    this.props.task_list.map((task, index) => {
                        if ((index + 1) <= this.props.num_of_tasks_shown)
                            return (

                                < li key={task.id} className="task_list">
                                    <input type="checkbox" onClick={() => this.handleChecked(index)} /> &nbsp;
                                        {index + 1}. {task.details}
                                    {console.log(task)}
                                </li>

                            );
                        return <div key={task.id} />
                    })
                }
            </ul>
        );
    }
}
export default TaskList