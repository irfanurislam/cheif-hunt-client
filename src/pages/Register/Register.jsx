import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleregister = (event) =>{

        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(name,photo,email,password)
        createUser(email,password)
        .then(result =>{
            const createdUser = result.user
            console.log(createdUser)
            updateUser(result?.user, name, photo);
        }).catch(error =>{
            console.log(error)
        })
        
    }

    const updateUser = (user, name, photo) => {
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("user name updated");
          })
          .catch((error) => {
            console.log(error);
          });
      };
    




    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-4xl font-bold"> Please Register now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleregister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  required
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered"
                />
              </div>
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
                 <Link to='/login' className="label-text-alt link link-hover"> 
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
              </div>

              <p><small>already Have a account</small> <Link to='/'>Login</Link></p>
            
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;