import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css';
import i1 from './img/img1.jpg';
import i2 from './img/img2.jpg';
import i3 from './img/img3.jpg';
import i4 from './img/img4.jpg';

const Home = () =>{
    return (
        <div className="home-container">
            {/* Carousel */}
            <div className="carousel-container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={i1} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First Slide Label</h5>
                                <p>Some description for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={i2} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second Slide Label</h5>
                                <p>Some description for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={i3} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third Slide Label</h5>
                                <p>Some description for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            {/* About Us */}
            <div className="about-us">
                <h2>About Us</h2>
                <p>
                    Welcome to our Agriculture Website. We are dedicated to providing the best quality produce directly from the farm to your table. Our mission is to support sustainable farming practices and ensure that our customers receive fresh, organic products.
                </p>
            </div>

            {/* Photo Gallery */}
            <div className="photo-gallery">
                <h2>Photo Gallery</h2>
                <div className="gallery">
                    <img src={i1} alt="Gallery Image 1" />
                    <img src={i2} alt="Gallery Image 2" />
                    <img src={i3} alt="Gallery Image 3" />
                    <img src={i4} alt="Gallery Image 4" />
                    <img src={i1} alt="Gallery Image 5" />
                    <img src={i2} alt="Gallery Image 6" />
                </div>
            </div>
        </div>
    );
};

export default Home;
