import React from 'react'

import "./confirmRegistration.scss";

const ConfirmRegistration = () => {
    return (
        <div className='confirmRegistration'>
            <div className="content">
                <div className="imgHeader">
                    <img src="/logo.jpg" alt="" />
                </div>
                <div className="titleContent">
                    <h3>Benvenuto Studente!</h3>
                </div>
                <div className="contentDescription">
                    Ciao utente, grazie per aver confermato la tua iscrizione!<br />
                    Il nostro team è entusiasta di averti in squadra e lavoreremo per migliorare l'applicazione e di conseguenza migliorare il tuo studio.
                </div>
            </div>
        </div >
    )
}

export default ConfirmRegistration
