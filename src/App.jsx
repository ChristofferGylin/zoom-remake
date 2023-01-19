import { RxHamburgerMenu } from 'react-icons/rx';
import { FaGraduationCap } from 'react-icons/fa';
import Card from './Card';

const cards = [
  { icon: <FaGraduationCap />, title: 'Education' },
  { icon: <FaGraduationCap />, title: 'Education' },
]

function App() {


  return (
    <div className="flex font-open-sans text-zoom-blue">
      <nav>
        <RxHamburgerMenu className='md:hidden text-lg' />
      </nav>
      <Card icon={<FaGraduationCap />} title="Education" />

      {cards.map((card, index) => {
        return (
          <Card key={`card${index}`} icon={card.icon} title={card.title} />
        )
      })}

    </div>
  )
}

export default App
