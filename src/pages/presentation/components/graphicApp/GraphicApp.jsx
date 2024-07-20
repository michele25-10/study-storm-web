import React from 'react'

import "./graphicApp.scss";

const GraphicApp = () => {
    return (
        <div id="graphicApp" className="graphicApp">
            <div id="carouselExampleIndicators" className="carousel slide carousel-light">
                <div className="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/2.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/3.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/4.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/5.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/6.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/7.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/8.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/9.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/10.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/11.png" className="d-block w-100 " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Prima</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Dopo</span>
                </button>
            </div >
        </div >
    )
}

export default GraphicApp
