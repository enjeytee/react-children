import React from 'react'

function EmailCallout(props) {
    return (
        <div className='callout'>
            <h2>{props.header}</h2>
            <input type='email' placeholder='Enter Email'></input>
            <button>{props.btnText}</button>
        </div>
    )
}
export default EmailCallout