import React from 'react';
import styles from './AddTask.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddTask extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      _name : '',
      _description : '',
      _due_date : getTime(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.postTask = this.postTask.bind(this);
  }

  postTask(){
    fetch('http://localhost:5000/tasks',{
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(this.state),
    });
  }

  handleChange(event){
    this.state[`_${event.target.id}`] = event.target.value;
  }

  render(){
    return (
      <div className="main">
        <div className="modal">
          <div className='inputs'>
            <TextField id="name" label="Name" variant="outlined" onChange={this.handleChange}/>
            <TextField id="description" label="Description" multiline variant="outlined" onChange={this.handleChange}/>
            <TextField id="due_date" label="Due date" type="datetime-local" defaultValue={getTime()} onChange={this.handleChange}/>
          </div>
          <div className='buttons'>
            <Button variant="contained" color="default">Cancel</Button>
            <Button variant="contained" color="primary" onClick={this.postTask}>Continue</Button>
          </div>
        </div>
      </div>
    );
  }
}

function getTime(){
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  let hours = today.getHours();
  let minutes = today.getMinutes();
  if (hours < 10) {
    hours = '0' + hours;
  } 
  if (minutes < 10) {
    minutes = '0' + minutes;
  } 
  return `${today.getFullYear()}-${mm}-${dd}T${hours}:${minutes}`;
}

export default AddTask;
