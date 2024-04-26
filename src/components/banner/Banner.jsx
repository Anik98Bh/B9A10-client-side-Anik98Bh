import 'animate.css';

const Banner = () => {

    return (

        <div>
            <div className=" card-body rounded-xl mb-4 bg-[#D5F5E3] text-center">
                <h1 className="text-4xl font-semibold text-center animate__animated animate__bounce animate__repeat-2"><span className="font-acma text-5xl">Welcome</span> to the best tour <br /> support, and explore your Favourite spot.</h1>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/PqPDL19h/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-spac.jpg" className="w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/FzC5Kf6f/pexels-jdominici-269128.jpg"
                        className="w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/qMQXzsQD/pexels-niko-cezar-1713157-3731615.jpg"
                        className="w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/8PfnvnJX/pexels-pixabay-158398.jpg"
                        className=" w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/SQCmSjZP/pexels-shvets-2574634.jpg"
                        className=" w-full h-[500px] rounded-2xl" />
                    <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;