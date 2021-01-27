import React, { Component } from 'react';
import './filters.css';

export default class Filters extends Component {

  buttons = [
    {name: `all`, label: `All`},
    {name: `active`, label: `Active`},
    {name: `done`, label: `Done`}
  ]

  render() {

    const {filter}=this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;

      return <button className="btn btn-outline-primary" type="button" key={name}>{label}</button>
    });

    return (
      <div>
        {buttons}
      </div>
    );
  }
};
