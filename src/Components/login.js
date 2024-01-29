import Header from "./Header"
import {useState} from "react"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>

            <Header />
            <img
                src=" https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
                alt="background"
                className="absolute"
            />
            <form className="rounded-md bg-black mx-auto left-0 right-0 my-36 w-3/12 absolute p-12 bg-opacity-80 text-white ">
                <h1 className="text-white font-bold text-2xl ">{isSignInForm ? "Sign in" : "Sign Up"}</h1>
                {!isSignInForm ? <input placeholder="Full Name" className=" p-1 mt-4 w-full  rounded-sm bg-gray-700"></input>:""}
                <input placeholder="Email Address" className=" p-1 mt-4  w-full  rounded-sm bg-gray-700"></input>
                <input placeholder="password" className="p-1 mt-4 w-full rounded-sm bg-gray-700"></input>
                <button className="w-full bg-red-700 rounded-lg my-6 p-2">{isSignInForm ? "Sign in" : "Sign Up"}</button>
                <p className="" onClick = {toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now."}</p>
            </form>


        </div>
    )

}

export default Login;