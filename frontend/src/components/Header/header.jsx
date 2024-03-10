import React, { useState, useRef, useContext, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from '../../assets/images/logo-removebg.png';
import { BiMenu } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { authContext } from "../../context/AuthContext.jsx";


const navLinks = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/salon',
        display: 'Find a salon'
    },
    {
        path: '/services',
        display: 'Our Service'
    },
    {
        path: '/aboutus',
        display: 'About Us'
    },
    {
        path: '/blog',
        display: 'Blogs'
    },
];

const Header = () => {
    const [selectedOption, setSelectedOption] = useState('user');
    const menuRef = useRef(null);
    const { user, salon, token, role } = useContext(authContext);
    const headerRef = useRef(null);
    const location = useLocation();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleStickyHeader);
        };
    }, []);

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu');
    };

    const closeMenu = () => {
        menuRef.current.classList.remove('show__menu');
    };

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            closeMenu();
        }
    });

    return (
        <header className="header flex items-center bg-white" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="max-w-[90%]">
                        <Link to={"/"}>
                        <img src={Logo} alt="beautyBook" className="logo w-28 h-24 md:w-32 md:h-32 sm:w-40 sm:h-40 " />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={link.path} className="text-textColor text-[16px] leading-7 font-[500]"
                                        activeClassName="text-pink-500"
                                        isActive={() => link.path === location.pathname}
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Login Button with Option Selection */}
                    <div className="flex items-center gap-4">
                        <span className="text-btnColor">

                        </span>
                        {token && (user || salon) && role ?
                            (
                                <div className="flex items-center">
                                    <Link to={`/${role === 'salon' ? 'salon/profile' : 'user/profile'}/${user?._id || salon?._id}`} className="flex items-center">
                                        <figure className="w-10 h-10 rounded-full overflow-hidden mr-2">
                                            <img src={user?.photo || salon?.photo} className="w-full h-full object-cover" alt="img" />
                                        </figure>
                                        <h2 className="py-2 px-2 text-sm">{user?.name || salon?.ownerName}</h2>
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <select value={selectedOption} onChange={handleOptionChange}>
                                        <option value="user">Login as User</option>
                                        <option value="salon">Login as Salon</option>
                                    </select>
                                    <Link to={selectedOption === 'salon' ? '/salonlogin' : '/login'}>
                                        <button className="bg-btnColor py-2 px-4 flex items-center text-white font-[600] h-[34px] justify-center rounded-[50px]">
                                            Login
                                        </button>
                                    </Link>
                                </>
                            )
                        }
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className='cursor-pointer w-6 h-6' />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
