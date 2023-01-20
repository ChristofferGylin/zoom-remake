
import { FaGraduationCap } from 'react-icons/fa';
import Card from './Card';
import Hero from './Hero';
import Menu from './Menu';

const cards = [
  { icon: <FaGraduationCap />, title: 'Education' },
  { icon: <FaGraduationCap />, title: 'Education' },
]

function App() {


  return (


    <div className="max-w-[1440px] mx-auto font-open-sans text-sm sm:text-base lg:text-lg xl:text-xl text-slate-900">
      <Menu />
      <Hero />
      <nav>

      </nav>
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
