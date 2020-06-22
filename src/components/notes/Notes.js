import React, { useState, useEffect } from 'react'
import NoteItem from './NoteItem';
import PreLoader from '../layout/PreLoader';

const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const getNotes = async () => {
        setLoading(true);
        const res = await fetch('/notes');
        const data = await res.json();

        setNotes(data);
        setLoading(false);
    }

    if (loading) {
        return <PreLoader />
    }

    return (
        <ul className="collection with-header">
            {!loading && notes.length === 0 ? (<p className="center">No notes to show</p>) : (
                notes.map(note => <NoteItem key={note.id} note={note} />
                )
            )}
        </ul>
    )
}

export default Notes;