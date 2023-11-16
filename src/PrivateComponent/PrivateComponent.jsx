import { useContext } from "react";
import { authContext } from "../ContaxtApi/ContextProvaider";
import { Navigate } from "react-router-dom";

 
const PrivateComponent = ({children}) => {
    const {user,lodding} = useContext(authContext)
     if(lodding){
         return  (
            <div className="flex justify-center items-center mt-36">
                 <span className="loading loading-spinner loading-lg "></span>
            </div>
         )
     }

      if(user){
        return children;
      }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateComponent;