import React, { Component } from 'react';

import TaskList from './TaskList.jsx';
import Form from './Form.jsx';

export default class App extends Component {
	constructor() {
		super();
		
		this.state = {
			hideCompleted: false	
		};
	}
	
	
	render() {
		return (
			<div className="container">
				<header>
					<h1>Todo List</h1>
					
					<label className="hide-completed">
						<input 
							type="checkbox"
							readOnly
							checked={this.state.hideCompleted}
							onClick={this.toggleHideCompleted.bind(this)}
						/>
						Hide Completed Tasks
					</label>
					
					<Form />
				</header>
				
				<TaskList hideCompleted={this.state.hideCompleted} />
			</div>
		);
	}
	
	toggleHideCompleted() {
		this.setState({
			hideCompleted: !this.state.hideCompleted
		});
	}
}
