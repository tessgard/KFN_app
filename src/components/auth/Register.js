import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div className="register-main-container">
        <form onSubmit={onSubmit} className="form">
          <div className='form-group'>
            <input
              placeholder="Name"
              className="input"
              id='name'
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              placeholder="email"
              className="input"
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
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input
              className="input"
              placeholder="confirm password"
              id='password2'
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
              required
              minLength='6'
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

export default Register;