import React, { Component } from 'react';
import { loginUser } from '../../action/auth';
import { connect } from 'react-redux';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(data);

    }
    render() {
        return (

            <div className="mh-fullscreen bg-img center-vh p-20" style={{ backgroundImage: 'url(assets/img/bg-girl.jpg)' }}>
                <div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
                    <h5 className="text-uppercase text-center">Login</h5>
                    <br /><br />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input onChange={this.onChange} value={this.state.email} name="email" type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input onChange={this.onChange} value={this.state.password} name="password" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group flexbox py-10">
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" defaultChecked />
                                <span className="custom-control-indicator" />
                                <span className="custom-control-description">
                                    Remember me
                                </span>
                            </label>
                            <a className="text-muted hover-primary fs-13" href="#">Forgot password?</a>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-bold btn-block btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                    <hr className="w-30" />
                    <p className="text-center text-muted fs-13 mt-20">Don't have an account? <a href="register.html">Sign up</a></p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    
});


export default connect(mapStateToProps,{loginUser})(Login)