import React, {useRef} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchNotes } from "../../actions/noteActions";

const SearchBar = ({ searchNotes }) => {

    const text = useRef('');

    const onChange = e => {
        searchNotes(text.current.value);
    }

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search Notes" ref={text} onChange={onChange}/>
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
    searchNotes: PropTypes.func.isRequired
}

export default connect(null, { searchNotes })(SearchBar);
