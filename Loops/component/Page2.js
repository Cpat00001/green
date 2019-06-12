import React, { Component } from 'react';

class Page2 extends Component {
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
    console.log(json.members[0].powers[1]);
    return (
      <div>
        <table className='table' style={{ marginTop: '100px' }}>
          <thead>
            <tr>
              <th scope='col'>Nr</th>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>NickName</th>
              <th scope='col'>Powers</th>
            </tr>
          </thead>
          <tbody>
            {json.members.map((member, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{member.name}</td>
                  <td>{member.age}</td>
                  <td>{member.secretIdentity}</td>
                  <td>
                    {member.powers.map((dupek, index) => {
                      console.log(dupek);
                      return <td>{dupek}</td>;
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Page2;
