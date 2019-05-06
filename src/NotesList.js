import React from 'react';
import styles from './NotesList.module.css';

function NotesListItem({id, text, handleClick}) {
    return (
        <li>
            <a 
                href='#' 
                onClick={(e) => {
                    e.preventDefault();
                    console.log(`you clicked`);
                    handleClick(id);
                }}
            >
                {text}
                </a>
            </li>
    );
}

export default function NotesList({notes, className, handleSelection}) {
    const items = notes.map(note => <NotesListItem id={note.id} text={note.title} handleClick={handleSelection}/>);
    // how do we combine styles?
    // console.log(props.className);
    // console.log(styles.list);
    return (
        <ul className={`${className} ${styles.list}`}>
            {items}
        </ul>
    );
}