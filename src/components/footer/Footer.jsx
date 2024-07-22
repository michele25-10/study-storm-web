import React, { useState } from 'react'

//sass
import "./footer.scss";

//ICONS
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { addMailNewsletter } from './function/api';
import { colors } from '@mui/material';
import { CookiePolicyCentered } from '../cookie/CookieConsent';

const Footer = () => {
    const [email, setEmail] = useState((""));
    const [responseMessage, setResponseMessage] = useState((""));
    const [error, setError] = useState((false));
    const [acceptCondition, setAcceptCondition] = useState((false));

    const [openCookiePolicy, setOpenCookiePolicy] = useState((false));

    return (
        <div className="footer" id="footer">
            <div className="newsLetter">
                <h3>NewsLetter</h3>
                <div className="input-group inputNewsLetter">
                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className="btn btn-outline-light" type="button" id="button-addon2" onClick={(e) => {
                        if (acceptCondition) {
                            addMailNewsletter({ email }).then((res) => {
                                // res = result.error
                                if (!res) {
                                    setEmail("");
                                    setResponseMessage("Benvenuto nella nostra newsletter");
                                    setError(false);
                                } else {
                                    setResponseMessage("Errore, ricontrolla la mail da te inserita");
                                    setError(true);
                                }
                            });
                        } else {
                            setResponseMessage("Per iscriverti alla newsletter devi accettare privacy policy e term of use");
                            setError(true);
                        }
                    }}>Iscriviti</button>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" onChange={(event) => {
                        setAcceptCondition(event.target.checked);
                    }} />
                    <label className="form-check-label">
                        Accetto <a href='http://localhost:3000/privacy-policy/'>privacy policy</a> & <a href='http://localhost:3000/term-of-use/'>termini di uso</a>
                    </label>
                </div>
                {responseMessage ? <p style={{ color: error ? "red" : "green", fontWeight: 400, alignItems: "center" }}>{responseMessage}</p> : null}
                <p>Iscriviti alla nostra newsLetter e resta sincronizzato con i nuovi aggiornamenti dell'app!</p>
            </div>
            <div className="contact">
                <div className="contactDevelop">
                    <h3>Contatti sviluppatori</h3>
                    <div className="contentContact">
                        <div className="micheleGabrieli">
                            <h6>Michele Gabrieli</h6>
                            <div className="wrapperContact ">
                                <PhoneIcon /> +39 0124567890
                            </div>
                            <div className="wrapperContact">
                                <EmailIcon /> michele.gabri01@gmail.com
                            </div>
                        </div>
                        <div className="albertoPavarin">
                            <h6>Alberto Pavarin</h6>
                            <div className="wrapperContact">
                                <PhoneIcon /> +39 0124567890
                            </div>
                            <div className="wrapperContact">
                                <EmailIcon /> albertoPavarin@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-privacy">
                <h3>Privacy</h3>
                <ul>
                    <li><a href="http://localhost:3000/privacy-policy">Privacy policy</a></li>
                    <li><a href="http://localhost:3000/term-of-use/">Termini e condizioni d'uso</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer
