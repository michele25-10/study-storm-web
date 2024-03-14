import React, { useEffect, useState } from 'react'

import "./confirmRegistration.scss";

import { useParams } from 'react-router-dom';
import { confirmUserRegistration } from './function/api';

const ConfirmRegistration = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        confirmUserRegistration({ id }).then((res) => {
            //res contiene result.error()
            setShow(!res.error);
            setMessage(res.data.message);
        })
    }, [id]);

    return (
        <div className='confirmRegistration'>
            <div className="content">
                <div className="imgHeader">
                    <img src="/logo.jpg" alt="" />
                </div>
                <div className="titleContent">
                    <h3>{show ? "Benvenuto Studente!" : "Errore, riprova più tardi"}</h3>
                </div>
                <div className="contentDescription">
                    {show && message ? message
                        : "Ci scusiamo per il disagio il nostro team sta lavorando per risolvere il problema, riprova più tardi."
                    }
                </div>
            </div>
        </div >
    )
}

export default ConfirmRegistration
