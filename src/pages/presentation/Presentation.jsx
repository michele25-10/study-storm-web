import React from 'react';

//sass
import "./presentation.scss";

//dati
import { functionality } from './function/data';

//icons
import YouTubeIcon from '@mui/icons-material/YouTube';

const Presentation = () => {
    return (
        <div className='presentationPage'>
            <div className="headerBox">
                <div className="navbar container">
                    <div className="logo">
                        <h3>Study-Storm</h3>
                    </div>
                    <ul>
                        <li>Contattateci</li>
                        <li>Funzionalità</li>
                        <li>Recensioni</li>
                    </ul>
                </div>
                <div className="appBox">
                    <div className="description">
                        <div className="title">
                            <h3>Organizza i tuoi obiettivi</h3>
                            <h3>Affronta le tue tempeste di studio</h3>
                        </div>
                        <div className="subtitle">
                            <p>L'app che ti consente di gestire al meglio i tuoi obiettivi di studio</p>
                        </div>
                        <div className="callToAction">
                            <button className='btn btn-light'>Visualizza altro</button>
                        </div>
                    </div>
                    <div className="screenPhone">
                        <img src='/iphoneImg.png' alt="" />
                    </div>
                </div>
            </div>
            <div className="functionalityBox">
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
            <div className="graphicApp">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/carousel1.png" class="d-block w-100 h-80" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/carousel2.png" class="d-block w-100 h-80" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/carousel3.png" class="d-block w-100 h-80" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Prima</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Dopo</span>
                    </button>
                </div>
            </div>
            <div className="videoPresentation">
                <div className="title">
                    <h3>Trailer</h3>
                </div>
                <p>Visualizza il trailer della nostra applicazione</p>
                <YouTubeIcon style={{ color: "white", height: "100px", width: "100px", cursor: "pointer", }} />
            </div>
            <div className="valutation">
                <div className="contentValuatation">
                    <h3>Recensioni</h3>

                </div>
            </div>
            <div className="footer">
                Footer
            </div>
        </div >
    )
}

export default Presentation; 
