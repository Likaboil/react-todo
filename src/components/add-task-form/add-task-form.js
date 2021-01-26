import React, { Component } from 'react';
import './add-task-form.css';

export default class AddTaskForm extends Component {

  onLabelChange=()=> {
    console.log('Change input value');
  }

  render() {

    return (
      <form className="add-panel d-flex">
        <input className="form-control new-task-label"
                type="text"
                placeholder="What needs to be done?"
                onChange={this.onLabelChange} />
        <button className="btn btn-outline-success"
                type="button"
                onClick={()=> this.props.onTaskAdded(`task for adding to list`)}>
                Add
        </button>
      </form>
    );
  }
}
