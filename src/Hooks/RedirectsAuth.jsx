import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/common/Loading';
import auth from '../firebase.init.js/firebase.init';

const RedirectsAuth = ({children}) => {
    const [user,loading] = useAuthState(auth)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/sign-in" state={{from: location}} replace></Navigate>
    }    
    return children
};

export default RedirectsAuth;