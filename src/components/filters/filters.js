import React from 'react';
import './filters.css';

const Filters = () => {
  return (
    <div>
      <button className="btn btn-outline-primary" type="button">All</button>
      <button className="btn btn-outline-secondary" type="button">Active</button>
      <button className="btn btn-outline-secondary" type="button">Done</button>
    </div>
  );
};

export default Filters;
