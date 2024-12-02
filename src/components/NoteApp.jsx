import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData()
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(notes => notes.id !== id)
        this.setState({ notes })
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return{
                notes: [...prevState.notes, {
                    id: Date.now(),
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false
                }]
            }
        })
    }

    render() {
        return (
            <div className="note-app">
                <header className="note-app__header">
                    <h1>Note App</h1>

                </header>
                <main className="note-app__body">
                    <div className="note-input">
                        <h2>Buat Note Baru</h2>
                        <NoteInput addNote={this.onAddNoteHandler}/>
                    </div>
                    <h2>Note Aktif</h2>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
                    <h2>Arsip</h2>
                </main>

            </div>
        )
    }
}

export default NoteApp