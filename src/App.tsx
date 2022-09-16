import React, { useState } from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import Search from "./components/search";
import WorkSpace from "./components/workspace/workspace";
import {NotesProvider} from "./store/notes-context";

function App() {
    const [isSideOpen, setSideOpen] = useState(false)
    const openSideHandler:any = () => {
        setSideOpen(true)
    }
    const closeSideHandler:any = () => {
        setSideOpen(false)
    }

    const toggleSide:any = () => {
        setSideOpen(!isSideOpen)
    }


    return (
    <div className="App">
        <NotesProvider>
        <Search toggleSide={toggleSide}></Search>
          <div className="main">
               {isSideOpen && (<Sidebar openSideHandler={openSideHandler} closeSideHandler={closeSideHandler} isSideOpen={isSideOpen}/>)}
              <WorkSpace></WorkSpace>
          </div>
        </NotesProvider>
    </div>
  );
}

export default App;
