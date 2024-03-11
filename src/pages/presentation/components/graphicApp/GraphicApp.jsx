import React from 'react'

import "./graphicApp.scss";

const GraphicApp = () => {
    return (
        <div className="graphicApp">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/carousel1.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/carousel2.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/carousel3.png" class="d-block w-100 " alt="..." />
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
    )
}

export default GraphicApp
