import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { slidesElement } from '../../config/DataTypes.config';

const Banner = (): JSX.Element => {
    const slides: slidesElement[] = [
        { imgUrl: '/assets/img/1.png', slideClass: 'one' },
        { imgUrl: '/assets/img/2.png', slideClass: 'two' },
        { imgUrl: '/assets/img/3.png', slideClass: 'three' },
        { imgUrl: '/assets/img/4.png', slideClass: 'four' },
        { imgUrl: '/assets/img/5.png', slideClass: 'five' }
    ];

    const initialSlideIndex = Math.floor(slides.length / 2);
    const swiperRef = useRef(null);

    // useEffect to control the slides   
    useEffect(() => {
        if (swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true, // Center the active slide 
                slidesPerView: 'auto', // Number of slides per view                
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 1000,
                    modifier: 0.8,
                    slideShadows: false,
                },
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                },
                loop: true,
                initialSlide: initialSlideIndex,
            });
            return () => {
                swiper.destroy();
            };
        }
    }, [initialSlideIndex]);


    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="text_h1">
                                <h1>Discover the Latest Issue of
                                    <span className="up_1"> Upwealth</span>
                                    <span className="ma_1"> Magazine</span>
                                </h1>
                                <p>Stay informed with our insightful articles and expert advice.</p>
                                <Link className="subscribe" to="#">Subscribe Now!
                                    <img className="h_hover" src="/assets/img/right1.png" alt='' />
                                </Link>
                                {/* Link to the AboutUs section */}
                                <HashLink className="dwonarrow" to="#aboutUs">
                                    <img className="arrow1" src="/assets/img/arrow1.png" alt='' />
                                    <img className="arrow2" src="/assets/img/arrow2.png" alt='' />
                                </HashLink>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="swiper"
                                style={{
                                    width: 'auto',
                                    overflow: 'hidden',
                                }}
                                ref={swiperRef}>
                                <div className="swiper-wrapper">
                                    {
                                        slides?.map((item, index) => {
                                            return (
                                                <div key={index}
                                                    className="swiper-slide"
                                                    // className={`swiper-slide swiper-slide--${item?.slideClass} bet_bg`}    
                                                    style={{ backgroundImage: `url(${item?.imgUrl})`, width: "420px", height: "800px", overflow: 'hidden', }}
                                                >
                                                    <div></div>
                                                </div>)
                                        })
                                    }
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;