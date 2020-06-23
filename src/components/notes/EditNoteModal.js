import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateNote } from "../../actions/noteActions";

const EditNoteModal = ({ current, updateNote }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (current) {
      setText(current.text);
    }
  },[current]);

  const onSubmit = () => {
    if (text === "") {
      M.toast({ html: "Please enter note" });
    } else {
      const updNote = {
          id: current.id,
          text,
          date: new Date()
      }

      updateNote(updNote);
      M.toast({html: 'Note updated'});
    }
    setText("");
  };

  return (
    <div id="edit-note-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Note</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green btn-flat"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditNoteModal.propTypes = {
  current: PropTypes.object,
  updateNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.note.current,
});

export default connect(mapStateToProps, { updateNote })(EditNoteModal);
