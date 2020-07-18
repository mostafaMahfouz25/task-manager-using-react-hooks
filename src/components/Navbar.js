import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom';
import {TaskContext} from '../context/TaskContext';



export default function Navbar() {
    const {resetTask} = useContext(TaskContext)
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/" >Home</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/">Tasks</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add-task" onClick={()=>resetTask()} >Add New Task</NavLink>
                </li>
                </ul>
            </div>
        </nav>
    )
}
