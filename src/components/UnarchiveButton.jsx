import React from "react";

function UnarchiveButton({id,onUnarchive}){
    return <button className="note-item__archive-button" onClick={()=>onUnarchive(id)}>Kembalikan</button>
}
export default UnarchiveButton