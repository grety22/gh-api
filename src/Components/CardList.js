import CardItem from './CardItem.js';

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <CardItem {...profile}/> )}
    </div>
)

export default CardList