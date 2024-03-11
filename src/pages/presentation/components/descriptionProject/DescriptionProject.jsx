import React from 'react'

import "./descriptionProject.scss";

const DescriptionProject = () => {
    return (
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
    )
}

export default DescriptionProject
