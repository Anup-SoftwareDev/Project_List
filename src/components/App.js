import React, {useEffect, useState} from 'react';
import NewProjectForm from './NewProjectForm';
import Name from './Name';
import ProjectList from './ProjectList';
import './style.css';



const App = () => {
const initalProjects = [{id: 1, name: "Portfolio",description: "Personal branding"},{id: 2, name: "Terminal App",description: "Ruby Coding"}]
const [projects, setProjects] = useState([])

const addProject = (data) => {
 const newProject ={
   id: projects[projects.length-1].id + 1,
   name: data.name,
   description: data.description
 }
 console.log(newProject)
 setProjects((projects)=>[...projects, newProject]);
}

useEffect(()=>{

    setProjects(initalProjects);
 
  
},[])//  eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>My Projects</h1> 
      <div className='style' >
          <Name/>
          <NewProjectForm addProject = {addProject}/>
          <ProjectList projects = {projects}/>
      </div>
    </div>
  )
}

export default App
