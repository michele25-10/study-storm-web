import React, { useEffect } from 'react';

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
import ReactGA from 'react-ga';

const Presentation = () => {
    const [cookies] = useCookies(["statsCookies"]);

    useEffect(() => {
        if (cookies.statsCookies) {
            ReactGA.pageview(window.location.pathname);
        }
    });

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
        </div >
    )
}

export default Presentation; 
