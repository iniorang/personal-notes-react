import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData()
        }
    }

    render() {
        return (
            <div className="note-app">
                <header className="note-app__header">
                    <h1>Note App</h1>
                </header>
                <main className="note-app__body">
                    <h2>Note Aktif</h2>
                    <NoteList notes={this.state.notes} />
                    <h2>Arsip</h2>
                </main>

            </div>
        )
    }
}

export default NoteApp