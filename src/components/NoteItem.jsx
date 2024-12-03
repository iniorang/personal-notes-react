import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, createdAt, body, id, onDelete,onArchive, isArchived}) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived}/>
      </div>
    </div>
  );
}
export default NoteItem;
