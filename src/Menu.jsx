import ButtonLink from './ButtonLink';
import { RxHamburgerMenu } from 'react-icons/rx';

const Menu = () => {

    return (
        <nav className='flex justify-between py-3 w-full static top-0 border-b-2 md:border-transparent border-slate-200'>
            <div className="flex space-x-8 items-center">
                <h1><img className="ml-6" src="./img/Zoom_logo.svg" alt="Zoom Logo" /></h1>
                <ul className="hidden md:flex md:space-x-8 text-zinc-600 font-semibold">
                    <li className="hover:text-zoom-blue"><a href="#">Products</a></li>
                    <li className="hover:text-zoom-blue"><a href="#">Solutions</a></li>
                    <li className="hover:text-zoom-blue"><a href="#">Resources</a></li>
                    <li className="hover:text-zoom-blue"><a href="#">Plans & Pricing</a></li>
                </ul>
            </div>
            <div className='flex justify-end items-center'>

                <ButtonLink title="Contact Sales" link="#" isMenu={true} />
                <ButtonLink title="Sign Up Free" link="#" isMenu={true} />
                <RxHamburgerMenu className='md:hidden text-2xl mr-6 text-zoom-blue' />
            </div>

        </nav>
    )

}

export default Menu;