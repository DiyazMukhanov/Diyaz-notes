import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import Search from "./components/search";
import WorkSpace from "./components/workspace/workspace";
import {NotesProvider} from "./store/notes-context";


function App() {
  // const notes: noteProps[] = [
  //     {
  //         title: 'Заметка 1',
  //         text: 'Text 1 imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
  //     },
  //     {
  //         title: 'Заметка 2',
  //         text: 'Text 2 scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
  //     }
  // ]

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
