import React,{useContext} from 'react'
import {TaskContext} from '../context/TaskContext';
import EditTask from './EditTask';



export default function Tasks() {
    const {tasks,dispatch,editTask,task} = useContext(TaskContext)
    return (
       <>
            <h1 className="text-center display-4">Tasks List</h1>
            {task ? <EditTask /> :''}
            <ul className="list-unstyled">
                {tasks.map((item)=>{
                    return(<li className="py-3 my-1 border px-2" key={item.id}> 
                                {item.title}
                                <button className="float-right btn btn-info mx-2" onClick={()=>editTask(item.id)}>Edit Task</button>
                                <button className="float-right btn btn-danger mx-2" onClick={()=>dispatch({type:"DELETE_TASK",payload:item.id})}>Delete Task</button>
                            </li>)
                })}
                
            </ul>
       </>
    )
}
