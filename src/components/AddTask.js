import React,{useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext';
import Tasks from './Tasks';
import EditTask from './EditTask';

export default function AddTask() {
    const {dispatch} = useContext(TaskContext)
    const [title,setTitle] = useState('')
    const handleChange = (e)=>
    {
        setTitle(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newTask = {title:title,id:Math.floor(Math.random() * 1000000)}
        dispatch({type:"ADD_TASK",payload:newTask})
        setTitle('');
    }

    return (
        <>
            <h1 className="text-center display-4 text-muted">Add  New Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" onChange={handleChange} value={title} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Task" className=" btn btn-success btn-block" />
                </div>
            </form> 

        </>
    )
}
