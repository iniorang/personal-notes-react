import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, createdAt, body }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton />
        <ArchiveButton />
      </div>
    </div>
  );
}
export default NoteItem;
