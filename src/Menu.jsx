import ButtonLink from './ButtonLink';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowDown } from 'react-icons/io';
import MobileMenu from './MobileMenu';
import toggleMobileMenu from './toggleMobileMenu';

const Menu = () => {

    return (
        <nav className='py-3 w-full fixed top-0 border-b-2 md:border-transparent border-slate-200 text-zinc-600 font-semibold bg-slate-50'>
            <div className='flex justify-between'>
                <div className="flex space-x-8 items-center">
                    <h1><img className="ml-6" src="./img/Zoom_logo.svg" alt="Zoom Logo" /></h1>
                    <ul className="hidden md:flex md:space-x-6">
                        <li className="group hover:text-zoom-blue"><a href="#">Products<IoIosArrowDown className='text-sm sm:text-base lg:text-lg xl:text-xl fill-transparent transition ease-in-out delay-150 inline -translate-x-2 group-hover:fill-zoom-blue group-hover:translate-x-2 group-hover:inline duration-300' /></a></li>
                        <li className="group hover:text-zoom-blue"><a href="#">Solutions<IoIosArrowDown className='text-sm sm:text-base lg:text-lg xl:text-xl fill-transparent transition ease-in-out delay-150 inline -translate-x-2 group-hover:fill-zoom-blue group-hover:translate-x-2 group-hover:inline duration-300' /></a></li>
                        <li className="group hover:text-zoom-blue"><a href="#">Resources<IoIosArrowDown className='text-sm sm:text-base lg:text-lg xl:text-xl fill-transparent transition ease-in-out delay-150 inline -translate-x-2 group-hover:fill-zoom-blue group-hover:translate-x-2 group-hover:inline duration-300' /></a></li>
                        <li className="hover:text-zoom-blue"><a href="#">Plans & Pricing</a></li>
                    </ul>
                </div>
                <div className='flex justify-end items-center'>

                    <ButtonLink title="Contact Sales" link="#" isMenu={true} />
                    <ButtonLink title="Sign Up Free" link="#" isMenu={true} />
                    <RxHamburgerMenu className='md:hidden text-2xl mr-6 text-zoom-blue' onClick={toggleMobileMenu} />
                </div>
            </div>
            <MobileMenu />
        </nav>
    )

}

export default Menu;