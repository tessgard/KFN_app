import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Login = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
  
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;
  
    useEffect(() => {
      if (isAuthenticated) {
        props.history.push('/');
      }
  
      if (error === 'Invalid Credentials') {
        setAlert(error, 'danger');
        clearErrors();
      }
      // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);
  
    const [user, setUser] = useState({
      email: '',
      password: ''
    });
  
    const { email, password } = user;
  
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  
    const onSubmit = e => {
      e.preventDefault();
      if (email === '' || password === '') {
        setAlert('Please fill in all fields', 'danger');
      } else {
        login({
          email,
          password
        });
      }
    };
  
    return (
      <div className='register-main-container'>
        <form onSubmit={onSubmit} className="form">
          <div className='form-group'>
            <input
              className="input"
              placeholder="email"
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              className="input"
              placeholder="password"
              id='password'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className='login-btn btn-margin-top'>
            <FontAwesomeIcon icon={faCheck}
              type='submit'
              value={<FontAwesomeIcon icon={faCheck}/>}
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default Login;