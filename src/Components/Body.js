import {RouterProvider} from "react-router-dom"
import {createBrowserRouter} from "react-router-dom"
import Login from "./login"
import Browse from "./Browse"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {addUser, removeUser} from "../utils/userSlice"
import {auth} from "../utils/firebase"
import { onAuthStateChanged } from "firebase/auth";


const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/Browse",
            element: <Browse />
        }
    ])

    

    return (
        <div>
            {/*  */}
            <RouterProvider router = {appRouter} />
        </div>
    )
}

export default Body;