import Project from './Project'

const ProjectList = ({projects}) => {
    return(
    <div className="projectlist">
        <h1>ProjectList</h1>
        {console.log(projects)}
        {projects.map((project)=>
        <Project key = {project.id} project = {project}/>)}
    </div>
    )

}

export default ProjectList