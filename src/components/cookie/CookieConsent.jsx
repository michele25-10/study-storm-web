import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

import "./cookieConsent.scss";

export default function CookieConsent() {
    const [cookies, setCookies] = useCookies(["cookieConsent"]);
    const giveCookieConsent = () => {
        setCookies("cookieConsent", true, { path: "/" })
    };
    const [show, setShow] = useState((true));

    const [openModal, setOpenModal] = useState((false));

    return (
        show ?
            <div className="cookie-modal fixed-bottom">
                <p className="content-paragraph">Utilizziamo servizi di terze parti che memorizzano le informazioni nel dispositivo finale di un visitatore del sito o le recuperano.
                    Successivamente elaboriamo ulteriormente le informazioni. Tutto questo ci aiuta a progettare in modo ottimale e a migliorare continuamente
                    il nostro sito web. Per l'archiviazione, il recupero e l'elaborazione abbiamo bisogno del tuo consenso.
                    Puoi revocare il consenso in qualsiasi momento utilizzando il link nel footer.
                    Ulteriori informazioni sono disponibili nella nostra Informativa sulla privacy.
                    Se hai 16 anni o meno, seleziona "Rifiuta tutto".<br />
                    <a href='#' style={{ color: 'white' }} onClick={() => setOpenModal(true)}>Cookie policy</a>
                </p>
                <div className="button-control">
                    <button type="button" className="btn btn-outline-light" onClick={giveCookieConsent}>Accetta tutto</button>
                    <button type="button" class="btn btn-outline-danger" onClick={() => setShow(false)} >Rifiuta tutto</button>
                    <button type="button" class="btn btn-outline-secondary" onClick={() => setOpenModal(true)} >Preferenze</button>
                </div>
            </div > : <></>
    )
}
