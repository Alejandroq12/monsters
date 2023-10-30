import { Component } from 'react';

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log('render from Card List');
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => (
          <div className="card-container" key={monster.id}>
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
