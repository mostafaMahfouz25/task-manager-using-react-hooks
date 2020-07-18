import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css';

// components 
import NavBar from './components/Navbar';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

// context  
import {TaskContextProvider} from './context/TaskContext';

function App() {
  return (
    <div className="app">
        <div className="overlay"></div>
        <BrowserRouter>
          <TaskContextProvider>
            <NavBar />
          <div className="container">
            <div className="row">
                <div className="col-10 mx-auto border py-2 my-3 cont-app">
                  <Switch>
                      <Route  exact path="/"   component={Tasks} />
                      <Route  path="/add-task" component={AddTask} /> 
                  </Switch>
              </div>
            </div>
          </div>
            </TaskContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
