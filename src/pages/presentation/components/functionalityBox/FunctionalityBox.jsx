import React from 'react'

//SASS
import "./functionalityBox.scss";

//dati
import { functionality } from '../../function/data';

const FunctionalityBox = () => {
    return (
        <div className="functionalityBox" id="functionality">
            <div className="title">
                <span>Macro funzionalità</span>
            </div>
            <div className="description">
                Le principali funzioni che renderanno il vostro studio più semplice e produttivo
            </div>
            <div className="listTips">
                {functionality.map((item) => (
                    <div className="box" key={item.title}>
                        {item.img}
                        <h5>{item.title}</h5>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FunctionalityBox
