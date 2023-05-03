import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
      const navigate = useNavigate()
    const {signIn,signInWithGoogle,githubSignin} = useContext(AuthContext)
   const location = useLocation()
    const [error,setError] = useState('')
   const from = location.state?.from?.pathname || '/'

      const handleLogin = (event) =>{
     event.preventDefault()
     const form = event.target
     const email = form.email.value
     const password = form.password.value
     
     setError('')
      console.log(email,password)
      signIn(email,password)
      .then(result =>{
        const login = result?.user
        console.log(login)
        form.reset()
        navigate(from, {replace: true})
      }).catch(error =>{
        console.log(error.message)
        setError(error.message)
        
      })
      };
  
      const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
          const googleLog = result?.user
          console.log(googleLog)  
          navigate(from, {replace: true})
        })
        .catch(error =>{
          console.log(error)
          setError(error.message)
          
        })
      }
  
      const handleGithubLogin = () =>{
        githubSignin()
        .then(result =>{
          const loginGit = result.user;
          console.log(loginGit)
          navigate(from, {replace: true})
        }).catch(error =>{
          console.log(error)
          setError(error.message)
        })
      }
  




    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold"> Please Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       
          <form  onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            { <p className='text-error'>{error}</p>}
          </form>
          <Link to='/register'> <small>Don't Have A Account? Please</small><button className="btn btn-link">Register </button></Link>
          <br />
         <button onClick={handleGoogle} className="btn btn-outline">Login google</button>
         <br />
         <button onClick={handleGithubLogin} className='btn btn-outline'>Login Github</button>
        
        </div>
      </div>
    </div>

    
    );
};

export default Login;