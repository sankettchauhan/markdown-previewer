import React from 'react'

const Display = ({ markedInput }) => {
    return (
        <div id="display" className="window">
            <div className="header">
                <h2 className="title">html code</h2>
                <hr />
            </div>
            <div className="content">
                <p>{markedInput}</p>
            </div>
        </div>
    )
}

export default Display
