import React from 'react';
import './add-task-form.css';

const AddTaskForm = () => {
  return (
    <form className="add-panel d-flex">
      <input className="form-control new-task-label"
              type="text"
              placeholder="What needs to be done?" />
      <button className="btn btn-outline-success"
              type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;