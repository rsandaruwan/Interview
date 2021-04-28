import React, {Component} from 'react';
import axios from 'axios';


const Exercise = props =>(
    <tr>
        <td>{props.exercise.firstname}</td>
        <td>{props.exercise.lastname}</td>
        <td>{props.exercise.contactNo}</td>
        <td>{props.exercise.gender}</td>
        <td>{props.exercise.country}</td>
    </tr>
)

export default class ExercieseList extends Component{

    constructor(props){
        super(props);
        this.state = {exercises: []};
    }

    componentDidMount(){
        axios.get('http://localhost:3000/exercises/')
        .then(response =>{
             console.log(response);
            this.setState({exercises: response.data})
            
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    exercisesList(){
        console.log("aa");
        return this.state.exercises.map(currentexercise =>
         <Exercise exercise={currentexercise} key={currentexercise._id}/>
        )
    }
    render(){
        return(
            <div className="wrapper">
                <h2> Green<span> Earth</span></h2>
               <h3>Contact List</h3>
               <table className="table table-striped ">
                   <thead className="thead-light">
                       <tr>
                           <th>First Name</th>
                           <th>Last Name</th>
                           <th>Contact Number</th>
                           <th>Gender</th>
                           <th>Country</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.exercisesList()}
                   </tbody>
               </table>
            </div>
        )
    }
}