import React, { Component } from 'react';
import { saveList } from '../actions';
import { connect } from 'react-redux';

class Form extends Component {
	
	constructor(props){
		super(props);

		this.state = { entered: ''};
		this.handleFormEvent = this.handleFormEvent.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleFormEvent(event){
		this.setState({entered: event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.saveList(this.state.entered);
		this.setState({entered: ''});
	}

	render(){
		return(
			<div className="to-do-add">
				<h3 className="title">To do Application </h3>
				<form
					className="form"
					onSubmit={this.handleSubmit}
				>
					<div className="form-group">
						<label>Add Your To Do list:</label>
						<input 
							className="form-control"
							placeholder="Something To Do"
							value={this.state.entered}
							onChange={this.handleFormEvent}
						/>	
						<button className="btn btn-primary" type="submit">
							<ion-icon name="add"></ion-icon> Add
						</button>
					</div>
				</form>
			</div>
		);
	}

}

export default connect(null, {saveList})(Form);