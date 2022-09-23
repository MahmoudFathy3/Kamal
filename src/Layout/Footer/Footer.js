import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin , faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-wapper">
          <div className="left">
            <p>Store</p>
            <a href="https://www.facebook.com/maharatech.Eg/">
            <FontAwesomeIcon icon={faFacebook} className="icon"  color="#0000FF"/>
            </a>
            <a href="https://www.youtube.com/channel/UC5LihoOOzxapt2GS8bPzJhw?view_as=subscriber">
            <FontAwesomeIcon icon={faYoutube} className="icon" color="red"/>
            </a>
            <a href="https://www.linkedin.com/in/mahara-tech-299077185/">
            <FontAwesomeIcon icon={faLinkedin} className="icon" color="#0694f4"/>
            </a>
        </div>
          <div className="right">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='about'>About</Link></li>
              <li><Link to='Contact'>Contact Us</Link></li>
            </ul>
        </div>
        </div>
      </div>
        <p style={{textAlign: 'center', color: 'white', backgroundColor: '#333', padding: '10px'}}>&copy;Store 2022</p>
    </div>
  )
}

export default Footer
