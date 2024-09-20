// Exercise 1: Creating a New React Project with TypeScript using Vite
// What You Will Learn:

// How to set up a new React project with TypeScript using Vite.
// How to use the create-vite tool to initialize a project.
// How to install necessary dependencies and start the development server.
// Instructions
// Set up a new React project with TypeScript using Vite. Demonstrate how to use Vite to create the project and include the necessary TypeScript dependencies.

// 🌟 Exercise 2: Creating a React Component with TypeScript
// What You Will Learn:

// How to create a functional React component using TypeScript.
// How to define an interface for props and use it in a component.
// How to render JSX with a prop value in a React component.
// Instructions
// Create a simple React component called Greeting that accepts a name prop (a string) and displays a greeting message using that prop.

import React from 'react';

interface GreetingProps {
  name: string;
}
  
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1> Hello, {name}!</h1>;
};
  
export default Greeting;