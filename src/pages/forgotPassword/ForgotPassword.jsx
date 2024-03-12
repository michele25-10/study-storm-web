import React from 'react'

import "./forgotPassword.scss";

const ForgotPassword = () => {
    return (
        <div className='forgotPassword'>
            <div className="content">
                <div className="imgHeader">
                    <img src="/logo.jpg" alt="" />
                </div>
                <div className="titleContent">
                    <h3>Nuove credenziali!</h3>
                </div>
                <div className="contentDescription">
                    Ciao utente, controlla le tue mail, ti abbiamo inviato le tue nuove credenziali! <br />
                    Effettua l'accesso e cambia la password, così da poter tornare a studiare al meglio!
                </div>
            </div>
        </div >
    )
}

export default ForgotPassword
