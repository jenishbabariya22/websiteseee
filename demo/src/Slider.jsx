import React from 'react'

function Slider() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img src="..." className="d-block w-100" alt="..." /> */}
                        <div style={{
                            backgroundImage: `url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/slider-01.jpg")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '750px',
                            paddingTop: "100px",
                            paddingBottom: "100px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div className="container">
                                <div className="img" style={{ textAlign: "center" }}>
                                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-01.png" alt="" style={{ width: "100px" }} />
                                </div>
                                <h1 style={{ lineHeight: "1.1", fontSize: "96px", textAlign: "center", color: "white" }}>Bring The Best  <br></br> Experience </h1>
                                <div className="button" style={{ textAlign: "center" }}>
                                    <button style={{ maxWidth: "220px", fontSize: "18px", height: "65px", lineHeight: "9px", fontWeight: "700", width: "100%", border: "none", backgroundColor: "#BC8157", color: "white", padding: "30px", marginTop: "20px", textAlign: "center" }}>ORDER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div style={{
                            backgroundImage: `url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/slider-02.jpg")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '750px',
                            paddingTop: "100px",
                            paddingBottom: "100px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div className="w-70" style={{ paddingLeft: "300px" }}>
                                <div className="container">
                                    <div className="img" style={{ textAlign: "center" }}>
                                        <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-02.png" alt="" style={{ width: "100px" }} />
                                    </div>
                                    <h1 style={{ lineHeight: "1.1", fontSize: "80px", textAlign: "center", color: "white" }}>Taste That Lasts <br></br>  Forever </h1>
                                    <div className="button" style={{ textAlign: "center" }}>
                                        <button style={{ maxWidth: "220px", fontSize: "18px", height: "65px", lineHeight: "9px", fontWeight: "700", width: "100%", border: "none", backgroundColor: "#BC8157", color: "white", padding: "30px", marginTop: "20px", textAlign: "center" }}>ORDER NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Slider
