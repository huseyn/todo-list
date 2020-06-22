import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddNote = () => {

    const [text, setText] = useState('');

    const onSubmit = () => {
        if (text === '') {
            M.toast({ html: 'Please enter note' });
        } else {
            console.log(text);
            setText('');
        }
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

export default AddNote;