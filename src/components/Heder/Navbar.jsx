import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../ContaxtApi/ContextProvaider";



const Navbar = () => {
    const {user,logOut} = useContext(authContext)
    const handleLogOut = ()=>{
    logOut()
    .then(()=>{
        console.log('logOut succesfull');
    })
    .catch(error=>{
    console.error(error)
    })
    }
    return (
        <div className="flex justify-between items-center p-6  shadow-md">
            <div>
                 {
                    user?<p className="text-3xl font-bold">{user.displayName}</p>:<p className="text-3xl font-bold">FooG</p>
                 }
            </div>
            <div>
                <ul className="flex items-center gap-5">
                {
                    user &&
                    <li><NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-800 underline" : ""
                }>Home</NavLink></li>

                }
                    {
                        user?<button onClick={handleLogOut} className="btn btn-ghost">Log out</button>:
                        <>
                         <li><NavLink to="/login" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-800 underline" : ""
                       }>Log In</NavLink></li>
                      {/* <li><NavLink to="/singUp" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-800 underline" : ""
                    }>Sing Up</NavLink></li> */}
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;