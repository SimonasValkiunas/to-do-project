import React from 'react';
import styles from './Main.css';
import Task from '../TaskComponent/Task';

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            task_array : [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/tasks')
            .then(response=>response.json())
            .then(data=>{
                this.setState({task_array : data});
            });
    }

    render() { 
        let tasks = [];

        this.state.task_array.forEach(i=>{
           if(i._name && i._description && i._due_date) tasks.push(<Task _name={i._name} _description={i._description} _due_date={i._due_date}></Task>);
        });
        return (
            <div>
                {tasks}
            </div>
        );
    }
}

 
export default Main;