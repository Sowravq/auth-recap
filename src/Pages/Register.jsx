import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../ContaxtApi/ContextProvaider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
 
 
const Register = () => {
    const {createUserSingUp} = useContext(authContext)
    const navigate = useNavigate();
    const handleSingUp =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const password = e.target.password.value;
       createUserSingUp(email,password)
       .then(result=>{
        const users = result.user;
        updateProfile(auth.currentUser,{
            displayName:name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(()=>{
            console.log('succes');
          })
          .catch(error=>{
            console.error(error)
          })
        navigate("/login")
        console.log(users);
       })
       .catch(error=>{
        console.error(error)
       })
        console.log(name, email,password);
        
         
    
    }
     
     

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Sing up now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSingUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Sing up</button>
                        </div>
                    </form>
                    <p>Already account here? Please<Link to="/login"><button className="btn btn-link">Log in</button></Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;