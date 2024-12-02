import React from "react";
import NoteList from "./NoteList";
import { getInitialData,showFormattedDate } from "../utils/index";

class NoteApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes: getInitialData()
        }
    }

    render(){
        return(
            <div className="note-app__body">
                <NoteList notes={this.state.notes}/>
            </div>
        )
    }
}

export default NoteApp