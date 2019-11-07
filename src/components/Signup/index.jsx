import React, { Component } from 'react';
import config from '../../config/index';
import validateAll from 'indicative';
import axios from 'axios';
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // const data = this.state;
        // const rules = {
        //     name: 'required|string',
        //     email: 'required|email',
        //     password: 'required|string|min:6|confirmed'
        // };
        // const messages = {
        //     required: 'this field is required',
        //     'email.email': 'the email is invalid',
        //     'password.confirmed': 'the password confirmation does not match'

        // }
        // try {
        //     await validateAll(data, rules, messages);
        //     try {
        //         const response = await axios.post(`${config.apiUrl}`, {
        //             name: this.state.name,
        //             email: this.state.email,
        //             password: this.state.password
        //         })
        //         localStorage.setItem('user', JSON.stringify(response.data));
        //         this.props.setAuthuser(response.data)
        //         this.props.history.push('/')

        //     } catch (errors) {
        //         const formattedErrors = {};
        //         formattedErrors['email'] = errors.response.data['email'][0];
        //         this.setState({ errors: formattedErrors })
        //     }
        // } catch (err) {
        //     const formattedErrors = {};
        //     err.forEach(error => formattedErrors[error.field] = error.message);
        //     this.setState({ errors: formattedErrors })
        // }
    }
    render() {
        return (
            <div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: 'url(assets/img/bg-girl.jpg)' }}>
                <div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
                    <h5 className="text-uppercase text-center">Register</h5>
                    <br />
                    <br />
                    <form className="form-type-material" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input name="name" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Username" />
                            {
                                this.state.errors['name'] && <small className="text-danger">{this.state.errors['name']}</small>
                            }


                        </div>
                        <div className="form-group">
                            <input name="email" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Email address" />
                            {
                                this.state.errors['name'] && <small className="text-danger">{this.state.errors['email']}</small>
                            }
                        </div>
                        <div className="form-group">
                            <input name="password" onChange={this.handleInputChange} type="password" className="form-control" placeholder="Password" />
                            {
                                this.state.errors['name'] && <small className="text-danger">{this.state.errors['password']}</small>
                            }
                        </div>
                        <div className="form-group">
                            <input name="password_confirmation" onChange={this.handleInputChange} type="password" className="form-control" placeholder="Password (confirm)" />
                        </div>
                        <br />
                        <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
                    </form>
                    <hr className="w-30" />
                    <p className="text-center text-muted fs-13 mt-20">Already have an account?
                    <a href="login.html">Sign in</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Signup