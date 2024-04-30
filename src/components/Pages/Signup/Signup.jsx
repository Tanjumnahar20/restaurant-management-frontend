import { Link } from "react-router-dom";

const Signup = () => {

  const handleSignup = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email= form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
  }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <h1 className="text-3xl">Sign up now!</h1>
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <h1>Forgot password?</h1>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign up" />
              </div>
            </form>
            <p>Already have an account?<Link to="/login">login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;