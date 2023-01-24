
import { FaGraduationCap } from 'react-icons/fa';
import Card from './Card';
import Hero from './Hero';
import MakeWorkLessWork from './MakeWorkLessWork';
import Menu from './Menu';
import PowerOrganizations from './PowerOrganizations';

const cards = [
  { icon: <FaGraduationCap />, title: 'Education' },
  { icon: <FaGraduationCap />, title: 'Education' },
]

function App() {


  return (


    <div className="font-open-sans text-sm sm:text-base lg:text-lg xl:text-xl text-slate-900">
      <div className='max-w-[1440px] mx-auto'>
        <Menu />
        <Hero />
      </div>
      <MakeWorkLessWork />
      <div className='max-w-[1440px] mx-auto'>
        <PowerOrganizations />
      </div>
      {/* <Card icon={<FaGraduationCap />} title="Education" />

      {cards.map((card, index) => {
        return (
          <Card key={`card${index}`} icon={card.icon} title={card.title} />
        )
      })} */}

    </div>
  )
}

export default App
