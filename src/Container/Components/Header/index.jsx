import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MobHeader from './MobHeader';
import mainlogo from '../../../assests/updatedlogo.png';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [selectedLevel1, setSelectedLevel1] = useState('Industries');
    
    const headerRef = useRef(null);

    // About Us Menu Data
    const aboutMenuData = [
        { name: 'About Company', link: '/about-us' },
        { name: 'Our Board Members', link: '/our-board-member' },
        { name: 'Our Leadership', link: '/our-leadership' }
    ];

    // Simplified Services Menu Data - Only 2 levels
    const menuData = {
        Industries: {
            link: '/our-services/industries',
            items: [
                { name: 'Consumer Goods and Retail', link: '/our-services/industries/consumer-goods-retail' },
                { name: 'Manufacturing', link: '/our-services/industries/manufacturing' },
                { name: 'Life Sciences & Healthcare', link: '/our-services/industries/life-sciences-healthcare' },
                { name: 'Private Equity', link: '/our-services/industries/private-equity' },
                { name: 'Insurance', link: '/our-services/industries/insurance' },
                { name: 'Banking', link: '/our-services/industries/banking' },
                { name: 'High Tech, Media, Software', link: '/our-services/industries/high-tech-media-software' }
            ]
        },
        Capabilities: {
            link: '/our-services/capabilities',
            items: [
                { name: 'Business Services', link: '/our-services/capabilities/business-services' },
                { name: 'Digital & IT', link: '/our-services/capabilities/digital-and-it' }
            ]
        }
    };

    // Auto close all dropdowns when URL changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsAboutOpen(false);
    }, [location.pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsAboutOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                setIsAboutOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, []);

    // Handle Services Click
    const handleServiceClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsAboutOpen(false);
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle About Click
    const handleAboutClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMenuOpen(false);
        setIsAboutOpen(!isAboutOpen);
    };

    // Handle About Menu Item Click
    const handleAboutItemClick = (e, link) => {
        e.stopPropagation();
        navigate(link);
        setIsAboutOpen(false);
    };

    const HandleRedirect = () => {
        navigate('/contact-us');
    };

    // Get Level 2 items
    const getLevel2Items = () => {
        if (selectedLevel1 && menuData[selectedLevel1]) {
            return menuData[selectedLevel1].items || [];
        }
        return [];
    };

    // Handle Level 1 Click (Industries/Capabilities) - Just switch tabs
    const handleLevel1Click = (e, item) => {
        e.stopPropagation();
        setSelectedLevel1(item);
    };

    // Handle Level 2 Click - Navigate and close menu
    const handleLevel2Click = (e, item) => {
        e.stopPropagation();
        navigate(item.link);
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className='header-main' ref={headerRef}>
                <div className='header-section'>
                    <div className='headers'>
                        <div className='innerheader-logo'>
                            <img src={mainlogo} className='header-logo-img img-fluid' alt="logo" />
                        </div>
                        <div className='innerheader-items'>
                            <ul className='innerheader-ul'>
                                <Link to='/home'><li className='innerheader-items'>Home</li></Link>
                                
                                {/* ABOUT US DROPDOWN */}
                                <li 
                                    className={`innerheader-items dropdown ${isAboutOpen ? 'active' : ''}`}
                                    onClick={handleAboutClick}
                                >
                                    About Us {isAboutOpen ? '▲' : '▼'}
                                </li>

                                {/* OUR SERVICES DROPDOWN */}
                                <li 
                                    className={`innerheader-items dropdown ${isMenuOpen ? 'active' : ''}`}
                                    onClick={handleServiceClick}
                                >
                                    Our Services {isMenuOpen ? '▲' : '▼'}
                                </li>
                                
                                <Link to='/contact-us'><li className='innerheader-items'>Contact Us</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='innerheader-btn'>
                        <button className='header-btn' onClick={HandleRedirect}>Contact Us</button>
                    </div>
                </div>

                {/* ABOUT US DROPDOWN MENU */}
                {isAboutOpen && (
                    <div className='about-dropdown-wrapper'>
                        <div className='about-dropdown-container'>
                            <div className='about-dropdown-column'>
                                <h4 className='about-dropdown-title'>About Us</h4>
                                <ul className='about-dropdown-list'>
                                    {aboutMenuData.map((item) => (
                                        <li 
                                            key={item.name}
                                            className='about-dropdown-item'
                                            onClick={(e) => handleAboutItemClick(e, item.link)}
                                        >
                                            <span className='about-dropdown-text'>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* SIMPLIFIED MEGA MENU - 2 LEVELS ONLY */}
                {isMenuOpen && (
                    <div className='mega-menu-wrapper'>
                        <div className='mega-menu-container'>
                            
                            {/* Column 1 - Main Categories (Industries/Capabilities) */}
                            <div className='mega-column'>
                                <h4 className='mega-column-title'>Services</h4>
                                <ul className='mega-list'>
                                    {Object.keys(menuData).map((item) => (
                                        <li 
                                            key={item}
                                            className={`mega-item ${selectedLevel1 === item ? 'active' : ''}`}
                                            onClick={(e) => handleLevel1Click(e, item)}
                                        >
                                            <span className='mega-item-text'>{item}</span>
                                            <span className='arrow'>→</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2 - Level 2 Items (Final clickable items) */}
                            <div className='mega-column'>
                                <h4 className='mega-column-title'>{selectedLevel1}</h4>
                                <ul className='mega-list'>
                                    {getLevel2Items().map((item) => (
                                        <li 
                                            key={item.name}
                                            className='mega-item'
                                            onClick={(e) => handleLevel2Click(e, item)}
                                        >
                                            <span className='mega-item-text'>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                )}
            </div>
            <MobHeader />
        </>
    );
}

export default Header;