import React from 'react';

const App = () => {
  let msg1;
  let num = Math.random();
  const pics = {
    kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
    doggy:
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
  };

  // if statements by setting variables to JSX expressions
  if (num < 0.5) msg1 = 'Num is less than 0.5';
  else msg1 = 'Num is greater than 0.5';

  // if statements using ternary operator
  const img = <img width='200px' src={pics[num < 0.5? 'kitty' : 'doggy']} />;

  // if statements using logical &&
  // useful for doing an/some action OR none at all
  const favCharacter = (
    <ul>
      { num < 0.3 &&  <li>Captain Falcon</li> }
      { num < 0.6 && <li>Marth</li> }
      { num < 0.9 && <li>Falco</li> }
    </ul>
  );

  // .map() used to create array of JSX objects
  const people = ['erick', 'bob', 'jerry'];
  const peopleList = people.map((person, i) =>
    <li key={'person_' + i}>{person}</li>
  );


  return (
    <div>
      <p>2 + 3 = {2 + 3} // variables using curly braces </p>
      <p>{msg1}</p>
      {img}
      {favCharacter}
      <ul>{peopleList}</ul>
    </div>
  );
}

export default App;
