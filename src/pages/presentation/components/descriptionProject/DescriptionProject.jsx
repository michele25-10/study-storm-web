import React from 'react'

import "./descriptionProject.scss";

const DescriptionProject = () => {
    return (
        <div className="descriptionProject">
            <div className="cardProject">
                <h3>Gestisci i tuoi studi facilmente</h3>
                <p>Study Storm è l'app definitiva per gli studenti universitari e delle superiori che vogliono prendere il controllo dei loro studi. Con Study Storm, puoi creare esami e suddividerli in task più piccoli e gestibili. Monitora il tuo progresso con agende dettagliate che registrano il tempo impiegato e i risultati di ogni task. Non hai voglia di inserire i dati manualmente? Nessun problema! Attiva il timer Pomodoro o il cronometro per registrare automaticamente i tuoi progressi. Inoltre, grazie alle statistiche accurate e uno storico delle tue performance, potrai visualizzare il trend del tuo miglioramento. Non lasciare che lo stress delle settimane di esami ti soffochi, prendi in mano il tuo futuro con Study Storm!
                </p>
                <div className="downloadButton">
                    <button className="btn market-btn google-btn">
                        <span className="market-button-subtitle">Scarica su</span>
                        <span className="market-button-title">Play Store</span>
                    </button>
                </div>
            </div>
            <div className="imgProject">
                <img src="/logo.png" alt="logo" />
            </div>
        </div>
    )
}

export default DescriptionProject
