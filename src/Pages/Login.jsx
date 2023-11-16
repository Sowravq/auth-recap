import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
 
import { authContext } from "../ContaxtApi/ContextProvaider";


const Login = () => {
    const {singInUser}=useContext(authContext)
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
     e.preventDefault();
     const email= e.target.email.value;
     const password = e.target.password.value;
     singInUser(email,password)
     .then(result=>{
        const users= result.user;
        navigate("/")
        console.log(users);
     })
     .catch(error=>{
        console.error(error);
     })
     console.log(email,password);

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>New here? Please<Link to="/singUp"><button className="btn btn-link">Sing up</button></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;