import persona from './data.js';

function calculateAverageAge(peopleArray) {
  if (peopleArray.length === 0) return 0;

  const totalAge = peopleArray.reduce((sum, persona) => sum + persona.age, 0);
  return totalAge / peopleArray.length;
}

const averageAge = calculateAverageAge(persona);

console.log(`The average age is: ${averageAge}`);