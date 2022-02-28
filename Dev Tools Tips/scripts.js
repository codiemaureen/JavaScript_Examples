

    //attribute modifications
    //click to change color
function makePink() {
    const p = document.querySelector('p');
    p.style.color = '#E8C2CA';
    p.style.fontSize = '50px';
}


    // Regular
    console.log('Hello!');


    // Interpolated
    console.log('This is a great %s string', '🌿');


    // Styled
    console.log('%c This is a gigantic string', 'font-size:75px;')



    // warning!
    console.warn('Watch out!');

    // Error
    console.error('You should have known better');

    // Info
    console.info('Heres your sign')


    // Testing
    console.assert(1 === 2, 'This is the wrong way');  


    // clearing
    console.clear();


    // Viewing DOM Elements
    const p = document.querySelector('p');

    console.log(p);

    console.dir(p);


    // Grouping together
    const dogs = [{ name: 'Libby', age: 7 }, { name: 'Malley', age: 11 }];
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`this is ${dog.name}`);
        console.log(`this is ${dog.name} and they are ${dog.age} years old`);
        console.log(`this is ${dog.name} and they are ${dog.age} years old in dog years`);
        console.groupEnd(`${dog.name}`);
    });


    // counting

    console.count('Malley');
    console.count('Malley');

    console.count('Codie');

    console.count('Codie');
    console.count('Malley');
    console.count('Libby');
    console.count('Libby');
    console.count('Libby');
    console.count('Libby');
    console.count('Malley');
    console.count('Codie');
    console.count('Logan');



    // timing

  