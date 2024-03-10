import React from 'react'
import Logo from '../images/logo.png'
import LoginForm from './LoginForm'
import Icon from '../images/customer-service.png'
function Login() {
  return (
    <>
    <div className="container">
        <div className='sub-container'>
        <div className="topbar">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="login-info-container">
            <h1>Log in</h1>
            <p>Please log in with your phone number</p>
        </div>
        <div className="login-info">
        <i class="fa-solid fa-mobile-screen-button"></i>
        <p>Log in with phone</p>
        </div>
        <LoginForm/>
        <div className="support-service">
            <a href="https://legacy.reactjs.org/docs/create-a-new-react-app.html" target='_blank'>
            <img src={Icon} alt="icon" />
            Customer Service
            </a>
        </div>
        </div>
        </div>
    </>
  )
}

export default Login