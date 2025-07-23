import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'; // ✅ Import useDispatch
import { login } from '../redux/usersclice.js'; // ✅ Import the login action

import '../css/screen1.css';
import userIcon from '../assets/user.png';
import padlock from '../assets/padlock.png';
import view from '../assets/view.png';
import hide from '../assets/hide.png';

const Clientlogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const dispatch = useDispatch(); // ✅ Get the dispatch function
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log(data);
    // ✅ Dispatch the login action with the user's email
    dispatch(login({ email: data.email })); 
  };

  return (
    <div className='client-login'>
      <div className="container">
        <h3>Sign in</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ... (Your form JSX is unchanged) ... */}
          <div className="form-group">
            <img src={userIcon} alt="User Icon" className="input-icon" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group">
            <img src={padlock} alt="Lock Icon" className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            <img
              src={showPassword ? view : hide}
              alt="Toggle Password"
              className="toggle-icon"
              onClick={togglePasswordVisibility}
            />
            {errors.password && <span className='error'>This field is required</span>}
          </div>
          <div className="form-footer">
            <a href="/forgot-password">Forgot password?</a>
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Clientlogin;