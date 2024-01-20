import { useEffect, useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from '../../assets/images/logo-removebg.png'
import { BiMenu } from 'react-icons/bi';
import { authContext } from "../../context/AuthContext.jsx";
import { FaBell } from 'react-icons/fa';

const navLinks = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/salon',
        display: 'Find a salon'
    },
    // {
    //     path:'/register',
    //     display:'Register your accout'
    // },
    {
        path: '/services',
        display: 'Our Service'
    },
    // {
    //     path:'/login',
    //     display:'Login'
    // }, 
];




// header of the the website 
const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const { user, token, salon, role } = useContext(authContext)


    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        })

    }

    useEffect(() => {
        handleStickyHeader()

        return () => window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')


    return (
        <>
            <header className="header flex items-center bg-white" ref={headerRef}>
                <div className="container">
                    <div className="flex items-center justify-between">

                        {/*_____logo_____*/}
                        <div>
                            <img src={Logo} alt="beautyBook" width="100px" height="80px" />
                        </div>

                        {/*_____menu_____*/}
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>

                            <ul className="menu flex items-center gap-[2.7rem]">
                                {
                                    navLinks.map((link, index) => <li key={index}>
                                        <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-btnColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500]'}> {link.display}</NavLink>
                                    </li>)
                                }
                            </ul>
                        </div>
                        {/* nav right or sidebar */}

                        <div className="flex items-center gap-4">

                             {/* Placeholder for notification icon (visible before and after login) */}
                             <span className="text-btnColor">
                                <FaBell className="w-6 h-6" />
                            </span>
                            { // in salon model role = ['salo', 'admin'] for salon
                                // letter we will do this 
                                // yahan pr updated data show krna ha 
                                token && (user || salon) && role ?

                                    <div>
                                        <Link to={`/${role === 'salon' ? 'salon/profile' : 'user/profile'}/${user?._id || salon?._id}`}>
                                            <figure className="w-[35px] h-[35px] rounded-full">
                                                <img src={user?.photo || salon?.photo} className="w-full rounded-full" alt="img" />
                                            </figure>
                                            <h2>{user?.name || salon?.ownerName}</h2>
                                        </Link>
                                    </div> : (

                
                                        <>
                                            <Link to='/login'>
                                                <button className="bg-btnColor py-2 px-6 flex items-center text-white font-[600] h-[44px] justify-center rounded-[50px]">
                                                    Login
                                                </button>
                                            </Link>
                                           
                                        </>

                                    )}

                            <span className="md:hidden" onClick={toggleMenu} >
                                <BiMenu className='cursor-pointer w-6 h-6' />
                            </span>
                        </div>



                        {/* container ended here */}
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header