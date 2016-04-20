import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
	
	constructor() {
		super();
		this.textTaskClassName = 'text';
		this.inputTaskClassName = 'hidden';
	}
	
	render(){
		
		const taskClassName = this.props.task.checked ? 'checked' : '';
		
		return (
			<li className={taskClassName}>
				<button  className="delete" onClick={this.deleteThisTask.bind(this)}>
					&times;
				</button>
				
				<input 
				 type="checkbox" 
				 readOnly 
				 checked={this.props.task.checked} 
				 onClick={this.toggleChecked.bind(this)} 
				/>
				
				<input className={this.inputTaskClassName} type="text" ref="inputTask"
					onBlur={this.updateTask.bind(this)}
				 />
				 
				<span className={this.textTaskClassName} ref="textTask"
					onClick={this.editTask.bind(this)}
				>
					{this.props.task.text}
				</span>
			</li>
		);
	}
	
	updateTask() {
		const text = ReactDOM.findDOMNode(this.refs.inputTask).value;
		
		Tasks.update(this.props.task._id, {
			$set: { text: text }	
		});
		
		ReactDOM.findDOMNode(this.refs.inputTask).value = '';
		
		ReactDOM.findDOMNode(this.refs.textTask).className = 'text';
		ReactDOM.findDOMNode(this.refs.inputTask).className = 'hidden';
	}
	
	editTask() {
		if (!this.props.task.checked) {
			ReactDOM.findDOMNode(this.refs.textTask).className = 'hidden';
			ReactDOM.findDOMNode(this.refs.inputTask).className = '';
			
			ReactDOM.findDOMNode(this.refs.inputTask)
				.value = ReactDOM.findDOMNode(this.refs.textTask).textContent;
			ReactDOM.findDOMNode(this.refs.inputTask).focus();	
		}
	}
	
	toggleChecked() {
		Tasks.update(this.props.task._id, {
			$set: { checked: !this.props.task.checked }	
		});
	}
	
	deleteThisTask() {
		Tasks.remove(this.props.task._id);
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired
};

