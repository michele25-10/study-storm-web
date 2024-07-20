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
import Reviews from './components/reviews/Reviews';

import { useCookies } from 'react-cookie';
import CookieConsent from '../../components/cookie/CookieConsent';

const Presentation = () => {
    const [cookies] = useCookies(["cookieConsent"])
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

            {/*Recensioni */}
            <Reviews />

            <Footer />

            {!cookies.cookieConsent ? <CookieConsent /> : null}

        </div >
    )
}

export default Presentation; 
