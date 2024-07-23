import React from 'react'
import "./headerBox.scss";

import { useCookies } from 'react-cookie';
import ReactGA from 'react-ga';


const HeaderBox = () => {
    const [cookies] = useCookies(["statsCookies"])

    return (
        <div className="headerBox">
            <div className="navbar container">
                <h3 className='nameApp'>Study Storm</h3>
                <div className="itemNavbar">
                    <ul>
                        <li><a href='#footer' onClick={() => {
                            if (cookies.statsCookies) {
                                ReactGA.event({ 'category': "Contattateci", 'action': 'click', 'label': 'Navbar link' });
                            }
                        }}>Contattateci</a></li>
                        <li><a href='#functionality' onClick={() => {
                            if (cookies.statsCookies) {
                                ReactGA.event({ 'category': "Funzionalità", 'action': 'click', 'label': 'Navbar link' });
                            }
                        }}>Funzionalità</a></li>
                        <li><a href='#reviews' onClick={() => {
                            if (cookies.statsCookies) {
                                ReactGA.event({ 'category': "Recensioni", 'action': 'click', 'label': 'Navbar link' });
                            }
                        }}>Recensioni</a></li>
                    </ul>
                </div>
            </div>
            <div className="appBox container">
                <div className="description">
                    <div className="title">

                        <h3>Lo studio più semplice che ci sia!&#129299;</h3>
                    </div>
                    <div className="subtitle">
                        <p>L'app che trasforma il caos in successo,
                            gestendo i tuoi obiettivi di studio in modo semplice e intuitivo.
                        </p>
                    </div>
                    <div className="callToAction">
                        <a href='#graphicApp'>
                            <button className='btn btn-outline-light'>Visualizza altro</button>
                        </a>
                    </div>
                </div>
                <div className="screenPhone">
                    <img src='/1.png' alt="" />
                </div>
            </div>
        </div >
    )
}

export default HeaderBox
