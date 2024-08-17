
import UserFavoriteAnimals from './UserFavoriteAnimals';
import './App.css'
import Exercise from './Exercise3';

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = (5 + 5);
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <>
      <div>
        <p> Hello World!</p>
        {myelement}
        <h1>React es {sum} times better with JSX</h1>
        <h3>My name is {user.firstName} and my lastname is {user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
        <Exercise/>
      </div>
    </>
  )
}

export default App
