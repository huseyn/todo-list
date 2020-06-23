import React, { useEffect } from "react";
import { connect } from "react-redux";
import NoteItem from "./NoteItem";
import PreLoader from "../layout/PreLoader";
import PropTypes from "prop-types";
import {getNotes} from '../../actions/noteActions';

const Notes = ({ note: { notes, loading }, getNotes }) => {

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  if (loading || notes===null) {
    return <PreLoader />;
  }

  return (
    <ul className="collection with-header">
      {!loading && notes.length === 0 ? (
        <p className="center">No notes to show</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} note={note} />)
      )}
    </ul>
  );
};

Notes.propTypes = {
  note: PropTypes.object.isRequired,
  getNotes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  note: state.note,
});

export default connect(mapStateToProps, {getNotes})(Notes);
