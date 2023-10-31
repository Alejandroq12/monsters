import { Component } from 'react';
import Card from '../card/Card'
import './CardList.css';

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log('render from Card List');
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
