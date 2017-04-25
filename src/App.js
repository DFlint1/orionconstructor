import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "Welcome",
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
     {
        id:uuid.v4(),
        title: 'Users',
        category: 'Contacts List'
      },
      {
        id:uuid.v4(),
        title: 'Action Items',
        category: 'Project Manager App'
      },
      {
        id:uuid.v4(),
        title: 'Blog',
        category: 'Orion Library'
      }
     ]});
  }

handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}
 
 handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);  //this looks through all projects and find all ids and match to current id; if matches puts it into index
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    setTimeout(() => {
      this.setState({title: "Welcome To Orion Project Manager"});
    }, 2000);


    return (
     <div className="App"> 
        <div>
          <Header title={this.state.title} />
        </div>
          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}
// var ReactDOM = require("react-dom");
// //Grabs the Routes
// var routes = require("./config/routes");

// // Renders the contents according to the route page
// // Displays the contents in the div app of index.html
// // Note how ReactDOM takes in two parameters (the contents and the location)
// ReactDOM.render(routes, document.getElementById("app"));

// export default App; //need this if you don't have export default on line 9
// module.exports App;