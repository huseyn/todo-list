import React from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types'

const NoteItem = ({ note }) => {
    return (
        <li className="collection-item">
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={note.isCompleted} />
                    <span>
                        {note.text}
                    </span>
                </label>
                <br />
                <span className="grey-text">
                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{note.date}</Moment>
                </span>
                <a href="#delete-note-modal" className="secondary-content">
                    <span className="material-icons">
                        delete
                    </span>
                </a>
                <a href="#edit-note-modal" className="secondary-content">
                    <span className="material-icons">
                        edit
                    </span>
                </a>
            </div></li>
    )
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}

export default NoteItem
