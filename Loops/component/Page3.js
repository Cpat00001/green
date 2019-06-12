import React, { Component } from 'react';

class Page3 extends Component {
  render() {
    return (
      <div>
        <table className='table table-striped table-bordered table-hover'>
          <Header />
          <Row />
        </table>
      </div>
    );
  }
}
export default Page3;

class Header extends Component {
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

    return (
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>Nr</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Powers</th>
        </tr>
      </thead>
    );
  }
}
class Row extends Component {
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
        },
        {
          name: 'Johhny Five',
          age: 33,
          secretIdentity: 'SilverHand',
          powers: [
            'Immortality',
            'Heat Immunity',
            'Inferno',
            'Teleportation',
            'Invisible'
          ]
        }
      ]
    };

    return (
      <tbody>
        {json.members.map((member, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <h5>{member.name}</h5>
              </td>
              <td>{member.age}</td>
              <td style={{ color: 'pink' }}>
                {member.powers.map((power, index) => {
                  return [power];
                })}
              </td>
            </tr>
          );
        })}
        <tr />
      </tbody>
    );
  }
}
