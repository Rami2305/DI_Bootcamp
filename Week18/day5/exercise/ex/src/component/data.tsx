// 🌟 Exercise 5: Using useEffect Hook with TypeScript in React
// What You Will Learn:

// How to use the useEffect hook in a functional React component.
// How to fetch data from an API using useEffect.
// How to handle loading state and display data in the component.
// Instructions
// Create a functional React component that uses the useEffect hook 
// to fetch data from an API when the component mounts. 
// Display the fetched data in the component.

import React, { useState, useEffect } from 'react';


interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

const Data: React.FC = () => {
    
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        // Función asíncrona para obtener datos
        const fetchData = async () => {
          try {
            // Realiza una solicitud fetch a una API
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result: User[] = await response.json();
            setData(result);
          } catch (error) {
            if (error instanceof Error) {
              setError(error.message);
            } else {
              setError('An unknown error occurred');
            }
          } finally {
            setLoading(false);
          }
        };    
    fetchData();    
    }, [])
    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Muestra los datos si todo está bien
  return (
    <div>
      <h1>USer Data: </h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong><br />
            Email: {user.email}<br />
            Phone: {user.phone}<br />
            Website: {user.website}
          </li>
        ))}
      </ul>
    </div>
  ); 
}

export default Data