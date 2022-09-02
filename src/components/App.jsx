import React from 'react'
import CallOut from './Callout'
// import EmailCallout from './EmailCallout'
// import ImageCallout from './ImageCallout'
// import InfoCallout from './InfoCallout'

export default function App() {
    return (
        <main>
            <h1>Welcome!</h1>
            <CallOut>
                <h2>"Don't miss out!"</h2>
                <p>"Unless you don't suffer from FOMO, you better make sure youu fill out the email form below!"</p>
            </CallOut>
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
            <CallOut>
                <img src={"https://picsum.photos/id/102/4320/3240"} width='100%'/>
                <figcaption>Just look at those sparkling rasberries!</figcaption>
            </CallOut>
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
            <CallOut>
                <h2>Give us your email. We definitely won't sell ito to anyone.</h2>
                <input type='email' placeholder='Enter Email'></input>
                <button>Sign me up!</button>
            </CallOut>
        </main>
    )
}

{/* <h1>Welcome!</h1>
<InfoCallout 
    header="Don't miss out!"
    body="Unless you don't suffer from FOMO, you better make sure youu fill out the email form below!"
/>
<p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
<ImageCallout 
    img={"https://picsum.photos/id/102/4320/3240"}
    caption="Just look at those sparkling rasberries!"
/>
<p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
<EmailCallout 
    header="Give us your email. We definitely won't sell ito to anyone."
    btnText="Sign me up!"
/> */}