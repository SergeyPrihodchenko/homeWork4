import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../hooks/AuchProvider";

export default function RequireAuth() {
    const location = useLocation();
    const auth = useAuth();
    if(!auth.user) {
        return <Navigate to='/login' state={{from: location}} />
    }

    return <Outlet/>
}