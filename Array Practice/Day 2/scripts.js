// ## Array Cardio Day 2

    const people = [
      { name: 'Codie', year: 1988 },
      { name: 'Logan', year: 1986 },
      { name: 'Libby', year: 1970 },
      { name: 'Malley', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    console.table(people);

    console.log('Checking if some are over 19 with Some');
    const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);
    console.log(isAdult);


    // Array.prototype.every() // is everyone 19 or older?
    console.log('Checking if all are over 19 with Every')
    const allAdults = people.every(person => (new Date()).getFullYear - person.year >= 19);
    console.log(allAdults);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    console.table(comments)

    console.log('Find comment with Id of 823423');
    const comment = comments.find(comment => comment.id === 823423);

    console.log(comment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    console.log('Finding Index of comment with Id 823423');
    const index = comments.findIndex(comment => comment.id === 823423);

    console.log(index);
    // delete the comment with the ID of 823423
    comments.splice(index, 1);

    console.table(comments);