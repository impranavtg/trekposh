import React from 'react'
import '../Css/Footer.css'

const Footer = () => {
    return (
        <>
             <footer>
        <div className="links_social">
            <a target="_blank"  rel="noreferrer" href="https://www.facebook.com/trekposh">FACEBOOK</a>
            <a target="_blank"  rel="noreferrer" href="https://twitter.com/trekposh">TWITTER</a>
            <a target="_blank"  rel="noreferrer" href="https://www.instagram.com/trekposh/">INSTAGRAM</a>
        </div>
        <div className="copyright"><p>© 2022 Trekposh, DESIGNED BY <a className='tg' target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/iampranavtyagi/">PRANAV TYAGI</a></p></div>
    </footer>
        </>
    )
}

export default Footer;
