import React, { Component } from 'react';
import './add-task-form.css';

export default class AddTaskForm extends Component {

  state = {
    label: ``
  }

  onLabelChange=(evt)=> {
    this.setState({
      label: evt.target.value
    });
  }

  onSubmit=(evt)=> {
    evt.preventDefault();
    this.props.onTaskAdded(this.state.label);
  }

  render() {

    return (
      <form className="add-panel d-flex"
            onSubmit={this.onSubmit} >

        <input className="form-control new-task-label"
                type="text"
                placeholder="What needs to be done?"
                onChange={this.onLabelChange}
                value={this.state.label}
                />
        <button className="btn btn-outline-success">
                Add
        </button>
      </form>
    );
  }
}
