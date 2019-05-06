import React from 'react';
import styles from './NotesList.module.css';

function NotesListItem({text}) {
    return (
        <li>{text}</li>
    );
}

export default function NotesList({notes, className}) {
    const items = notes.map(note => <NotesListItem text={note.title}/>);
    // how do we combine styles?
    // console.log(props.className);
    // console.log(styles.list);
    return (
        <ul className={`${className} ${styles.list}`}>
            {items}
        </ul>
    );
}