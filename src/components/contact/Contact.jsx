import "./contact.scss"
import {useState} from 'react';
import emailjs from "emailjs-com";

export default function Contact() {



    const sendEmail= (e)=>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_jt926ae', e.target, 'user_8PfxOWDkSk6sGBXQDqZqP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          e.preventDefault();
          setMessage(true);
      }
    
    



    const [message, setMessage] =  useState(false)

 


    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="shaking hands" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Email" name="email" required={true}></input>
                    <textarea placeholder="Message" name="message" required={true}></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP</span>}
                </form>
            </div>
        </div>
    )
}
