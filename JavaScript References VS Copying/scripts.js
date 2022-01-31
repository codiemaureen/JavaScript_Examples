   //Strings numbers and booleans reference example
   let name = 'Codie';
   let name2 = name;
   console.log(name, name2);
   name2 = 'CodieMaureen';
   console.log(name, name2);
   
   let age = 100;
   let age2 = age; 
   console.log(age, age2);
   age2 = 101;
   console.log(age, age2);

   let blue = true;
   let red = false;
   console.log(blue, red);
   red = true;
   console.log(blue, red);   

    //Referencing an Array
    const players = ['Codie', 'Logan', 'Libby', 'Malley'];


    const team = players; //Team is a reference to the original array

    console.log(players, team);

    team[3] = 'Moose'

    console.log(players, team); // Both Arrays updated b/c team references players

    //Copying an Array with Slice
    const team2 = players.slice(); 
    console.log(team2);
    team2[3] = 'Malley';
    console.log(players, team2);


    // or Create a new array and Concat the old one in
    const team3 = ['Phil', 'Nancy'].concat(players);

    console.log(team3);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[4] = 'Michelle';
    console.log(players, team4);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects

    // with Objects
    const person = {
      name: 'Codie Maureen',
      age: 80
    };

    // and think we make a copy:
    const person2 = Object.assign({}, person, {name: 'Codie'}, {number : 99});
    console.log(person2);

    // how do we take a copy instead?

    // Object ...spread
    const person3 = {...person};

    console.log(person3);
    person3.name = 'Codieee'

    console.log(person3);

    // Things to note - this is only 1 level deep - both for Arrays and Objects.

    const codie = {
      name:'Codie',
      age: 100,
      social: {
        github: 'https://github.com/codiemaureen/'
      },
    };

    console.log(codie)

    const dev = Object.assign({}, codie);

    dev.name = 'Codie Maureen';
    dev.social.github = 'https://github.com/codiemaureen/JavaScript_Examples'; //only one level deep - will update original reference object
    console.log(dev);
