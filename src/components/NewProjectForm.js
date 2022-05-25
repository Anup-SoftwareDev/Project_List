import { useState } from "react"

const NewProjectForm = ({addProject}) => {
  
    const [formData, setFormData] = useState({name: "",description: ""})

   

    const formChange = (e) =>{
        console.log(e.target.value);
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addProject({name:formData.name, description:formData.description})
    }
    return(
    <div className = "newprojform">    
        <h1>New Project Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input id = "textInput" type = "text" name = "name" value = {formData.name} onChange = {formChange}/>
            <label>Description</label>
            <input id = "textInput" type = "text" name = "description" onChange = {formChange} value = {formData.description}/>
            <input id = "submit" type = 'submit' value = 'post'/>
        </form>
    </div>
    )

}

export default NewProjectForm