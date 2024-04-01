import { HashLink } from "react-router-hash-link";

const AboutUs = (): JSX.Element => {

    return (
        <>
            <div id="aboutUs" className="abouts">
                <div className="container">
                    <div className="bg_box">
                        <img className="bg_img" src="/assets/img/about-bg.png" alt='' />
                        <div className="text-cnter up_img">
                            <img src="/assets/img/up-text.png" alt='' />
                        </div>
                        <div className="f_bottom1">
                            <img src="/assets/img/abouts1.png" alt='' />
                        </div>
                        <div className="f_bottom1 f_bottom2">
                            <img src="/assets/img/abouts2.png" alt='' />
                        </div>
                        <div className="f_bottom1 f_bottom3">
                            <img src="/assets/img/abouts3.png" alt='' />
                        </div>
                        <div className="f_bottom1 f_bottom4">
                            <img src="/assets/img/abouts4.png" alt='' />
                        </div>
                        <div className="center_top">
                            <img src="/assets/img/rectangle.png" alt='' />
                        </div>
                    </div>


                    <div className="ab_bg">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="about_text br_right">
                                    <h4>About us</h4>
                                    <h2>Grow your net worth by growing your network.</h2>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="about_text">
                                    <p>UpWealth magazine is a premier magazine for entrepreneurs by entrepreneurs. Do you ever wonder how
                                        entrepreneurs become debt-free and financially free while spending time with their loved ones and doing
                                        the thing they enjoy? Well, look no further. UPWealth has all the answers you need. Read from small to
                                        large business owners who have mastered the art of creating and maintaining business systems, sticking
                                        to their visions and persisting in their missions!The power of leveraging other businesses is unmatched.
                                    </p>
                                    <HashLink className="dwonarrow left_margan" to="#contact-section">
                                        <img className="arrow1" src="/assets/img/arrow1.png" alt='' />
                                        <img className="arrow2" src="/assets/img/arrow2.png" alt='' />
                                    </HashLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AboutUs;