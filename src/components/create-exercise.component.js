import React, {Component} from 'react';
import axios from 'axios';
import '../App'; 
import greenEarth from '../components/green.jpg';

export default class CreateExerciese extends Component{

    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            contactNo: '',
            gender:'',
            country:''
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeContactNo = this.onChangeContactNo.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        
    }

    onChangeFirstName(e){
        this.setState({
            firstname: e.target.value
        });
    }

    onChangelastName(e){
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeContactNo(e){
        this.setState({
            contactNo: e.target.value
        });
    }

    onChangeGender(e){
        this.setState({
            gender: e.target.value
        });
    }

    onChangeCountry(e){
        this.setState({
            country: e.target.value
            
        });
        console.log(e)
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            contactNo: this.state.contactNo,
            gender: this.state.gender,
            country: this.state.country
        }

        console.log(exercise);
        axios.post('http://localhost:3000/exercises/add', exercise)
        .then(res => console.log(res.data));
        window.location = '/';
        
    }



    render(){
        return(
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-5">
                        <h2> Green<span> Earth</span></h2>
                        <div className="imageArea">
                            <img src={greenEarth} alt="green earth" />
                        </div>
                    </div>

                    <div className="col-md-1">
                        <div className="vl"></div>
                    </div>

                    <div className="col-md-6">

                        <h2>Contact Info</h2>
                        <form onSubmit = {this.onSubmit}>
                            <div className = "form-group">
                                <input
                                type="text"
                                className ="form-control"
                                placeholder="First Name"
                                value = {this.state.firstname}
                                onChange = {this.onChangeFirstName}
                                />
                            </div>

                            <div className = "form-group">
                                <input
                                type="text"
                                className ="form-control"
                                placeholder="Last Name"
                                value = {this.state.lastname}
                                onChange = {this.onChangelastName}
                                />
                            </div>

                            <div className = "form-group">
                                <input
                                type="text"
                                className ="form-control"
                                placeholder="Contact Number"
                                value = {this.state.contactNo}
                                onChange = {this.onChangeContactNo}
                                />
                            </div>

                            <div className ="row">
                                <div className ="col-md-6">
                                    <div className = "form-group">
                                        <select id = "gender" 
                                        className ="form-control"
                                        placeholder="Gender"
                                        value = {this.state.gender}
                                        onChange = {this.onChangeGender}>
                                            <option value="" disabled selected hidden>Gender</option>
                                            <option value="male" defaultValue>Male</option>
                                            <option value="femail">Female</option>
                                            
                                        </select>
                                    </div>
                                </div>

                                <div className ="col-md-6">
                                    <div className = "form-group">
                                        <select id = "country" 
                                        className ="form-control"
                                        placeholder="Country"
                                        value = {this.state.country}
                                        onChange = {this.onChangeCountry}>
                                            <option value="" disabled selected hidden>Country</option>
                                            <option value="Srilanka" defaultValue>Srilanka</option>
                                            <option value="India">India</option>
                                            <option value="America">America</option>
                                            
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Save" className="btn btn-success form-control" />

                            </div>
                        </form>

                    </div>

                </div>
               
                   
            </div>
        )
    }
}