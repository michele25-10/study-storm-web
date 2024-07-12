import React from 'react'

import "./graphicApp.scss";

const GraphicApp = () => {
    return (
        <div className="graphicApp">
            <div id="carouselExampleIndicators" class="carousel slide carousel-light">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
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
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/2.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/3.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/4.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/5.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/6.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/7.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/8.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/9.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/10.png" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/11.png" class="d-block w-100 " alt="..." />
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
        </div >
    )
}

export default GraphicApp
