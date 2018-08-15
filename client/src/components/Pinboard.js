import React from 'react'

const PinBoard = (props) => {
    const notes = this.props
    return (
        <div id='pinBoard'>
            {
                notes.map(note => { return (
                    <div id='note' key={note.id}>
                        {note.title}
                        {note.contents}
                        {
                            note && note.images && note.images.map(image => { return (
                                <img src={image.uri} alt='note-img' width='100px' height='100px' />
                            )})
                        }
                    </div>
                )})
            }
        </div>
    )
}

export default PinBoard

//to render the PinBoard component, pass it an array of notes in its props
