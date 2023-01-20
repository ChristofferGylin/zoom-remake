import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowForward } from 'react-icons/io';
import ButtonLink from "./ButtonLink";

const Hero = () => {

    return (
        <header className="flex justify-between">
            <div className="w-3/5 tracking-wide">
                <div className="flex flex-col justify-center space-y-4 mx-6 h-full font-semibold">
                    <h2 class="text-slate-900 text-3xl font-bold">One platform<br />
                        to <span className="text-zoom-blue">connect</span></h2>

                    <p>
                        Bring teams together, reimagine workspaces, engage new audiences, and delight your customers - all on the Zoom platform you know and love.
                    </p>
                    <div className="py-2"><ButtonLink isSolid={true} link="#" title="Plans & Pricing" />
                        <a href="#" className="group text-zoom-blue">Sign Up, It´s Free <IoIosArrowForward className='text-lg fill-transparent transition ease-in-out delay-150 inline -translate-x-2 group-hover:fill-zoom-blue group-hover:translate-x-2 group-hover:inline duration-300' /></a></div>

                </div>

            </div>
            <div className="h-96 w-96 m-6 rounded-xl bg-cover bg-left repeat-norepeat bg-[url('./img/woman-macbook.jpg')]"></div>

        </header>
    )

}

export default Hero;