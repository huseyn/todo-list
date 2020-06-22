import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Notes from './components/notes/Notes';
import AddNote from './components/notes/AddNote';
import EditNoteModal from './components/notes/EditNoteModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

function App() {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddNote />
          <EditNoteModal />
          <Notes />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
