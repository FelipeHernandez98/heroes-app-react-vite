import { getheroesByPublisher } from '../helpers/getHeoresByPublisher'
import { HeroCard } from './HeroCard'

export const HeroeList = ({ publisher }) => {
    const heroes = getheroesByPublisher(publisher)

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <HeroCard 
                    key={hero.id}
                    hero={ hero }/>
                ))
            }
        </div>
    )
}
