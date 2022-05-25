const Project = ({project}) => {
  
    return(
    <div id = "project">
        <>{console.log(project.name)}</>
        <h2>{project.id}.{project.name}</h2>
        <h2>{project.description}</h2>
    </div>
    )

}

export default Project