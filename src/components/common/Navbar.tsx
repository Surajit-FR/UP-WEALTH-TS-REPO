import { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../core/Banner';
import { HashLink } from 'react-router-hash-link';

const Navbar = (): JSX.Element => {
    const [activeLink, setActiveLink] = useState('Home'); // Default active link is Home

    const handleLinkClick = (linkName: string) => {
        setActiveLink(linkName);
    };

    return (
        <>
            <div className="top_div">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand" to="#">
                            <img src="/assets/img/logo.png" alt='' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item">
                                    <Link className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} aria-current="page" to="#" onClick={() => handleLinkClick('Home')}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <HashLink className={`nav-link ${activeLink === 'Contact Us' ? 'active' : ''}`} to="#contact-section" onClick={() => handleLinkClick('Contact Us')}>Contact Us</HashLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link className="login" to="#">Log In</Link>
                            </form>
                        </div>
                    </div>
                </nav>

                {/* Banner Comp. */}
                <Banner />
            </div>
        </>
    )
};

export default Navbar;