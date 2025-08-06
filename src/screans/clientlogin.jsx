import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { login } from '../redux/usersclice.js';
// import '../css/screen1.css';
import userIcon from '../assets/user.png';
import padlock from '../assets/padlock.png';
import view from '../assets/view.png';
import hide from '../assets/hide.png';
import { useNavigate } from 'react-router-dom';
const Clientlogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const navigate = useNavigate();

  const dispatch = useDispatch(); // ✅ Get the dispatch function
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
  dispatch(login({ email: data.email }));
  navigate('/clientverfication');
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
            <button type="submit" onClick={() => navigate('/clientverfication')}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
  };


export default Clientlogin;