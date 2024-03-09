import React from 'react';
import "./presentation.scss";
import { functionality } from './function/data';


const Presentation = () => {
    return (
        <div className='presentationPage'>
            <div className="headerBox">
                <div className="navbar container">
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
                            <h3>Organizza i tuoi obiettivi</h3>
                            <h3>Affronta le tue tempeste di studio</h3>
                        </div>
                        <div className="subtitle">
                            <p>L'app che ti consente di gestire al meglio i tuoi obiettivi di studio</p>
                        </div>
                        <div className="callToAction">
                            <button className='btn btn-light'>Visualizza altro</button>
                        </div>
                    </div>
                    <div className="screenPhone">
                        <img src='/iphoneImg.png' alt="" />
                    </div>

                </div>
            </div>
            <div className="functionalityBox">
                <div className="title">
                    <span>Macro funzionalità</span>
                </div>
                <div className="description">
                    Le principali funzioni che renderanno il vostro studio più semplice e produttivo
                </div>
                <div className="listTips">
                    {functionality.map((item) => (
                        <div className="box" key={item.title}>
                            {item.img}
                            <h5>{item.title}</h5>
                        </div>
                    ))}

                </div>
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
