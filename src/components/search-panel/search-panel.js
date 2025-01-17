import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    label: ``
  }

  onLabelChange = (evt) => {

    const label = evt.target.value

    this.setState({ label });
    this.props.onSearchChange(label);
  }

  render() {

    return <input className = "form-control search-input"
                  placeholder = "search" type = "text"
                  value = { this.state.label }
                  onChange = { this.onLabelChange } />;
  }
};
