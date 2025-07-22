import React, { useState } from 'react'; // ✅ Import useState
import { useForm } from "react-hook-form";
import '../css/screen1.css';

import user from '../assets/user.png';
import padlock from '../assets/padlock.png';
import view from '../assets/view.png';   // 👁️ visible icon
import hide from '../assets/hide.png';   // 🔒 hidden icon

const Clientlogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false); // ✅ Toggle state

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className='client-login'>
      <div className="container">
        <h3>Sign in</h3>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email Field */}
          <div className="form-group">
            <img src={user} alt="User Icon" className="input-icon" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            
          </div>

          {/* Password Field */}
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

          {/* Footer */}
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
