import React, { Component } from 'react';
import { format } from 'util';

class Page4 extends Component {
  render() {
    const companies = [
      { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
      { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
      { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
      { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
      { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
      { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
      { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
      { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
      { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
    ];

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];




    const date = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
    console.log(date);

    // 1 filtrowanie array of objects
    const filtruj = companies.filter( elem => elem.name === 'Company Three');
    console.log(filtruj);
    let obiekt = filtruj[0]
    console.log(obiekt)
    let y;

    // 2 sprawdzenie czy przefiltrowany object ma category i jaka to kategoria 
    for( y in obiekt){
      if(obiekt.hasOwnProperty('category')){
        var res = obiekt[y];
        //console.log(res);
        var res2 = obiekt.category;        
        var res3 = obiekt.start;

    // 3 jesli kategoria obiektu spelnia okreslone warunki wtedy wyswietl rekomendacje
        if( res2 != 'Auto'){
          console.log('avoid buying')
        }else if(res2 === 'Auto' && res3 > parseInt(1990)){
          console.log('young automotive company >> consider buying');
        }else{
          console.log('BUY')
        }

      }
    }
    

    const level = {value: '230'}
    let x;

    for( x in level){

      if(level.hasOwnProperty('value')){
       
        const result = parseInt(level[x]);
        console.log('type of data', result)

        if(result <230){
          console.log('strongly buy');
        }else if( result === 230){
          console.log('consider buying')
        }else{
          console.log('sell stocks')
        }
      }
    }


    // const weather = { type: 'sunny Day'}
    // let iter;

    // for( iter in weather){
    //   if(weather.hasOwnProperty('type')){
    //     const result = weather[iter];
    //     console.log(result)
    //     if(result === 'sunny Day'){
    //       console.log('wear your sunglasses')
    //     }else{
    //       console.log('take your coat')
    //     }
    //   }
    // }

    // const buz = { fog:'stag'};
    // let elem;
    // for( elem in buz ){
    //   if( buz.hasOwnProperty(elem)){
    //     console.log('property z elem',buz[elem])
    //   }else{
    //     console.log('sorry no property found', buz[elem])
    //   }
    // }

    // const sorter = companies.forEach(function(elem){
    //   console.log('elementy z companies',elem)
    // })


    // sort method. zwroc firmy wedlug datay zalozenia
    // old school method
    // const date = companies.sort(function(c1, c2) {
    //   if (c1.start > c2.start) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });
    // console.log(date);

    //sort method. zwroc firmy wedlug daty zalozenia
    //modern way 1 liner with ternary operator
    
    //jesli chcesz wykonac dwukrotnie map na danym array. tutaj najpier square i pozniej * 2
    // zatem robisz jeden map zaraz po drugim
    // const dwieMapy = ages.map(age => Math.sqrt(age)).map(age => age * 2);
    // console.log(dwieMapy);

    // map array of ages and multiply * 2
    // const multi = ages.map(age => age * 2);
    // console.log(multi);

    //map array of ages and square them
    // const square = ages.map(age => Math.sqrt(age));
    // console.log(square);
    // modern map method with company.name and star/end datas
    // const conName = companies.map(
    //   company => `${company.name}[${company.start} ${company.end}]`
    // );
    // console.log(conName);

    //return array with companies names and do STH with that example: display dates
    // const compNames = companies.map(function(company) {
    //   return `${company.name} [${company.start} - ${company.end}]`;
    // });
    // console.log(compNames);

    // map companies name and create new array of companies names
    // const name = companies.map(company => company.name);
    // console.log(name);

    //companie existed longer than 10years, in new elegant and modern way filter()
    // const okres = companies.filter(company => company.end - company.start > 10);
    // console.log(okres);

    //get companies from 1980-1990 new modern way
    // const eight = companies.filter(
    //   company => company.start > 1980 && company.start < 1990
    // );
    // console.log(eight);

    // filter all companies form 1980-1990, filter old fashion way
    // const ei = companies.filter(function(company) {
    //   if (company.start > 1980 && company.start < 1990) {
    //     return true;
    //   }
    // });
    // console.log(ei);

    // filter() with condition , modern way - 1 liner code
    // const retail = companies.filter(company => company.category === 'Retail');
    // console.log(retail);

    // old fashion filter with filter if()
    // const retail = companies.filter(function(company) {
    //   if (company.category === 'Retail') {
    //     return true;
    //   }
    // });
    // console.log(retail);

    //filter loop with array funtion + conditional
    // const adult = ages.filter(age => age >= 21);
    // console.log(adult);
    //filter loop old fashion way
    // const cantDrink = ages.filter(function(age) {
    //   if (age >= 21) {
    //     return true;
    //   }
    // });
    // console.log(cantDrink);
    //filter loop in array with if condition
    // const result = ages.filter(age => age >= 21);
    // console.log(result);

    // for loop + if condition to select element + push into array. to samo co array.filter()
    // let cantDrink = [];
    // for (let i = 0; i < ages.length; i++) {
    //   if (ages[i] >= 21) {
    //     cantDrink.push(ages[i]);
    //   }
    // }
    // console.log(cantDrink);

    // filter loop in array z if conditionalem, wyrzuci wszystki z array ponizej 18 roku
    // const teenager = ages.filter(age => age < 18);
    // console.log(teenager);

    // for (let i = 0; i < companies.length; i++) {
    //   console.log(companies[i]);
    //   let result1 = companies[i].name;
    //   console.log(result1);
    // }
    //forEach ##########
    // companies.forEach(function(company) {
    //   console.log(company.name);
    // });

    // let result = [];
    // for (let i = 0; i < ages.length; i++) {
    //   //console.log(ages[i]);

    //   if (ages[i] >= 21) {
    //     result.push(ages[i]);
    //   }
    // }
    // console.log(result);
    // for loop eqiwalent to filter();
    // let cantDrink = [];
    // for (let i = 0; i < ages.length; i++) {
    //   if (ages[i] >= 21) {
    //     cantDrink.push(ages[i]);
    //   }
    // }
    // console.log(cantDrink.join());

    // var ob1 = {a: 1, b: 2, c: 3};
    // let result = '';

    // for(let iter in obj1){
    //   string += obj1[iter]
    // }


    const s4s = function(){
      console.log('starting slow promise');

      return new Promise(res=>{
        setTimeout(()=>{
          res('slow res fired');
        },4000);
      });
    };

    const s2s = function(){
      console.log('starting fast promise');

      return new Promise(res=>{
        setTimeout(()=>{
          res('fast res fired');
        },2000);
      });
    }



    // const x = new Object();
    // x.prop1 = '20';
    // console.log(x.hasOwnProperty('prop1'));


    // const obiekt2 = new Object();
    // obiekt2.prop2 = undefined;
    // console.log(obiekt2.hasOwnProperty('prop2'));

    // const obiekt1 = new Object();
    // obiekt1.prop1 = null;
    // console.log(obiekt1.hasOwnProperty('prop1'));


  // const prawidlowyAsync = async function(){

  //   const slow = await s4s();
  //   const fast = await s2s();

  //   console.log( slow);
  //   console.log(fast);
  // }();

  // // promise .then.catch.finally

  // function resThem(resolve,reject){
  //   setTimeout(function(){
  //     resolve(11);
  //   })
  // };

  // function rejectThem(resolve,reject){
  //   setTimeout(function(){
  //     reject(new Error('Error'));
  //   },1000)
  // };
    

  // var p1 = Promise.resolve('');
  // var p2 = p1.then(function(value){
  //     return new Promise(resThem);
  // })

  // p2.then(function(value){
  //   console.log(value);
  // })
  // .catch(function(err){
  //   console.log('tego err nie moze wyrzucic', err);
  // })

  // var p3 = p1.then(function(){
  //   return new Promise(rejectThem);
  // });

  // p3.then(function(value){
  //   console.log(value);
  // })
  // .catch(function(err){
  //   console.log('wyrzuci ten error', err)
  // })



  // function resolveThem(resolve,reject){
  //   setTimeout(function(){
  //     resolve(10);
  //   },3000)
  // }

  // function rejectThem(resolve,reject){
  //   setTimeout(function(){
  //     reject(new Error('Error'));
  //   },1000)
  // }

  // var p1 = Promise.resolve('foo');
  // var p2 = p1.then(function(){
  //   return new Promise(resolveThem);
  // });

  // p2.then(function(value){
  //   console.log(value);
  // })
  // .catch(function(err){
  //   console.log('rejected_ ',err);
  // });

  // var p3 = p1.then(function(){
  //   return new Promise(rejectThem);
  // })

  // p3.then(function(v){
  //   console.log(v);
  // })
  // .catch(err => { console.log( 'wyrzuce reject', err )})

  // let nprom = new Promise(function(resolve,reject){
  //   resolve('success msg');
  // })

  // nprom.then(function(value){
  //   console.log(value);
  // })
  // .catch(err => console.log(err))

  // var prom = new Promise(function(resolve,reject){
  //   resolve(1);
  // });

  // prom.then(function(value){
  //   console.log('powinno byc 1', value);
  //   return value + 1;
  // })
  // .then(function(value){
  //   console.log('pwoinno byc 1 asynchronous', value);
  // })


  // var prom = new Promise(function(resolve,reject){
  //     resolve(1);
  // })

  // prom.then(function(value){
  //   console.log('powinno byc 1', value);
  //   return value + 1;
  // })
  // prom.then(function(value){
  //   console.log( value + ' _asynchronous works >> powinono byc 1');
  // })
  // prom.then(function(value){
  //   console.log('powinno byc 1',value);
  // })

  // let nprom = new Promise(function(resolve,reject){
  //   setTimeout(function(){
  //     console.log('msg with success');
  //   },2000)
  // })

  // nprom.then( msg =>{
  //   console.log(msg);
  // })
  // .catch((reason)=>{
  //   console.log(reason)
  // })

  // let nprom = new Promise(function(resolve,reject){
  //   setTimeout(function(){
  //     resolve('result with success/resolve');
  //   },3000);
  // })

  // nprom.then( odpowiedz => {
  //   console.log('zlapany msg from resolve in promise.then',odpowiedz);
  // })
  // .catch((err)=>{
  //   console.log('wyrzuc error jak cos',err)
  // })

  // let np = new Promise(function(resolve,response){
  //   setTimeout(function(){
  //     console.log('success');
  //   }, 3000);
  // })

  // np.then(msg=>{
  //   console.log(msg);
  // });
  // let fp = new Promise(function(resolve,reject){
  //   setTimeout(function(){
  //     resolve('msg z sukcesem');
  //   })
  // })

  // fp.then(getMsg =>{
  //   console.log('should be success message from resolve',getMsg)
  // })

  // let mfp = new Promise(function(resolve,reject){
  //   setTimeout(function(){
  //     resolve("Success");
  //   }, 300)
  // })

  // mfp.then((msg)=>{
  //   console.log('should be success response from promise',msg);
  // })

  // var promise1 = new Promise(function(resolve,reject){
  //   return resolve('success')
  // })

  // promise1.then(function(value){
  //   console.log(value);
  // })

  // var promise1 = new Promise(function(resolve,reject){
  //   resolve('success');
  // })

  // promise1.then(function(value){
  //   console.log(value);
  // })

  // (function x(){
  //   try{
  //     try{
  //       throw new Error('Ooops')
  //     }catch{
  //       console.log('inner catch');
  //     }
  //   }catch{
  //     console.log('outer catch');
  //   }
  // })();

  // (function x(){
  //   try{
  //     try{
  //       throw new Error('oops');
  //     }catch{
  //       console.error('inner',ex.message);
  //       throw ex;
  //     }finally{
  //       console.log('finally');
  //       return;
  //     }
  //   }catch(ex){
  //       console.error('outer',ex.message);
  //   }
  // })();



  // const wkolejnosciAsync = async function(){

  //   const fast = await s2s();
  //   console.log(fast);
  //   const slow = await s4s();
  //   console.log(slow);

  // }();

  // const kolejka = async function(){

  //   const slow = await s4s();
  //   console.log(slow);
  //   const fast = await s2s();
  //   console.log(fast);

  // }();

  // const concurrentStart = async function(){

  //   const slow = s4s();
  //   const fast = s2s();

  //   console.log( await slow);
  //   console.log( await fast);

  // }();

  // const concurrentPromise = function(){

  //   return Promise.all([s4s(), s2s()]).then((mess)=>{

  //     console.log( mess[0] );
  //     console.log( mess[1])

  //   })
  // }();

  //  const concurrentPromise = function(){
  //    return Promise.all([ s4s(), s2s() ]).then((mess)=>{
  //      console.log( mess[0]);
  //      console.log(mess[1]);
  //    })
  //  }();

  // const concurentPromise = function(){
  //   console.log('######### concurrent start with promise.all  #########')
  //   return Promise.all([ s3s(), s1s() ]).then((message)=>{
  //         console.log(message[0]);
  //         console.log(message[1]);
  //   })
  // }();

  // const sequentialStart = async function(){

  //   const slow = await s3s();
  //   console.log(slow);
  //   const fast = await s1s();
  //   console.log(fast);

  // }();


  // const concurrentStart = async function(){

  //   const slow = s3s();
  //   const fast = s1s();

  //   console.log( await slow);
  //   console.log( await fast);
  // }
  // concurrentStart();

    // const seq = async function(){

    //   const slow = await s2s();
    //   console.log(slow);
    //   const fast = await s1s();
    //   console.log(fast);

    // }();

    // var start2sec = function(){
    //   console.log('starting slow promise');
    //   return new Promise(resolve =>{
    //     setTimeout(function(){
    //       resolve('SLOW')
    //     },2000);
    //   });
    // };

    // var start1sec = function(){
    //   console.log('starting fast promise');
    //   return new Promise(resolve =>{
    //     setTimeout(function(){
    //       resolve('fast');
    //     },1000);
    //   });
    // };
    // var seqstart = async function(){

    //   const slow = await start2sec();
    //   console.log(slow);
    //   const fast = await start1sec();
    //   console.log(fast);
    // }();



    // var sequentialStart = async function(){
    //     console.log('### sequential start ###');

    //     const slow = await start2sec();
    //     console.log(slow);
    //     const fast = await start1sec();
    //     console.log(fast);
    // };
    // sequentialStart();

    


    return (
      <div>
        <p>Page 4</p>
      </div>
    );
  }
}
export default Page4;
