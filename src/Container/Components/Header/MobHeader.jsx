import React, { useState } from "react";
import './mobheader.css';
import { Link, useNavigate } from "react-router-dom";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import cross from '../../../assests/cross-svgrepo-com.svg.svg';
import dots from '../../../assests/menu-svgrepo-com.svg';
import mainlogo from '../../../assests/updatedlogo.png';

function MobHeader() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState({
        about: false,
        services: false,
        industries: false,
        capabilities: false,
        businessServices: false,
        digitalIT: false,
        accountsPayable: false,
        accountsReceivable: false,
        recordToReport: false
    });
    
    const navigate = useNavigate();

    // About Us Menu Data
    const aboutMenuData = [
        { name: 'About Company', link: '/about-us' },
        { name: 'Our Board Members', link: '/our-board-member' },
        { name: 'Our Leadership', link: '/our-leadership' }
    ];

    // Services Menu Data Structure with Links
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
            ],
            children: {
                'Business Services': {
                    link: '/our-services/capabilities/business-services',
                    items: [
                        { name: 'Accounts Payable', link: '/our-services/capabilities/business-services/accounts-payable' },
                        { name: 'Accounts Receivable', link: '/our-services/capabilities/business-services/accounts-receivable' },
                        { name: 'Record to Report', link: '/our-services/capabilities/business-services/record-to-report' }
                    ],
                    children: {
                        'Accounts Payable': [
                            { name: 'Invoice Validation', link: '/our-services/capabilities/business-services/accounts-payable/invoice-validation' }
                        ],
                        'Accounts Receivable': [],
                        'Record to Report': []
                    }
                },
                'Digital & IT': {
                    link: '/our-services/capabilities/digital-and-it',
                    items: [
                        { name: 'Process Redesigning', link: '/our-services/capabilities/digital-and-it/process-redesigning' },
                        { name: 'Software Development', link: '/our-services/capabilities/digital-and-it/software-development' },
                        { name: 'Process Automation', link: '/our-services/capabilities/digital-and-it/process-automation' },
                        { name: 'Digital Dashboard', link: '/our-services/capabilities/digital-and-it/digital-dashboard' }
                    ],
                    children: {}
                }
            }
        }
    };

    const HandleRedirect = () => {
        navigate('/contact-us');
    };

    const handleSidebarBehaviour = () => {
        setSidebarOpen(!isSidebarOpen);
        // Reset expanded menus when closing sidebar
        if (isSidebarOpen) {
            setExpandedMenus({
                about: false,
                services: false,
                industries: false,
                capabilities: false,
                businessServices: false,
                digitalIT: false,
                accountsPayable: false,
                accountsReceivable: false,
                recordToReport: false
            });
        }
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        setExpandedMenus({
            about: false,
            services: false,
            industries: false,
            capabilities: false,
            businessServices: false,
            digitalIT: false,
            accountsPayable: false,
            accountsReceivable: false,
            recordToReport: false
        });
    };

    const toggleMenu = (menuKey, e) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }));
    };

    const handleLinkClick = (link) => {
        navigate(link);
        closeSidebar();
    };

    return (
        <div className="main-mobheader">
            <div className="mobheader-main">
                <div className="mob-logo">
                    <img src={mainlogo} className='header-logo-img img-fluid' alt="mobile logo" />
                </div>

                <div className="mob-right-section">
                    <div className="mob-hamburger" onClick={handleSidebarBehaviour}>
                        <img
                            src={isSidebarOpen ? cross : dots}
                            className="mob-menu-logo img-fluid"
                            alt="menu"
                        />
                    </div>

                    <div className="innerheader-btn">
                        <button className="header-btn" onClick={HandleRedirect}>Contact Us</button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div className="sidebar-overlay" onClick={closeSidebar}></div>
            )}

            {/* Sidebar */}
            <div className={`mobsidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="mobheader2">
                    <div className="mob-log">
                        <Link to='/' onClick={closeSidebar}>
                            <img src={mainlogo} className='header-logo-img img-fluid' alt="mobile logo" />
                        </Link>
                    </div>
                    <div className="mob-hamburger">
                        <img
                            src={cross}
                            className="mob-menu-logo img-fluid"
                            onClick={closeSidebar}
                            alt="Close"
                        />
                    </div>
                </div>

                <div className="mob-sidebar">
                    <div className="mob-h-menu-items">
                        <ul className="mob-menu-ul">
                            {/* Home */}
                            <li className="mob-m-items" onClick={() => handleLinkClick('/')}>
                                Home
                            </li>

                            {/* About Us - Accordion */}
                            <li className="mob-m-items has-submenu">
                                <div 
                                    className="menu-item-header"
                                    onClick={(e) => toggleMenu('about', e)}
                                >
                                    <span>About Us</span>
                                    <FontAwesomeIcon 
                                        icon={expandedMenus.about ? faChevronDown : faChevronRight} 
                                        className="menu-arrow"
                                    />
                                </div>

                                {/* About Us Submenu */}
                                <ul className={`mob-submenu level-1 ${expandedMenus.about ? 'expanded' : ''}`}>
                                    {aboutMenuData.map((item, index) => (
                                        <li 
                                            key={index}
                                            className="mob-submenu-item"
                                            onClick={() => handleLinkClick(item.link)}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* Services - Main Accordion */}
                            <li className="mob-m-items has-submenu">
                                <div 
                                    className="menu-item-header"
                                    onClick={(e) => toggleMenu('services', e)}
                                >
                                    <span>Our Services</span>
                                    <FontAwesomeIcon 
                                        icon={expandedMenus.services ? faChevronDown : faChevronRight} 
                                        className="menu-arrow"
                                    />
                                </div>

                                {/* Services Submenu */}
                                <ul className={`mob-submenu level-1 ${expandedMenus.services ? 'expanded' : ''}`}>
                                    
                                    {/* Industries */}
                                    <li className="mob-submenu-item has-submenu">
                                        <div 
                                            className="submenu-header"
                                            onClick={(e) => toggleMenu('industries', e)}
                                        >
                                            <span onClick={(e) => {
                                                e.stopPropagation();
                                                handleLinkClick(menuData.Industries.link);
                                            }}>
                                                Industries
                                            </span>
                                            <FontAwesomeIcon 
                                                icon={expandedMenus.industries ? faChevronDown : faChevronRight} 
                                                className="menu-arrow"
                                                onClick={(e) => toggleMenu('industries', e)}
                                            />
                                        </div>

                                        <ul className={`mob-submenu level-2 ${expandedMenus.industries ? 'expanded' : ''}`}>
                                            {menuData.Industries.items.map((item, index) => (
                                                <li 
                                                    key={index}
                                                    className="mob-submenu-item"
                                                    onClick={() => handleLinkClick(item.link)}
                                                >
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    {/* Capabilities */}
                                    <li className="mob-submenu-item has-submenu">
                                        <div 
                                            className="submenu-header"
                                            onClick={(e) => toggleMenu('capabilities', e)}
                                        >
                                            <span onClick={(e) => {
                                                e.stopPropagation();
                                                handleLinkClick(menuData.Capabilities.link);
                                            }}>
                                                Capabilities
                                            </span>
                                            <FontAwesomeIcon 
                                                icon={expandedMenus.capabilities ? faChevronDown : faChevronRight} 
                                                className="menu-arrow"
                                                onClick={(e) => toggleMenu('capabilities', e)}
                                            />
                                        </div>

                                        <ul className={`mob-submenu level-2 ${expandedMenus.capabilities ? 'expanded' : ''}`}>
                                            
                                            {/* Business Services */}
                                            <li className="mob-submenu-item has-submenu">
                                                <div 
                                                    className="submenu-header"
                                                    onClick={(e) => toggleMenu('businessServices', e)}
                                                >
                                                    <span onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleLinkClick('/our-services/capabilities/business-services');
                                                    }}>
                                                        Business Services
                                                    </span>
                                                    <FontAwesomeIcon 
                                                        icon={expandedMenus.businessServices ? faChevronDown : faChevronRight} 
                                                        className="menu-arrow"
                                                        onClick={(e) => toggleMenu('businessServices', e)}
                                                    />
                                                </div>

                                                <ul className={`mob-submenu level-3 ${expandedMenus.businessServices ? 'expanded' : ''}`}>
                                                    
                                                    {/* Accounts Payable */}
                                                    <li className="mob-submenu-item has-submenu">
                                                        <div 
                                                            className="submenu-header"
                                                            onClick={(e) => toggleMenu('accountsPayable', e)}
                                                        >
                                                            <span onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleLinkClick('/our-services/capabilities/business-services/accounts-payable');
                                                            }}>
                                                                Accounts Payable
                                                            </span>
                                                            {menuData.Capabilities.children['Business Services'].children['Accounts Payable'].length > 0 && (
                                                                <FontAwesomeIcon 
                                                                    icon={expandedMenus.accountsPayable ? faChevronDown : faChevronRight} 
                                                                    className="menu-arrow"
                                                                    onClick={(e) => toggleMenu('accountsPayable', e)}
                                                                />
                                                            )}
                                                        </div>

                                                        {menuData.Capabilities.children['Business Services'].children['Accounts Payable'].length > 0 && (
                                                            <ul className={`mob-submenu level-4 ${expandedMenus.accountsPayable ? 'expanded' : ''}`}>
                                                                {menuData.Capabilities.children['Business Services'].children['Accounts Payable'].map((item, index) => (
                                                                    <li 
                                                                        key={index}
                                                                        className="mob-submenu-item"
                                                                        onClick={() => handleLinkClick(item.link)}
                                                                    >
                                                                        {item.name}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>

                                                    {/* Accounts Receivable */}
                                                    <li 
                                                        className="mob-submenu-item"
                                                        onClick={() => handleLinkClick('/our-services/capabilities/business-services/accounts-receivable')}
                                                    >
                                                        Accounts Receivable
                                                    </li>

                                                    {/* Record to Report */}
                                                    <li 
                                                        className="mob-submenu-item"
                                                        onClick={() => handleLinkClick('/our-services/capabilities/business-services/record-to-report')}
                                                    >
                                                        Record to Report
                                                    </li>
                                                </ul>
                                            </li>

                                            {/* Digital & IT */}
                                            <li className="mob-submenu-item has-submenu">
                                                <div 
                                                    className="submenu-header"
                                                    onClick={(e) => toggleMenu('digitalIT', e)}
                                                >
                                                    <span onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleLinkClick('/our-services/capabilities/digital-and-it');
                                                    }}>
                                                        Digital & IT
                                                    </span>
                                                    <FontAwesomeIcon 
                                                        icon={expandedMenus.digitalIT ? faChevronDown : faChevronRight} 
                                                        className="menu-arrow"
                                                        onClick={(e) => toggleMenu('digitalIT', e)}
                                                    />
                                                </div>

                                                <ul className={`mob-submenu level-3 ${expandedMenus.digitalIT ? 'expanded' : ''}`}>
                                                    {menuData.Capabilities.children['Digital & IT'].items.map((item, index) => (
                                                        <li 
                                                            key={index}
                                                            className="mob-submenu-item"
                                                            onClick={() => handleLinkClick(item.link)}
                                                        >
                                                            {item.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            {/* Contact Us */}
                            <li className="mob-m-items" onClick={() => handleLinkClick('/contact-us')}>
                                Contact Us
                            </li>
                        </ul>
                    </div>

                    <div className="mob-s-icons">
                        <h3 className="mob-follow">Follow Us:</h3>
                        <div className='m-social-icons'>
                            <div className="s-icon1">
                                <FontAwesomeIcon icon={faInstagram} className="sicon" />
                            </div>
                            <div className="s-icon2">
                                <FontAwesomeIcon icon={faFacebook} className="sicon" />
                            </div>
                            <div className="s-icon2">
                                <FontAwesomeIcon icon={faTwitter} className="sicon" />
                            </div>
                            <div className="s-icon2">
                                <FontAwesomeIcon icon={faLinkedin} className="sicon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobHeader;