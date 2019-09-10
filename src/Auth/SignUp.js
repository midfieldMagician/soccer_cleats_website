import React, { Component } from 'react';
import axios from 'axios';
import { base_url } from '../config';
export default class SignUp extends Component {
    state={
        username:'',
        password:'',
        name:'',
        phone_number:'',
        enum:'member'
    }
    render() {
        return (
            <div>
                <div className='sign_up'>
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Sign Up</h3>
                                    <div className="d-flex justify-content-end social_icon">
                                        <span><i className="fab fa-facebook-square"></i></span>
                                        <span><i className="fab fa-google-plus-square"></i></span>
                                        <span><i className="fab fa-twitter-square"></i></span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.register}>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="username" name="username" onChange={this.handleChange} />
                                        </div>

                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="password" name="password" onChange={this.handleChange} />
                                        </div>

                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="name" name="name" onChange={this.handleChange} />
                                        </div>

                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="phone number" name="phone_number" onChange={this.handleChange} />
                                        </div>

                                        <div className="row align-items-center remember">
                    
					</div>
                                        <div className="form-group">
                                            <input type="submit" value="Register" className="btn float-right login_btn" />
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
    register=(event)=>{
        event.preventDefault();
        axios({
            method:'POST',
            url:base_url+'/api/user',
            data:this.state
        })
        .then(data=>{console.log(data);
        })
        .catch(err=>{console.log(err);
        })
    }
    handleChange=(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		})
	}
}