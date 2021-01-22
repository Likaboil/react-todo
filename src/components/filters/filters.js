import React, { Component } from 'react';
import './filters.css';

export default class Filters extends Component {

  render() {
    return (
      <div>
        <button className="btn btn-outline-primary" type="button">All</button>
        <button className="btn btn-outline-secondary" type="button">Active</button>
        <button className="btn btn-outline-secondary" type="button">Done</button>
      </div>
    );
  }
};
