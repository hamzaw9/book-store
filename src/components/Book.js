/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ title, author, children }) => (
  <div>
    <p>{title}</p>
    <p>{author}</p>
    {children}
  </div>
);

export default Book;
