import React, { Component } from 'react';

import TaskList from './TaskList.jsx';
import Form from './Form.jsx';

export default class App extends Component {
	
	render() {
		return (
			<div className="container">
				<header>
					<h1>Todo List</h1>
					
					<Form />
				</header>
				
				<TaskList />
			</div>
		);
	}
}
