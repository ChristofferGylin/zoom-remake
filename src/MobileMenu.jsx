import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io';


const MobileMenu = () => {

    return (
        <div id="mobileMenuContainer" className='w-full md:hidden text-base'>
            <div id="mobileMenu" className='h-screen w-full bg-slate-50 hidden'>
                <ul className='flex flex-col justify-start space-y-4 w-4/5 mx-auto mt-8'>
                    <li className='flex w-full'> <BiSearch /><a href="#">Search</a></li>
                    <li className='flex justify-between items-center w-full border-b border-slate-300 py-4 hover:text-zoom-blue hover:cursor-pointer'><button>Products</button><IoIosArrowDown className='text-zoom-blue' /></li>
                    <li className='flex justify-between items-center w-full border-b border-slate-300 py-4 hover:text-zoom-blue hover:cursor-pointer'><button>Solutions</button><IoIosArrowDown className='text-zoom-blue' /></li>
                    <li className='flex justify-between items-center w-full border-b border-slate-300 py-4 hover:text-zoom-blue hover:cursor-pointer'><button>Resources</button><IoIosArrowDown className='text-zoom-blue' /></li>
                    <li className='hover:text-zoom-blue'><a href="">Plans & Pricing</a></li>
                </ul>
            </div>
        </div>
    )

}

export default MobileMenu;