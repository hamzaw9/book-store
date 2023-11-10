/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ title, author, category }) => (
  <div>
    <p>
      Title:
      {title}
    </p>
    <p>
      Author:
      {author}
    </p>
    <p>
      Category:
      {category}
    </p>
  </div>
);

export default Book;
