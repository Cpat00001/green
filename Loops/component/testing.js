import React, { Component } from 'react'

export default class testing extends Component {


    render() {

        const dogs = [
            {
              id: 'dog-1',
              name: 'Poodle',
              temperament: [
                'Intelligent',
                'Active',
                'Alert',
                'Faithful',
                'Trainable',
                'Instinctual',
              ],
            },
            {
              id: 'dog-2',
              name: 'Bernese Mountain Dog',
              temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
            },
            {
              id: 'dog-3',
              name: 'Labrador Retriever',
              temperament: [
                'Intelligent',
                'Even Tempered',
                'Kind',
                'Agile',
                'Outgoing',
                'Trusting',
                'Gentle',
              ],
            },
          ]

        const one = dogs.reduce((dogTemp, dog)=>{
            return [...dogTemp,...dog.temperament]
        },[])
        
        // const one = dogs.reduce((dogTemp, dog)=>{
        //     if(dog in dogTemp){
        //         dogTemp[dog]++
        //     }
        //     return dogTemp;
        // },[])
        // const nums = [1,2,3,4,5]
        // const one = nums.reduce((accu, curr)=>{
        //     return accu + curr;
        // },0)
        //const one = dogs.filter(dog => dog.temperament.includes('Loyal'))
        //const one = dogs.filter(dog => dog.temperament.includes('Loyal'))
        //const one = dogs.filter(dog => dog.temperament.includes('Kind'))
        //const one = dogs.filter(dog => dog.name === 'Poodle')
        //const one = dogs.map(dog => dog.name);
        //const one = dogs.every(dog => dog.temperament.includes('Intelligent'))
        //const one = dogs.every(dog => dog.temperament.includes('Alert'))
        //const one = dogs.every(dog => dog.temperament.includes('Trusting'))
        //const one = dogs.some(dog => dog.temperament.includes('Trainable'))
        // const one = dogs.some(dog => dog.temperament.includes('Active'))  
        //   const one = dogs.find(dog => dog.name === 'Bernese Mountain Dog')
           console.log(one)


        return (
            <div>
                <h5>another page</h5>
            </div>
        )
    }
}
