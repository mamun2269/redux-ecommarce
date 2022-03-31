import React,{ useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    
    const[ inputs, setInputs]= useState({
        username:'',
        email:'',
        password:''
    }) 
    const handleChange=(e)=>{
        const name= e.target.value;
        const value= e.target.value;
        setInputs({
            ...value,
            [ name ]: value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setInputs({
            username:'',
            email:'',
            password:''
        })
    }
  return (
    <>
        <div className="login_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 mx-auto">
                        <div className="login_area">
                            <h3 className="login_title">LogIn</h3>
                            <form action="">
                                <div className="form_area">
                                    <input 
                                        type="text"
                                        name='username'
                                        value={inputs.username}
                                        placeholder='User Name'
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="email"
                                        name='email'
                                        value={inputs.email}
                                        placeholder='Enter email'
                                    />
                                    <input 
                                        type="password"
                                        name='password'
                                        value={inputs.password}
                                        placeholder='Enter password'
                                    />
                                </div>
                                <button className='logIn_btn' onSubmit={handleSubmit}>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginForm;