import React from 'react';

function Quote({ quote, author }) {
  return (
    <div>
      <h1>{quote}</h1>
      <p>{author}</p>
    </div>
  );
}

export default Quote;