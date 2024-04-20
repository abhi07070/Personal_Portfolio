import React, { useState } from 'react'
import './Contact.css'
import Fade from 'react-reveal/Fade';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);

    function submitButton(e) {
        e.preventDefault();
        if (!name || !email || !message) {
            setFail(true);
            setTimeout(() => {
                setFail(false);
            }, 2000);
        } else {
            setName('');
            setEmail('');
            setMessage('');
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                // Redirect the user here using window.location or react-router
            }, 4000);
        }
        // Disable the submit button for 5 seconds
        e.target.disabled = true;
        const intervalId = setInterval(() => {
            if (e.target) {
                e.target.disabled = false;
                clearInterval(intervalId);
            }
        }, 5000);
    }


    return (
        <section className='section-bg contact-details'>
            <div className="pop-up">
                {success && <h6>Thanks for filling out form. see you soon !</h6>}
                {fail && <h6 style={{ background: 'red' }}>Please fill out all fields !</h6>}
            </div>
            <Fade bottom>
                <div className="fill-details">
                    <h1>Want to work with me</h1>
                    <p>React out to me using the form</p>
                    <form action="" onSubmit={submitButton}>
                        <div className='input'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} /></div>
                        <div className='input'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input type="Email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                        <div className='input'><textarea name="" id="" cols="30" rows="7" placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)}></textarea></div>
                        <button type='submit' className='submit-btn'>{success ? 'Sent' : 'Submit'}</button>
                    </form>
                </div>
            </Fade>
        </section>
    )
}

export default Contact
