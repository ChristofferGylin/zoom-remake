import ButtonLink from './ButtonLink';
import Card from './Card';
import { SlGraduation } from 'react-icons/sl';
import { GiMoneyStack } from 'react-icons/gi';
import { HiLibrary } from 'react-icons/hi';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { GiCardboardBox } from 'react-icons/gi';
import { GiShoppingCart } from 'react-icons/gi';

const PowerOrganizations = () => {

    return (
        <section className="flex flex-col gap-16 items-center sm:flex-row w-full p-6 my-6 mx-auto">
            <div className='w-full md:w-1/2'>
                <article className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold text-gray-700">Powering organizations across industries and geographies</h2>
                    <p className=" font-semibold text-gray-600">Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.</p>
                    <ButtonLink isSolid={true} link="#" title="Explore Industry Solutions" />
                </article>
            </div>

            <div className='w-full md:w-1/2 text-lg font-bold lg:text-xl xl:text-2xl'>
                <div className="grid grid-cols-2 grid-rows-3 gap-2">
                    <Card icon={<SlGraduation />} title="Education" />
                    <Card icon={<GiMoneyStack />} title="Financial Services" />
                    <Card icon={<HiLibrary />} title="Government" />
                    <Card icon={<FaBriefcaseMedical />} title="Healthcare" />
                    <Card icon={<GiCardboardBox />} title="Manufacturing" />
                    <Card icon={<GiShoppingCart />} title="Retail" />
                </div>
            </div>



        </section>
    )

}

export default PowerOrganizations;