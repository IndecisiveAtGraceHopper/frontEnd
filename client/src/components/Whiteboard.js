import React from 'react'

const WhiteBoard = (props) => {
    const notes = this.props
    render (
        <div id='whiteBoard'>
            {
                notes.map(note => {
                    <div id='note' key={note.id}>
                        {note.title}
                        {note.contents}
                    </div>
                })
            }
        </div>
    )
}