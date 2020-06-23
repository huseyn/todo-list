import React from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteNote} from '../../actions/noteActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const NoteItem = ({ note, deleteNote }) => {

    const onDelete = () => {
        deleteNote(note.id);
        M.toast({html:'Note deleted'});
    }

    return (
        <li className="collection-item">
            <div>
                <label>
                    <input
                        type="checkbox" />
                    <span>
                        {note.text}
                    </span>
                </label>
                <br />
                <span className="grey-text">
                    <Moment format='MMMM Do YYYY, h:mm:ss a'>{note.date}</Moment>
                </span>
                <a href="#!" onClick= {onDelete} className="secondary-content">
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
    note: PropTypes.object.isRequired,
    deleteNote: PropTypes.func.isRequired
}

export default connect(null, {deleteNote})(NoteItem);
