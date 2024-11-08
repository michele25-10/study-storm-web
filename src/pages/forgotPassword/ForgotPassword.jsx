import React, { useEffect, useState } from 'react'

import "./forgotPassword.scss";

import { useParams } from 'react-router-dom';
import { confirmForgotPassword } from './function/api';

const ForgotPassword = () => {
    const { id } = useParams();

    const [show, setShow] = useState(null);

    useEffect(() => {
        confirmForgotPassword({ id }).then((res) => {
            //se res === true vuol dire che c'è un errore
            setShow(!res);
        });
    }, [id])

    return (
        <div className='forgotPassword'>
            <div className="content">
                <div className="imgHeader">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="titleContent">
                    <h3>{show ? "Nuove credenziali!" : "Errore, riprova più tardi"}</h3>
                </div>
                <div className="contentDescription">
                    {show ? `Ciao utente, controlla le tue mail, ti abbiamo inviato le tue nuove credenziali!
                    Effettua l'accesso e cambia la password, così da poter tornare a studiare al meglio!`
                        : `Siamo spiacenti ma il servizio è momentaneamente disabilitato riprova in un secondo momento.
                         Il nostro team si scusa per il disagio`}
                </div>
            </div>
        </div >
    )
}

export default ForgotPassword
