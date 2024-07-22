import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

import Modal from 'react-bootstrap/Modal';

import "./cookieConsent.scss";

export default function CookieConsent() {
    const [cookies, setCookies] = useCookies(["tecnicalCookies", "statsCookies"]);
    const giveCookieConsent = () => {
        setCookies("tecnicalCookies", true, { path: "/" });
        setCookies("statsCookies", true, { path: "/" })
    };
    const [show, setShow] = useState((true));

    const [openCookiePolicy, setCookiePolicy] = useState((false));
    const [openPreferencesCookies, setOpenPreferencesCookies] = useState((false));

    return (
        show ?
            <div className="cookie-modal fixed-bottom">
                <p className="content-paragraph">Utilizziamo servizi di terze parti che memorizzano le informazioni nel dispositivo finale di un visitatore del sito o le recuperano.
                    Successivamente elaboriamo ulteriormente le informazioni. Tutto questo ci aiuta a progettare in modo ottimale e a migliorare continuamente
                    il nostro sito web. Per l'archiviazione, il recupero e l'elaborazione abbiamo bisogno del tuo consenso.
                    Puoi revocare il consenso in qualsiasi momento utilizzando il link nel footer.
                    Ulteriori informazioni sono disponibili nella nostra Informativa sulla privacy.
                    Se hai 16 anni o meno, seleziona "Rifiuta tutto".<br />
                    <a href='#' style={{ color: 'white' }} onClick={() => setCookiePolicy(true)}>Cookie policy</a>
                </p>
                <div className="button-control">
                    <button type="button" className="btn btn-outline-light" onClick={giveCookieConsent}>Accetta tutto</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setOpenPreferencesCookies(true)} >Preferenze</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => setShow(false)} >Rifiuta tutto</button>
                </div>
                <CookiePolicyCentered
                    show={openCookiePolicy}
                    onHide={() => setCookiePolicy(false)}
                />
                <PreferencesCookiePolicy
                    show={openPreferencesCookies}
                    onHide={() => setOpenPreferencesCookies(false)}
                    setcookies={setCookies}
                />
            </div > : <></>
    )
}

export function CookiePolicyCentered(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='  bg-dark text-light' closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1>Cookie Policy</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='  bg-dark text-light'>
                <div className="container">

                    <p>Benvenuti su <a href="https://study-storm.netlify.app/">https://study-storm.netlify.app/</a> (di seguito "Sito"). Questa informativa sui cookie spiega come utilizziamo i cookie e tecnologie simili per raccogliere e memorizzare informazioni quando visitate il nostro Sito. Utilizzando il nostro Sito, acconsentite all'uso dei cookie in conformità con questa informativa.</p>

                    <h2>Cosa sono i Cookie?</h2>
                    <p>I cookie sono piccoli file di testo che vengono memorizzati sul vostro dispositivo (computer, tablet, smartphone) quando visitate un sito web. I cookie permettono al sito di riconoscere il vostro dispositivo e di ricordare determinate informazioni sulle vostre visite precedenti, migliorando la vostra esperienza di navigazione.</p>

                    <h2>Tipi di Cookie Utilizzati</h2>

                    <h3>Cookie Tecnici</h3>
                    <p>I cookie tecnici sono essenziali per il funzionamento del nostro Sito. Questi cookie permettono di navigare nel sito e di utilizzare le sue funzionalità principali. Senza questi cookie, il sito non può funzionare correttamente. Non richiedono il consenso dell'utente per essere installati.</p>

                    <h3>Cookie di Google Analytics</h3>
                    <p>Utilizziamo Google Analytics per raccogliere informazioni sull'uso del nostro Sito. Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito, quali pagine visitano, quanto tempo trascorrono su ciascuna pagina, e altre statistiche. Le informazioni raccolte da questi cookie sono aggregate e anonime. Per ulteriori dettagli, potete consultare la <a href="https://policies.google.com/privacy">privacy policy di Google Analytics</a>.</p>

                    <h2>Gestione del Consenso per i Cookie</h2>
                    <p>Quando accedete per la prima volta al nostro Sito, vi verrà presentato un banner informativo sull'uso dei cookie. Continuando a navigare sul nostro Sito, accettate l'uso dei cookie come descritto in questa informativa. Potete modificare le vostre preferenze sui cookie in qualsiasi momento attraverso le impostazioni del vostro browser. Tuttavia, disabilitare i cookie potrebbe influenzare la vostra esperienza di navigazione sul nostro Sito.</p>

                    <h2>Newsletter</h2>
                    <p>Il nostro Sito offre un servizio di newsletter che richiede l'inserimento del vostro indirizzo email. Utilizziamo questo dato esclusivamente per inviarvi aggiornamenti e informazioni relative alla nostra app. Potete disiscrivervi dalla newsletter in qualsiasi momento seguendo le istruzioni presenti in fondo ad ogni email ricevuta.</p>

                    <h2>Diritti degli Utenti</h2>
                    <p>Avete il diritto di accedere, rettificare, cancellare o limitare il trattamento dei vostri dati personali raccolti attraverso i cookie. Per esercitare questi diritti, o per qualsiasi domanda riguardante questa informativa sui cookie, potete contattarci all'indirizzo email: <a href="mailto:studystorm@gmail.com">studystorm@gmail.com</a>.</p>

                    <h2>Modifiche alla Presente Informativa</h2>
                    <p>Ci riserviamo il diritto di aggiornare questa informativa sui cookie in qualsiasi momento. Eventuali modifiche verranno pubblicate su questa pagina con indicazione della data di revisione. Vi invitiamo a consultare periodicamente questa informativa per essere informati su come utilizziamo i cookie.</p>

                    <p><em>Data dell'ultima revisione: 22-07-2024</em></p>

                    <p>Grazie per aver visitato il nostro Sito.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className='  bg-dark text-light'>
                <button className='btn btn-outline-light' onClick={props.onHide}>Chiudi</button>
            </Modal.Footer>
        </Modal>
    );
}

function PreferencesCookiePolicy(props) {
    const [statsChecked, setStatsChecked] = useState((false));

    const savePreferences = () => {
        props.setcookies("tecnicalCookies", true, { path: "/" });
        if (statsChecked) {
            props.setcookies("statsCookies", true, { path: "/" })
        }
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='bg-dark text-light' closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1>Seleziona Cookie</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-light'>
                <div className="container">
                    <ul className="list-cookies">
                        <li className='row-name-input'>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled />
                                <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Tecnici</label>
                            </div>
                        </li>
                        <li className='row-name-input'>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" value={statsChecked} onChange={(event) => setStatsChecked(event.target.checked)} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >Statistiche</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer className='bg-dark text-light'>
                <button className='btn btn-outline-light' onClick={() => { savePreferences(); props.onHide(); }}>Salva</button>
                <button className='btn btn-outline-danger' onClick={props.onHide}>Chiudi</button>

            </Modal.Footer>
        </Modal >
    );
}