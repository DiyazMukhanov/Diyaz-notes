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
    deleteNote: (id: number) => {},
    updateNote: (id: number, title: string, text: string) => {},
    searchNote: (title: string) => {},
    removeFoundNote: () => {},
    foundNote: {
        title: 'Заметка 2',
        id: 2,
        text: 'Text 2 scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
    }
});

const defaultNotesState = {
    notes: [{
        title: 'Ваши заметки с вами',
        id: 2,
        text: 'Создавайте заметки на ходу. Они всегда вместе с вами'
    }],
    foundNote: undefined
};

const notesReducer = (state:any, action:any) => {
    if(action.type === 'CREATE') {
        const updatedNotes = state.notes.concat(action.note);
        return {
            notes: updatedNotes
        };
    }

    if(action.type === 'DELETE') {
        const updatedNotes = state.notes.filter((note: { id: any; }) => note.id !== action.id);
        return {
            notes: updatedNotes
        }
    }
    if(action.type === 'UPDATE') {
        // const noteIndex = state.notes.findIndex((note: { id: any; }) => note.id === action.id);
        const notes = state.notes;
        const indexOfNote = notes.findIndex((note: { id: any; }) => note.id === action.id);
        notes[indexOfNote].title = action.title;
        notes[indexOfNote].text = action.text;
        // console.log(notes);

        return {
            notes: notes
        }
    }
    if(action.type === 'SEARCH') {
        const foundNote = action.foundNote;
        // console.log(foundNote);
        return {
            notes: state.notes,
            foundNote:foundNote
        }
    }

    if(action.type === 'REMOVE_FOUND') {
        return {
            notes: state.notes,
            foundNote: undefined
        }
    }
    return defaultNotesState;
}

export const NotesProvider = (props:any) => {
    const [notesState, dispatchNotesAction] = useReducer(notesReducer, defaultNotesState);

    type NotesContext = {
        notes: noteItem[],
        createNote: any,
        deleteNote: any,
        updateNote: any,
        searchNote: any,
        foundNote: noteItem,
        removeFoundNote: any
    };

    const notes:noteItem[] = notesState.notes;
    const foundNote:noteItem = notesState.foundNote;

    const createNote = (note: noteItem):void => {
        dispatchNotesAction({type: 'CREATE', note: note });
    };

    const deleteNote = (id: number):void => {
        dispatchNotesAction({type: 'DELETE', id: id});
    }

    const updateNote = (id:number, title:string, text:string) => {
        dispatchNotesAction({type: 'UPDATE', id: id, title: title, text: text});
    }

    const searchNote = (foundNote: noteItem) => {
        dispatchNotesAction({type: 'SEARCH', foundNote: foundNote});
    }

    const removeFoundNote = () => {
        dispatchNotesAction({type: 'REMOVE_FOUND'});
    }

    const notesContext:NotesContext = {
        notes: notes,
        createNote: createNote,
        deleteNote: deleteNote,
        updateNote: updateNote,
        searchNote: searchNote,
        foundNote: foundNote,
        removeFoundNote: removeFoundNote
    }

    return <NotesContext.Provider value={notesContext}>
        {props.children}
    </NotesContext.Provider>
};

export default NotesContext;