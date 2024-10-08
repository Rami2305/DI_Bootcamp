// 🌟 Exercise 4: Creating a React Component with Optional Props
// What You Will Learn:

// How to define an interface with optional props in TypeScript.
// How to handle optional props in a React component.
// How to provide default content when optional props are not available.
// Instructions
// Create a React component called UserCard that accepts optional props name and age and displays them in a card. 
//If the props are not provided, the component should display a default message.

interface UseCardProps {
    name?: string,
    age?: number,
}

const UseCard: React.FC<UseCardProps> = ({ name, age }) => {
    return (
        <h1>
            Hello, Im {name ? name : 'Rami'}, and im {age ? age: 34} years old.
        </h1>
    )
}

export default UseCard