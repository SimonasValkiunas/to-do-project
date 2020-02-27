import React from 'react';

function AddTask() {
  return (
      <div className="add_task">
        <label for="task_name">Task</label>
        <input type="text" name="name" id="task_name"></input>
        <label for="task_description">Description</label>
        <textarea name="description" id="task_description" cols="30" rows="10"></textarea>
        <button id="cancel_modal">Cancel</button>
        <button>Continue</button>
      </div>
  );
}

export default AddTask;
