import { RxHamburgerMenu } from 'react-icons/rx';

const Menu = () => {

    return (
        <nav className='flex justify-between mt-6 w-full'>
            <div className="flex space-x-8 items-center">
                <img className="ml-6" src="./img/Zoom_logo.svg" alt="Zoom Logo" />
                <ul className="hidden md:flex md:space-x-8 text-zinc-500 font-semibold">
                    <li className="hover:text-zoom-blue"><a href="#">Products</a></li>
                    <li className="hover:text-zoom-blue"><a href="#">Solutions</a></li>
                    <li className="hover:text-zoom-blue"><a href="#">Resources</a></li>
                    <li className="hover:text-zoom-blue"><a href="#">Plans & Pricing</a></li>
                </ul>
            </div>
            <div>
                <RxHamburgerMenu className='md:hidden text-2xl mr-6' />
            </div>

        </nav>
    )

}

export default Menu;