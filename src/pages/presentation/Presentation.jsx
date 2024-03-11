import React from 'react';

//sass
import "./presentation.scss";

//icons
import YouTubeIcon from '@mui/icons-material/YouTube';

//components
import HeaderBox from "./components/headerBox/HeaderBox";
import FunctionalityBox from './components/functionalityBox/FunctionalityBox';
import GraphicApp from './components/graphicApp/GraphicApp';

const Presentation = () => {
    return (
        <div className='presentationPage'>
            <HeaderBox />
            <FunctionalityBox />
            <GraphicApp />

            <div className="videoPresentation">
                <div className="title">
                    <h3>Trailer</h3>
                </div>
                <p>Visualizza il trailer della nostra applicazione</p>
                <YouTubeIcon style={{ color: "white", height: "100px", width: "100px", cursor: "pointer", }} />
            </div>
            <div className="descriptionProject">
                <div className="cardProject">
                    <h3>Study Storm</h3>
                    <p>Study Storm è una applicazione dedicata agli studenti, l'obiettivo è quello di rendere lo studio
                        più semplice aumentando l'organizzazione degli studenti.<br />
                        Se hai un esame universitario o una verifica, hai bisogno di obiettivi!<br />
                        Crea il tuo obiettivo e crea le tue sotto task con delle scadenze, i risultati miglioreranno!<br />
                        E la nostra app migliorerà con te!
                        Se hai delle domande interfacciati con la nostra comunity per avere delle risposte.
                    </p>
                    <div className="downloadButton">
                        <button class="btn market-btn google-btn">
                            <span class="market-button-subtitle">Scarica su</span>
                            <span class="market-button-title">Play Store</span>
                        </button>
                    </div>
                </div>
                <div className="imgProject">
                    <img src="/logo.jpg" alt="logo" />
                </div>
            </div>
            <div className="newsLetter">
                <div className="title">
                    <h3>Newsletter</h3>
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Nome" aria-label="Nome" />
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Cognome" aria-label="Cognome" />
                </div>
                <div>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Telefono" />
                </div>
                <div >
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                        Accetto privacy policy
                    </label>
                </div>

                <div>
                    <button className='btn btn-success'>Iscriviti</button>
                </div>
            </div>
            <div className="footer">
                Footer
            </div>
        </div >
    )
}

export default Presentation; 
