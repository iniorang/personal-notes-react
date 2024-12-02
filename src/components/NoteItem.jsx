import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import UnarchiveButton from "./UnarchiveButton";

function NoteItem({ title, createdAt, body }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt}  />
    </div>
  );
}
export default NoteItem;
