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
                    <div className="note-search">

                    </div>
                </header>
                <main className="note-app__body">
                    <NoteList notes={this.state.notes} />
                </main>

            </div>
        )
    }
}

export default NoteApp