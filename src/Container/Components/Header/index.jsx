import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import MobHeader from './MobHeader';
import mainlogo from '../../../assests/updatedlogo.png';

function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedLevel1, setSelectedLevel1] = useState('Industries');
    const [selectedLevel2, setSelectedLevel2] = useState(null);
    const [selectedLevel3, setSelectedLevel3] = useState(null);
    const menuRef = useRef(null);

    // Menu Data Structure with Links
    const menuData = {
        Industries: {
            link: 'our-services/industries',
            items: [
                { name: 'Banking and Capital Markets', link: 'our-services/industries/banking-capital-markets' },
                { name: 'Insurance', link: 'our-services/industries/insurance' },
                { name: 'Consumer Goods and Retail', link: 'our-services/industries/consumer-goods-retail' },
                { name: 'Life Sciences & Healthcare', link: 'our-services/industries/life-sciences-healthcare' },
                { name: 'Manufacturing', link: 'our-services/industries/manufacturing' },
                { name: 'High Tech, Media, Software', link: 'our-services/industries/high-tech-media-software' }
            ],
            children: {}
        },
        Capabilities: {
            link: 'our-services/capabilities',
            items: [
                { name: 'Business Services', link: 'our-services/capabilities/business-services' },
                { name: 'Digital & IT', link: 'our-services/capabilities/digital-and-it' }
            ],
            children: {
                'Business Services': {
                    link: 'our-services/capabilities/business-services',
                    items: [
                        { name: 'Accounts Payable', link: 'our-services/capabilities/business-services/accounts-payable' },
                        { name: 'Accounts Receivable', link: 'our-services/capabilities/business-services/accounts-receivable' },
                        { name: 'Record to Report', link: 'our-services/capabilities/business-services/record-to-report' }
                    ],
                    children: {
                        'Accounts Payable': [
                            { name: 'Invoice Validation', link: 'our-services/capabilities/business-services/accounts-payable/invoice-validation' }
                        ],
                        'Accounts Receivable': [],
                        'Record to Report': []
                    }
                },
                'Digital & IT': {
                    link: '/capabilities/digital-and-it',
                    items: [
                        { name: 'Process Redesigning', link: 'our-services/capabilities/digital-and-it/process-redesigning' },
                        { name: 'Software Development', link: 'our-services/capabilities/digital-and-it/software-development' },
                        { name: 'Process Automation', link: 'our-services/capabilities/digital-and-it/process-automation' },
                        { name: 'Digital Dashboard', link: 'our-services/capabilities/digital-and-it/digital-dashboard' }
                    ],
                    children: {}
                }
            }
        }
    };

    // Reset selections when level 1 changes
    useEffect(() => {
        if (selectedLevel1 === 'Industries') {
            setSelectedLevel2(menuData.Industries.items[0]?.name);
            setSelectedLevel3(null);
        } else if (selectedLevel1 === 'Capabilities') {
            setSelectedLevel2(menuData.Capabilities.items[0]?.name);
            const firstChild = menuData.Capabilities.children['Business Services'];
            if (firstChild && firstChild.items.length > 0) {
                setSelectedLevel3(firstChild.items[0]?.name);
            }
        }
    }, [selectedLevel1]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleServiceClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
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

    // Get Level 3 items
    const getLevel3Items = () => {
        if (selectedLevel1 === 'Capabilities' && selectedLevel2) {
            const children = menuData.Capabilities.children[selectedLevel2];
            if (children) {
                return children.items || [];
            }
        }
        return [];
    };

    // Get Level 4 items
    const getLevel4Items = () => {
        if (selectedLevel1 === 'Capabilities' && selectedLevel2 && selectedLevel3) {
            const level2Children = menuData.Capabilities.children[selectedLevel2];
            if (level2Children && level2Children.children && level2Children.children[selectedLevel3]) {
                return level2Children.children[selectedLevel3] || [];
            }
        }
        return [];
    };

    // Check if item has children
    const hasChildren = (level, itemName) => {
        if (level === 1) {
            return menuData[itemName]?.items?.length > 0;
        }
        if (level === 2 && selectedLevel1 === 'Capabilities') {
            return menuData.Capabilities.children[itemName]?.items?.length > 0;
        }
        if (level === 3 && selectedLevel1 === 'Capabilities' && selectedLevel2) {
            const level2Children = menuData.Capabilities.children[selectedLevel2];
            return level2Children?.children?.[itemName]?.length > 0;
        }
        return false;
    };

    // Handle Level 1 Click
    const handleLevel1Click = (item, link) => {
        setSelectedLevel1(item);
        navigate(link);
    };

    // Handle Level 2 Click
    const handleLevel2Click = (item, link) => {
        setSelectedLevel2(item.name);
        setSelectedLevel3(null);
        navigate(item.link);
    };

    // Handle Level 3 Click
    const handleLevel3Click = (item) => {
        setSelectedLevel3(item.name);
        navigate(item.link);
    };

    // Handle Level 4 Click
    const handleLevel4Click = (item) => {
        navigate(item.link);
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className='header-main' ref={menuRef}>
                <div className='header-section'>
                    <div className='headers'>
                        <div className='innerheader-logo'>
                            <img src={mainlogo} className='header-logo-img img-fluid' alt="logo" />
                        </div>
                        <div className='innerheader-items'>
                            <ul className='innerheader-ul'>
                                <Link to='/home'><li className='innerheader-items'>Home</li></Link>
                                <Link to='/about-us'><li className='innerheader-items'>About Us</li></Link>
                                {/* <Link to='/blogs'><li className='innerheader-items'>Blogs</li></Link> */}
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

                {/* MEGA MENU DROPDOWN */}
                {isMenuOpen && (
                    <div className='mega-menu-wrapper'>
                        <div className='mega-menu-container'>
                            
                            {/* Column 1 - Main Categories */}
                            <div className='mega-column'>
                                <h4 className='mega-column-title'>Services</h4>
                                <ul className='mega-list'>
                                    {Object.keys(menuData).map((item) => (
                                        <li 
                                            key={item}
                                            className={`mega-item ${selectedLevel1 === item ? 'active' : ''}`}
                                            onClick={() => handleLevel1Click(item, menuData[item].link)}
                                        >
                                            <span className='mega-item-text'>{item}</span>
                                            {hasChildren(1, item) && <span className='arrow'>→</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2 - Sub Categories */}
                            <div className='mega-column'>
                                <h4 className='mega-column-title'>{selectedLevel1}</h4>
                                <ul className='mega-list'>
                                    {getLevel2Items().map((item) => (
                                        <li 
                                            key={item.name}
                                            className={`mega-item ${selectedLevel2 === item.name ? 'active' : ''}`}
                                            onClick={() => handleLevel2Click(item)}
                                        >
                                            <span className='mega-item-text'>{item.name}</span>
                                            {selectedLevel1 === 'Capabilities' && hasChildren(2, item.name) && (
                                                <span className='arrow'>→</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 3 - Level 3 (Only for Capabilities) */}
                            {selectedLevel1 === 'Capabilities' && getLevel3Items().length > 0 && (
                                <div className='mega-column'>
                                    <h4 className='mega-column-title'>{selectedLevel2}</h4>
                                    <ul className='mega-list'>
                                        {getLevel3Items().map((item) => (
                                            <li 
                                                key={item.name}
                                                className={`mega-item ${selectedLevel3 === item.name ? 'active' : ''}`}
                                                onClick={() => handleLevel3Click(item)}
                                            >
                                                <span className='mega-item-text'>{item.name}</span>
                                                {hasChildren(3, item.name) && <span className='arrow'>→</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Column 4 - Level 4 (Only if exists) */}
                            {selectedLevel1 === 'Capabilities' && getLevel4Items().length > 0 && (
                                <div className='mega-column'>
                                    <h4 className='mega-column-title'>{selectedLevel3}</h4>
                                    <ul className='mega-list'>
                                        {getLevel4Items().map((item) => (
                                            <li 
                                                key={item.name} 
                                                className='mega-item'
                                                onClick={() => handleLevel4Click(item)}
                                            >
                                                <span className='mega-item-text'>{item.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                )}
            </div>
            <MobHeader />
        </>
    );
}

export default Header;