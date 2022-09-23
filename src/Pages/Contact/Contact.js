import React, {useEffect} from 'react'
import "./Contact.css";

const Contact = ({ FooterHandler }) => {
  
  useEffect(() => {
    return FooterHandler(true)
  },[FooterHandler])

  return (
    <div className="contact">
      <p>Contact Us</p>
      <div className="contact-info">
        <form>
          <div className="Name">
            <input type="text" placeholder="First Name" required/>
            <input type="text" placeholder="Last Name" required/>
          </div>
          <div className="Email">
            <input type="email" placeholder="Email Address" required/>
          </div>
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact