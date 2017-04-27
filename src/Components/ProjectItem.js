import React, { Component } from 'react';
const styles = {
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  },
}

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li style={styles.center} className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {			//adding validation
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
	

  