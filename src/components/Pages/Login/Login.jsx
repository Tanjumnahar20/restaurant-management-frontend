import { Link } from "react-router-dom";
import useAuth from "../../CustomHook/useAuth";

const Login = () => {
    const {createSignIn} = useAuth()

   const handleSignIn =event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    createSignIn(email,password)
    .then(result=>{
        const user = result.user;
        console.log('sign in user',user.email);
    })
    .catch(error=>console.log(error))
   }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <h1 className="text-3xl">Login!</h1>
            <form onSubmit={handleSignIn} >
              
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
                <input className="btn btn-primary" type="submit" value="Sign in" />
              </div>
            </form>
            <p>New here?<Link to="/signup">login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;