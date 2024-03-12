import React, { useState } from 'react'

//sass
import "./footer.scss";

//ICONS
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { addMailNewsletter } from './function/api';

const Footer = () => {
    const [email, setEmail] = useState((""));

    return (
        <div className="footer">
            <div className="newsLetter">
                <h3>NewsLetter</h3>
                <div class="input-group inputNewsLetter">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button class="btn btn-outline-light" type="button" id="button-addon2" onClick={(e) => {
                        addMailNewsletter({ email }).then((res) => {
                            // res = result.error
                            if (!res) {
                                setEmail("");
                            }
                        })
                    }}>Iscriviti</button>
                </div>
                <p>Iscriviti alla nostra newsLetter e resta sincronizzato con i nuovi aggiornamenti dell'app!</p>
            </div>
            <div className="contact">
                <div className="contactDevelop">
                    <h3>Contatti sviluppatori</h3>
                    <div className="contentContact">
                        <div className="micheleGabrieli">
                            <h7>Michele Gabrieli</h7>
                            <div className="wrapperContact ">
                                <PhoneIcon /> +39 0124567890
                            </div>
                            <div className="wrapperContact">
                                <EmailIcon /> michele.gabri01@gmail.com
                            </div>
                        </div>
                        <div className="albertoPavarin">
                            <h7>Alberto Pavarin</h7>
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

        </div>
    )
}

export default Footer
