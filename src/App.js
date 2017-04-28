import React, { Component } from 'react';
import { Link } from "react-router";
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import request from 'request-promise';
import moment from 'moment';
import './App.css';

//Main app component that acts as a placeholder for all Components. It holds everything including the list
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "Welcome",
      projects: []
    }
    this.loadProject = this.loadProject.bind(this);
}
//function that loads our list from the server
 loadProject(){
  request('http://localhost:3000/get/all').then(projects =>this.setState({ projects: JSON.parse(projects) }));
  }
 
//
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
    this.loadProject();
  }

handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
  let {date} = this.props;
  request('http://localhost:3000/update/' + date + '/' + project).then(response =>{
    console.log('updated');
  })

}

 
 
 handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);  //this looks through all projects and find all ids and match to current id; if matches puts it into index
    projects.splice(index, 1);
    this.setState({projects:projects});
    let deleteProject = id.target.value;
    request('http://localhost:3000/remove/' + deleteProject).then(resp => {
      console.log('removed');
  })
    // this.loadList();
    
  }

  render() {
    setTimeout(() => {
      this.setState({title: "Welcome To Orion Project Manager"});
    }, 2000)
    let {date, project} = this.props
    let now = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    let {projects} = this.state;
    const {location} = this.props;
    const containerStyle = {
      marginTop: "60px",
      color: 141823,
    };


    return (
     // <div className="App">
     <div> 
     <Nav location={location} />

     <div class="container" style={containerStyle}>
     <div class="row">
     <div class="col-lg-12">
     <h1></h1>

     {this.props.children}
        <div>
          <Header title={this.state.title} />
        </div>
          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

           <h5 className="text-center">Today's time: {now}</h5>
      </div>
      </div>
      </div>

          <Footer />
      
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