import React,{useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext';

export default function EditTask() {
    const {dispatch,task,resetTask} = useContext(TaskContext)
    const [title,setTitle] = useState(task.title)
    const handleChange = (e)=>
    {
        setTitle(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newTask = {title:title,id:task.id}
        dispatch({type:"UPDATE_TASK",payload:newTask})
        console.log(newTask)
        resetTask();
    }

    return (
        <>
            <h1 className="text-center display-4 text-muted">Edit Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" onChange={handleChange} value={title} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Task" className=" btn btn-success btn-block" />
                </div>
            </form> 
        </>
    )
}
