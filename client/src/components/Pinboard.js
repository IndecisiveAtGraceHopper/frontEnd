import React from 'react'

const PinBoard = (props) => {
    const notes = this.props
    render (
        <div id='pinBoard'>
            {
                notes.map(note => {
                    <div id='note' key={note.id}>
                        {note.title}
                        {note.contents}
                        {
                            note && note.images && note.images.map(image => {
                                <img src={image.uri} alt='note image' width='100px' height='100px' />
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}

export default PinBoard