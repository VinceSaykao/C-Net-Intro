import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LoginForm.scss';
import img1 from './logo3.png';
import logo from './octopulate.png';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';



function LoginForm() {

  // local states that takes in login inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // store for errors
  const errors = useSelector(store => store.errors);


  const dispatch = useDispatch();
  const history = useHistory();


  // function runs when user types something in and dispatches it, as a whole, form. 
  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login


  // MUI for password 
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  // MUI for password
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // when user clicks on eye, it shows password
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // MUI password
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="formPanel"
      onSubmit={login}
      style={{ height: '750px' }}

    >
      <h2
        id="welcome"
      >Octopulate</h2>
      <img
        className='logo'
        src={logo} />
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <br></br>
        <br></br>
        <FormControl sx={{ m: 1, width: '90%' }} variant="outlined"
          id="user-input"
        >

          <TextField
              autoComplete="off"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}

            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>


      </div>
      <div  >

        <FormControl sx={{ m: 1, width: '90%' }} variant="outlined"
          id="password-input"
          onChange={handleChange('password')}
        >

          <InputLabel htmlFor="password-input">Password</InputLabel>
          <OutlinedInput
          
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(event) => setPassword(event.target.value)}
  
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
      
            label="Password"
          />
        </FormControl>
        {/* <input
          placeholder='| Password'
          id='password-input'
          type="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /> */}

      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button
            id='login'
            type='submit'
            variant="outlined">Log In</Button>
        </Stack>
      </div>
      <br></br>
      <br></br>
      <button
        id='register'
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push('/registration');
        }}
      >
        <span className='create-account'>Create Account</span>
      </button>


    </form>
  );
}

export default LoginForm;

