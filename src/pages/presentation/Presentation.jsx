import React from 'react';
import "./presentation.scss";

const Presentation = () => {
    return (
        <div className='presentationPage'>
            <div className="headerBox">
                <div className="navbar">
                    <div className="logo">
                        <h3>Study-Storm</h3>
                    </div>
                    <ul>
                        <li>Contattateci</li>
                        <li>Funzionalità</li>
                        <li>Recensioni</li>
                    </ul>
                </div>
                <div className="appBox">
                    <div className="description">
                        <div className="title">
                            <h4>Organizza i tuoi obiettivi</h4>
                            <h4>Affronta le tue tempeste di studio</h4>
                        </div>
                        <div className="subtitle">
                            <p>L'app che ti consente di gestire al meglio i tuoi obiettivi di studio</p>
                        </div>
                        <div className="callToAction">
                            <button className='btn btn-light'>Visualizza altro</button>
                        </div>
                    </div>
                    <div className="screenPhone">
                        <img src='/iphoneImg.png'></img>
                    </div>

                </div>
            </div>
            <div className="functionalityBox">
                Funzionalità
            </div>
            <div className="graphicApp">
                screenApp con le varie funzionalità
            </div>
            <div className="videoPresentation">
                Video presentazione
            </div>
            <div className="valutation">
                Recensioni
            </div>
            <div className="footer">
                Footer
            </div>
        </div >
    )
}

export default Presentation; 
