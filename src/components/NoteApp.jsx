import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...NoteApp, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Date.now(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const active = this.state.notes.filter((note) => note.archived === false);
    const archived = this.state.notes.filter((note) => note.archived === true);

    return (
      <div className="note-app">
        <header className="note-app__header">
          <h1>Note App</h1>
        </header>
        <main className="note-app__body">
          <div className="note-input">
            <h2>Buat Note Baru</h2>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <h2>Note Aktif</h2>
          {active.length > 0 ? (
            <NoteList
              notes={active}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <div className="notes-list__empty-message">
              <p>Tidak ada Note</p>
            </div>
          )}
          <h2>Arsip</h2>
          {archived.length > 0 ? (
            <NoteList
              notes={archived}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <div className="notes-list__empty-message">
              <p>Tidak ada note arsip</p>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default NoteApp;
