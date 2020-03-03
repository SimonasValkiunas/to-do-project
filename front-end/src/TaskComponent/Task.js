
import React from 'react';
import styles from './Task.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Task extends React.Component {
    render() { 
        return ( 
            <div className='card'>
                <div className = 'main_info'>
                    <h1>{this.props._name}</h1>
                    <h4>{this.props._due_date}</h4>
                </div>
                <p>{this.props._description}</p>
            </div>
         );
    }
}
 
export default Task;