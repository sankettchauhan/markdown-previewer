import React from 'react'

const Preview = ({ markedInput }) => {
    function createMarkup() {
        return { __html: markedInput }
    }
    return (
        <div id="preview" className="window">
            <div className="header">
                <h2 className="title">Preview window</h2>
                <hr />
            </div>
            <div className="content" dangerouslySetInnerHTML={createMarkup()}>
            </div>
        </div >
    )
}

export default Preview
