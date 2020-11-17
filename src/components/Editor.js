import React, { useState } from 'react'

const Editor = ({ stateInput, stateChange }) => {
    const [input, setinput] = useState(stateInput);
    function handleChange(e) {
        setinput(e.target.value);
        stateChange(e.target.value);
    }
    return (
        <div id="editor" className="window">
            <div className="header">
                <h2 className="title">Editor window</h2>
                <hr />
            </div>
            <div className="content">
                <textarea id="editor-window" value={input} onChange={handleChange}></textarea>
            </div>
        </div>
    )
}

export default Editor
