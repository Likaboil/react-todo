import React, { Component } from 'react';
import './add-task-form.css';

export default class AddTaskForm extends Component {
  render() {
    return (
      <form className="add-panel d-flex">
        <input className="form-control new-task-label"
                type="text"
                placeholder="What needs to be done?" />
        <button className="btn btn-outline-success"
                type="submit"
                onClick={()=> this.props.onTaskAdded(`task for adding to list`)}>
                Add</button>
      </form>
    );
  }
}
