import React, { Component } from 'react';
import './filters.css';

export default class Filters extends Component {

  buttons = [
    {name: `all`, label: `All`},
    {name: `active`, label: `Active`},
    {name: `done`, label: `Done`}
  ]

  render() {

    const buttons = this.buttons.map(({name, label}) => {
      return <button className="btn btn-outline-primary" type="button" key={name}>{label}</button>
    });

    return (
      <div>
        <button className="btn btn-outline-primary" type="button">All</button>
        <button className="btn btn-outline-secondary" type="button">Active</button>
        <button className="btn btn-outline-secondary" type="button">Done</button>
      </div>
    );
  }
};
