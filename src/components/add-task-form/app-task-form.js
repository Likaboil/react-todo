import React from 'react';

const AddTaskForm = () => {
  return (
    <form>
      <input type="text"
              placeholder="What needs to be done?" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
