import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils";

function NoteList({ notes }) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => {
                    <NoteItem key={note.id} createdAt={showFormattedDate(note.createdAt)}{...note} />
                })
            }
        </div>
    )
}

export default NoteList