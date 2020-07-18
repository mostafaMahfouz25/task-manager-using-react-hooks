import React,{useReducer,createContext,useEffect,useState} from 'react';
import {TaskReducer} from '../reducers/TaskReducer';

export const TaskContext = createContext();

export const TaskContextProvider = (props)=>{

    const [tasks,dispatch] = useReducer(TaskReducer,JSON.parse(localStorage.getItem('tasks'))||[]);
    const [task,setTask] = useState(false);

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

    const editTask = async (id)=>
    {
        setTask(null)
        const task = await tasks.find((item)=>item.id == id)
        setTask(task);
    }

    const resetTask = ()=>{
        setTask(false)
    }

    return(
        <TaskContext.Provider value={{tasks,dispatch,task,editTask,resetTask}}>
            {props.children}
        </TaskContext.Provider>
    )
 


}