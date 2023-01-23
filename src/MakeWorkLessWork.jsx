import { IoIosArrowForward } from 'react-icons/io';

const MakeWorkLessWork = () => {

    return (
        <section className="flex flex-col items-center w-full bg-make-work-blue text-slate-100 p-6 my-6 mx-auto">

            <div className="flex justify-center"><img className="h-2/3 w-2/3" src="./img/zoom-wheel.png" alt="Zoom Product Wheel" /></div>
            <article className="flex flex-col space-y-4">
                <h2 className="text-xl font-bold">Make work less work</h2>
                <p className=" font-semibold">Securely connect and collaborate so you can work better together. Simple to manage and delightful to use, Zoom powers the modern workforce.</p>
                <a className="group font-bold" href="#">Discover the Possibilities <IoIosArrowForward className='text-sm sm:text-base lg:text-lg xl:text-xl fill-transparent transition ease-in-out delay-150 inline -translate-x-2 group-hover:fill-slate-100 group-hover:translate-x-2 group-hover:inline duration-300' /></a>
            </article>

        </section>
    )



}

export default MakeWorkLessWork;