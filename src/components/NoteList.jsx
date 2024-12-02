import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes,onDelete,onArchive,onUnarchive}){
    return(
        <div className="notes-list">
            {
                notes.map((note)=>{
                    <NoteItem key={note.id} id={note.id} {...note}/>
                })
            }
        </div>
    )
}

export default NoteList