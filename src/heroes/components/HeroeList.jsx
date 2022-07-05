import { getheroesByPublisher } from '../helpers/getHeoresByPublisher'

export const HeroeList = ({ publisher }) => {
    const heroes = getheroesByPublisher(publisher)

    return (
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.id}> {hero.superhero} </li>
                ))
            }
        </ul>
    )
}
