import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
	deleteProject(id){
		this.props.onDelete(id);
	}
	render(){
		let projectItems;
		if(this.props.projects){
			projectItems = this.props.projects.map(project => {
			// console.log(project);
		// });
		// }
				return (
					<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
					);
			});
		}
		return (
		 <div className="Projects">
		 <h3 className="text-center"> Projects in Progress</h3>
		 	{projectItems}
      	 </div>
      	);
	}
}
Projects.propTypes = {					//this servers as a validation to make sure it's correct as an array
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}


export default Projects;
	

	