import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Welcome'
import Footer from './components/Footer'
import CreateArticle from './components/CreateArticle';
import Login from './components/Login'
import SingleArticle from './components/SingleArticle';
import Signup from './components/Signup';
import AuthService from './services/auth'
import { useTranslation, Trans } from "react-i18next";
import "./i18n";
import { Provider } from "react-redux";
import configureStore from "./store";
import Map from './components/Map/index'
const store = configureStore();
function MyComponent() {
    const { t, i18n } = useTranslation();
    return (<Main t={t} i18n={i18n}></Main>)
}

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            authUser: null,

        }
    }

    componentDidMount() {
        const user = localStorage.getItem('user')
        if (user) {
            this.setState({ authUser: JSON.parse(user) })
        }
    }

    setAuthuser = authUser => {
        this.setState({
            authUser: authUser
        })
    }

    render() {
        const { location, t, i18n } = this.props;
        return (
            <div>
                {
                    location.pathname !== '/login' && location.pathname !== '/signup'
                    && <Navbar authUser={this.state.authUser}></Navbar>
                }
                <Route exact={true} path="/" component={Header} />
                <Route path="/home" component={Navbar} />
                <Route path="/map" component={Map}></Route>
                <Route path="/articles/create" component={CreateArticle}></Route>
                <Route path="/login" render={(props) => {
                    return (
                        <Login {...props} t={t} i18n={i18n}></Login>
                    )
                }}></Route>
                <Route path="/article/:slug" render={(props) => {
                    return (<SingleArticle {...props} t={t} i18n={i18n}></SingleArticle>)
                }}></Route>
                <Route path="/signup" render={(props) => {
                    return (
                        <Signup {...props} setAuthuser={this.setAuthuser}></Signup>)
                }}></Route>

                {
                    location.pathname !== '/login' && location.pathname !== '/signup' && <Footer></Footer>
                }
            </div>
        );
    }
}
// use HOC
const Main = withRouter((props) => {
    return (

        <App authService={new AuthService()} {...props} ></App>
    )
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MyComponent></MyComponent>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
