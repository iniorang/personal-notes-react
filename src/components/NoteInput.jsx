import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: "",
            titleLimit: 50
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    handleTitleChange(e){
        this.setState(()=>{
            return{
                title: e.target.value
            }
        })
    }
    handleBodyChange(e){
        this.setState(()=>{
            return{
                body: e.target.value
            }
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.addNote(this.state)
    }

    render(){
        const titleLimitRemaining = this.state.titleLimit - this.state.title.length
        return(
            <form onSubmit={this.handleSubmit}>
            <p className="note-input__title__char-limit">
            Sisa karakter: {titleLimitRemaining}
            </p>
                <input 
                    type="text" 
                    placeholder="Judul" 
                    maxLength={this.state.titleLimit}
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea 
                    placeholder="Tuliskan pikiran anda disini"
                    value={this.state.body}
                    onChange={this.handleBodyChange}
                />
                <button type="submit">Tambahkan</button>
            </form>
        )
    }
}
export default NoteInput