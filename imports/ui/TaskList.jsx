import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

class TaskList extends Component {
	
	renderTasks() {
		let filteredTasks = this.props.tasks;
		if (this.props.hideCompleted) {
			filteredTasks = filteredTasks.filter(task => !task.checked);
		}
		
		return filteredTasks.map((task) => (
			<Task key={task._id} task={task} />
		));
	}
	
	render() {
		return (
			<ul>
				{this.renderTasks()}
			</ul>
		);
	}
}

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired,
	hideCompleted: PropTypes.bool.isRequired	
};

export default createContainer(() => {
	return {
		tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
	};
}, TaskList);