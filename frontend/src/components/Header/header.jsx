import {useEffect, useRef} from "react";
import { NavLink , Link } from "react-router-dom";
import Logo from '../../assets/images/logo-removebg.png'
import userImage from '../../assets/images/avatar-icon.png';
import {BiMenu} from 'react-icons/bi';

const navLinks=[
    {
        path:'/',
        display:'Home'
    },
    {
        path:'/salon',
        display:'Find a salon'
    },
    // {
    //     path:'/register',
    //     display:'Register your accout'
    // },
    {
        path:'/services',
        display:'Our Service'
    },
    // {
    //     path:'/login',
    //     display:'Login'
    // }, 
];




// header of the the website 
const Header = ()=>{

const headerRef= useRef(null);
const menuRef= useRef(null);


const handleStickyHeader= ()=>{
    window.addEventListener('scroll', ()=>{
        if (document.body.scrollTop >80  || document.documentElement.scrollTop >80) {

            headerRef.current.classList.add('sticky__header');  
        }else{
            headerRef.current.classList.remove('sticky__header');  
        }
    })
    
}

     useEffect(()=>{
        handleStickyHeader()

        return()=>window.removeEventListener('scroll',handleStickyHeader)
     })

     const toggleMenu= ()=> menuRef.current.classList.toggle('show__menu')

 
    return(
        <>
          <header className="header flex items-center bg-white" ref={headerRef}>
             <div className="container">
            <div className="flex items-center justify-between">

                {/*_____logo_____*/}
                <div>
                    <img src={Logo} alt="beautyBook" width="80px" height="60px" />
                </div>
               
                {/*_____menu_____*/}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                  
                  <ul className="menu flex items-center gap-[2.7rem]">
                     {
                        navLinks.map((link, index)=><li key={index}>
                        <NavLink to={link.path}className={navClass=> navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]': 'text-textColor text-[16px] leading-7 font-[500]'}> {link.display}</NavLink>
                        </li>)
                     }  
                  </ul>
                </div>
                 {/* nav right or sidebar */}
                 
                 <div className="flex items-center gap-4">
                       
                       <div className="hidden">
                         <Link to='/'>
                          <figure className="w-[35px] h-[35px] rounded-full">
                           <img src={userImage} className="w-full rounded-full" alt="" />
                          </figure>
                         </Link>
                       </div>

                       <Link to='/register'>
                        <button className="bg-primaryColor py-2 px-6 flex items-center text-white font-[600] h-[44px] justify-center rounded-[50px]">
                            Register
                        </button>
                       
                       </Link> 
                        <span className="md:hidden" onClick={toggleMenu} >
                            <BiMenu className='cursor-pointer w-6 h-6'/>
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