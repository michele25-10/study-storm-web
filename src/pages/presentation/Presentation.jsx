import React from 'react';

//sass
import "./presentation.scss";

//components
import HeaderBox from "./components/headerBox/HeaderBox";
import FunctionalityBox from './components/functionalityBox/FunctionalityBox';
import GraphicApp from './components/graphicApp/GraphicApp';
import VideoPresentation from './components/videoPresentation/VideoPresentation';
import DescriptionProject from './components/descriptionProject/DescriptionProject';
import Footer from '../../components/footer/Footer';

const Presentation = () => {
    return (
        <div className='presentationPage'>
            {/*Navbar + presentazione dell'applicazione */}
            <HeaderBox />

            {/* Macro funzionalità */}
            <FunctionalityBox />

            {/* Carosello con immagini*/}
            <GraphicApp />

            {/* Link a youtube per trailer app*/}
            <VideoPresentation />

            {/*Descrizione del progetto */}
            <DescriptionProject />

            <div className="newsLetter">
                <div className="title">
                    <h3>Newsletter</h3>
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Nome" aria-label="Nome" />
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Cognome" aria-label="Cognome" />
                </div>
                <div>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Telefono" />
                </div>
                <div >
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                        Accetto privacy policy
                    </label>
                </div>

                <div>
                    <button className='btn btn-success'>Iscriviti</button>
                </div>
            </div>

            <Footer />

        </div >
    )
}

export default Presentation; 
