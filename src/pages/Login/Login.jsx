import React from 'react';
import { Link } from "react-router-dom";
const Login = () => {

    // const {signIn,googleSignin} = useContext(AuthContext)
    // const [success,setSuccess] = useState('')
    // const [error,setError] = useState('')
  
    //   const handleLogin = (event) =>{
    //  event.preventDefault()
    //  const form = event.target
    //  const email = form.email.value
    //  const password = form.password.value
    //  setSuccess('')
    //  setError('')
    //   console.log(email,password)
    //   signIn(email,password)
    //   .then(result =>{
    //     const login = result.user
    //     console.log(login)
    //     setSuccess('login sucessfully',login)
    //     form.reset()
    //   }).catch(error =>{
    //     console.log(error)
    //     setError(error)
    //   })
    //   }
  
    //   const handleGoogle = () =>{
    //     googleSignin()
    //     .then(result =>{
    //       const googleLog = result.user
    //       console.log(googleLog)
    //       setSuccess('succesfullu done')
    //       setError('')
    //     }).catch(error =>{
    //       console.log(error)
    //       setError(error)
    //     })
    //   }
  
  




    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold"> Please Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        {/* onSubmit={handleLogin} */}
          <form  className="card-body">
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
         <button  className="btn btn-success"> google</button>
         {/* {<p className="text-green-500">{success}</p>}
         {<p className="text-red-500">{error}</p>} */}
         {/* onClick={handleGoogle} */}
        </div>
      </div>
    </div>
    );
};

export default Login;