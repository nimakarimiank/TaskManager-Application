import './App.css';
import {useState} from 'react';
import './views/Task/Taskpage.js';
import TaskPage from './views/Task/Taskpage.js';
function App() {
  document.title='Task Manager WebApp';
  return (
    <div className="">
        <TaskPage/>
    </div>
  );
}


export default App;
