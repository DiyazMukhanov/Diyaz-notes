import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import Search from "./components/search";
import WorkSpace from "./components/workspace/workspace";
import {NotesProvider} from "./store/notes-context";


function App() {

  return (
    <div className="App">
        <NotesProvider>
        <Search></Search>
          <div className="main">
              <Sidebar></Sidebar>
              <WorkSpace></WorkSpace>
          </div>
        </NotesProvider>
    </div>
  );
}

export default App;
