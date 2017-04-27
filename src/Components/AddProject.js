import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import request from 'request-promise';
// import moment from 'moment';
import uuid from 'uuid';

const styles = {
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  },
  placeholder: {
    borderTop: '1.5px solid black',
    padding: '5px',
    marginBottom: '0.5%',
    width: '100%'
  },
  textRight: {
    textAlign: 'right'
  },
  smallMargin: {
    marginBottom: '0',
    marginTop: '0'
  }
}



class AddProject extends Component {
	constructor(){
		super();
		this.state = {
			newProject:{}
		}
	}
	
	static defaultProps = {
    categories: ['Contacts List', 'Project Manager App', 'Orion Library']
  }
	
	handleSubmit(e){
		if(this.refs.title.value === ''){
			alert('Title is required');
		} else {
			this.setState({newProject:{
				id:uuid.v4(),
				title: this.refs.title.value,
				category: this.refs.category.value
			}}, function(){
				// console.log(this.state);
				this.props.addProject(this.state.newProject);
			});
		}
		e.preventDefault();
	}

	render() {
    let categoryOptions = this.props.categories.map(category => {
	      return <option key={category} value={category}>{category}</option>
    });
    return (
			<div>
				<h3 className="text-center">Project Tracker</h3>
				<form style={styles.center} className="input-group" onSubmit={this.handleSubmit.bind(this)}>
				<div>
				<label>Title</label><br />
				<input type="text" ref="title" />
				</div>
				<div>
				<label>Category</label><br />
				<select ref="category">
				{categoryOptions}
				</select>
				</div>
				<br />
				<input type="submit" value="Add Project" />
				<br />
				</form>
			</div>
			);
	}
}	

AddProject.propTypes = {	//adding validation
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;