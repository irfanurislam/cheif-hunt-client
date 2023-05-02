import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {

    const {signIn,signInWithGoogle} = useContext(AuthContext)
   
  
      const handleLogin = (event) =>{
     event.preventDefault()
     const form = event.target
     const email = form.email.value
     const password = form.password.value
     
    
      console.log(email,password)
      signIn(email,password)
      .then(result =>{
        const login = result?.user
        console.log(login)
        form.reset()
      }).catch(error =>{
        console.log(error)
        
      })
      }
  
      const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
          const googleLog = result?.user
          console.log(googleLog)  
        })
        .catch(error =>{
          console.log(error)
          
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
          </form>
          <Link to='/register'><button className="btn btn-link"> register to authmaster</button></Link>
         <button onClick={handleGoogle} className="btn btn-success"> google</button>
        
        
        </div>
      </div>
    </div>

    
    );
};

export default Login;