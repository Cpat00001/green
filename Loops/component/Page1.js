import React, { Component } from 'react';


class Page1 extends Component {
  render() {
    const json = {
      squadName: 'Super hero squad',
      homeTown: 'Metro City',
      formed: 2016,
      secretBase: 'Super tower',
      active: true,
      members: [
        {
          name: 'Molecule Man',
          age: 29,
          secretIdentity: 'Dan Jukes',
          powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast']
        },
        {
          name: 'Madame Uppercut',
          age: 39,
          secretIdentity: 'Jane Wilson',
          powers: [
            'Million tonne punch',
            'Damage resistance',
            'Superhuman reflexes'
          ]
        },
        {
          name: 'Eternal Flame',
          age: 45,
          secretIdentity: 'Unknown',
          powers: [
            'Immortality',
            'Heat Immunity',
            'Inferno',
            'Teleportation',
            'Interdimensional travel'
          ]
        }
      ]
    };

    const myObj = {
      name: 'John',
      age: 30,
      cars: {
        car1: 'Ford',
        car2: 'BMW',
        car3: 'Fiat'
      }
    };

    const access = json.squadName;
    console.log(access);

    const mapaImion = json.members.map(name => {
      const imie = name.name;
      console.log(imie);
      const nPower = name.powers;
      console.log(nPower);
      {
        nPower.map(moc => {
          const sila = moc;
          console.log('Wynik z sila', sila);
        });
      }
    });

    const tabela = (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First</th>
            <th scope='col'>Powers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Name</th>
            {json.members.map((member, index) => {
              return <td key={index}>{member.name}</td>;
            })}
          </tr>
          <tr>
            <th scope='row'>Age</th>
            {json.members.map((member, index) => {
              return <td key={index}>{member.age}</td>;
            })}
          </tr>
        </tbody>
      </table>
    );
    return (
      <div>
        <h5>Hello Page 1</h5>
        {tabela}
      </div>
    );
  }
}
export default Page1;
