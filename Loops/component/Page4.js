import React, { Component } from 'react';

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
    const date = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
    console.log(date);

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

    return (
      <div>
        <h5>Page 4</h5>
      </div>
    );
  }
}
export default Page4;
