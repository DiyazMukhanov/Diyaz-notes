import React, {useReducer, useState} from 'react';
import {noteItem} from "../types/types";

const NotesContext = React.createContext({
    notes: [
        {
            title: 'Заметка 1',
            id: 1,
            text: 'Text 1 imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
        },
        {
            title: 'Заметка 2',
            id: 2,
            text: 'Text 2 scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
        }
    ],
    createNote: (note: any) => {},
    deleteNote: (id: number) => {}
});

const defaultNotesState = {
    notes: []
};

const notesReducer = (state:any, action:any) => {
    if(action.type === 'CREATE') {
       const updatedNotes = state.notes.concat(action.note);
       return {
           notes: updatedNotes
       };

    }
  return defaultNotesState;
}

export const NotesProvider = (props:any) => {
    const [notesState, dispatchNotesAction] = useReducer(notesReducer, defaultNotesState);

    type NotesContext = {
        notes: noteItem[],
        createNote: any,
        deleteNote: any
    };

    const notes:noteItem[] = notesState.notes;

    const createNote = (note: noteItem):void => {
        dispatchNotesAction({type: 'CREATE', note: note });
    };

    const deleteNote = (id: number):void => {
        dispatchNotesAction({type: 'DELETE', id: id});
    }

    const notesContext:NotesContext = {
        notes: notes,
        createNote: createNote,
        deleteNote: deleteNote
    }

    return <NotesContext.Provider value={notesContext}>
        {props.children}
    </NotesContext.Provider>
};

export default NotesContext;