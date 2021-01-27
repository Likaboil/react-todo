import React, { Component } from 'react';
import './filters.css';

export default class Filters extends Component {

  buttons = [
    { name: `all`, label: `All`},
    { name: `active`, label: `Active`},
    { name: `done`, label: `Done`}
  ]

  render() {

    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({name, label}) => {

      const isActive = filter === name;
      const classNames = `btn ${(isActive ? `btn-outline-primary` : `btn-outline-secondary`)}`;

      return (
        <button className = { classNames }
              type = "button" key = { name }
              onClick = {() => onFilterChange(name)}>
          { label }
        </button>)
    });

    return (
      <div>
        { buttons }
      </div>
    );
  }
};
