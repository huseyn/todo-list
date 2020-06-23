import React, { useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import  {addNote} from '../../actions/noteActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddNote = ({addNote}) => {

    const [text, setText] = useState('');

    const onSubmit = () => {
        if (text === '') {
            M.toast({ html: 'Please enter note' });
        } else {
            const newNote = {
                text, 
                isCompleted:false,
                date:new Date()
            }

            addNote(newNote);

            M.toast({html: 'Note added'});
        }
        setText('');
    }

    return (
        <div className="row">
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <input
                        className="materialize-textarea"
                        name='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                onSubmit();
                            }
                        }} />
                </div>
            </div>
        </div>
    )
}

AddNote.propTypes ={ 
    addNote:PropTypes.func.isRequired
}

export default connect(null,{addNote}) (AddNote);