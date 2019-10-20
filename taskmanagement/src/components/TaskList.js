import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.task_list.map((task, index) => (
                        <React.Fragment key={task.id}>
                            < li key={task.id} id="task_list_task" >
                                <input type="checkbox" id="task_checkbox" /> &nbsp;
                                        {index + 1}. {task.details}
                            </li>
                        </React.Fragment>
                    ))
                }
            </ul>
        );
    }
}
export default TaskList