import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Tasks } from '../api/tasks.js';

export default class Form extends Component {
	
	render() {
		return (
			<form className="new-task" onSubmit={ this.handleSubmit.bind(this) } >
				<input type="text" ref="textInput" placeholder="Type to add new tasks" />
			</form>
		);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		
		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
		
		Tasks.insert({ text: text, createdAt: new Date() });
		
		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}
}