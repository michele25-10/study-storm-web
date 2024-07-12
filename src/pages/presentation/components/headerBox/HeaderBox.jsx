import React from 'react'
import "./headerBox.scss";

const HeaderBox = () => {
    return (
        <div className="headerBox">
            <div className="navbar container">
                <div className="logo">
                    <h3>Study-Storm</h3>
                </div>
                <div className="itemNavbar">
                    <ul>
                        <li><a href='#footer'>Contattateci</a></li>
                        <li><a href='#functionality'>Funzionalità</a></li>
                        <li><a href='#reviews'>Recensioni</a></li>
                    </ul>
                </div>
            </div>
            <div className="appBox container">
                <div className="description">
                    <div className="title">

                        <h3>Lo studio più semplice che ci sia!</h3>
                    </div>
                    <div className="subtitle">
                        <p>L'app che trasforma il caos in successo,
                            gestendo i tuoi obiettivi di studio in modo semplice e intuitivo.
                        </p>
                    </div>
                    <div className="callToAction">
                        <button className='btn btn-light'>Visualizza altro</button>
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
