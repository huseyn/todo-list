import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


const EditNoteModal = () => {

    const [text, setText] = useState('');

    const onSubmit = () => {
        if (text === '') {
            M.toast({ html: 'Please enter note' });
        } else {
            console.log(text);
        }
        setText('');
    }

    return (
        <div id="edit-note-modal" className="modal" style={modalStyle}>
            <div className='modal-content'>
                <h4>Edit Note</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='text'
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        <label htmlFor='text' className='active'>
                            Note
                        </label>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    onClick={onSubmit}
                    className='modal-close waves-effect waves-green btn-flat'
                >
                    Enter
                 </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default EditNoteModal;
