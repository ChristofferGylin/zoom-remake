import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io';


const MobileMenu = () => {

    return (
        <div id="mobileMenuContainer" className='w-full md:hidden text-base'>
            <div id="mobileMenu" className='h-screen w-full bg-slate-50 hidden'>
                <ul className='flex flex-col justify-start space-y-4 w-4/5 mx-auto mt-8'>
                    <li className='flex w-full hover:text-zoom-blue hover:cursor-pointer'> <BiSearch /><a href="#">Search</a></li>
                    <li className='group flex justify-between items-center w-full border-b border-slate-300 py-4'><button className='group-hover:text-zoom-blue group-hover:cursor-pointer'>Products</button><IoIosArrowDown className='group-hover:text-zoom-blue group-hover:cursor-pointer' /></li>
                    <li className='group flex justify-between items-center w-full border-b border-slate-300 py-4'><button className='group-hover:text-zoom-blue group-hover:cursor-pointer'>Solutions</button><IoIosArrowDown className='group-hover:text-zoom-blue group-hover:cursor-pointer' /></li>
                    <li className='group flex justify-between items-center w-full border-b border-slate-300 py-4'><button className='group-hover:text-zoom-blue group-hover:cursor-pointer'>Resources</button><IoIosArrowDown className='group-hover:text-zoom-blue group-hover:cursor-pointer' /></li>
                    <li className='hover:text-zoom-blue'><a href="">Plans & Pricing</a></li>
                </ul>
            </div>
        </div>
    )

}

export default MobileMenu;