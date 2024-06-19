/*
name: Dmitrii Mitin,
id: 301255191,
date: June18
*/
import React from 'react';
import { useForm } from 'react-hook-form';
import "./SignUpUser.css";

export default function SignUpUser(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        alert(JSON.stringify(data, null, 2));
      };
    
      const password = watch('password');
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName', { required: true })} />
          {errors.firstName && <span>This field is required</span>}
    
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <span>This field is required</span>}
    
          <label htmlFor="userName">Username</label>
          <input {...register('userName', { required: true })} />
          {errors.userName && <span>This field is required</span>}
    
          <label htmlFor="email">Email</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i
            })}
          />
          {errors.email && <span>This field is required</span>}
    
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
    
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', {
              validate: (value) => value === password
            })}
          />
          {errors.confirmPassword && <span>Passwords do not match</span>}
    
          <button type="submit">Submit</button>
        </form>
      );
}