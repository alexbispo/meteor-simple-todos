import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

class TaskList extends Component {
	
	renderTasks() {
		return this.props.tasks.map((task) => (
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
	tasks: PropTypes.array.isRequired	
};

export default createContainer(() => {
	return {
		tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
	};
}, TaskList);