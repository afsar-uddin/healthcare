import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div>
                <h2>Write your thought, your words makes our sharp providing best services</h2>
            </div>
            <form>
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your email" />
                <input type="text" placeholder="Your phone number" />
                <textarea cols="30" rows="3" placeholder="Your words"></textarea>
                <input type="submit" vlue="Send" />
            </form>
        </div>
    );
};

export default Contact;