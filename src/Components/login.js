import Header from "./Header"
import { useState, useRef } from "react"
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false);
    const dispatch = useDispatch();


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        const message = checkValidateData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, photoURL: photoURL, displayName: displayName }));
                         }).catch((error) => {
                            // An error occurred
                            // ...
                            setErrorMessage(error.message)
                        });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }

    }
    return (
        <div>

            <Header />
            <img
                src={BG_URL}
                alt="background"
                className="absolute"
            />
            <form onSubmit={(e) => e.preventDefault()} className="rounded-md bg-black mx-auto left-0 right-0 my-36 w-3/12 absolute p-12 bg-opacity-80 text-white ">
                <h1 className="text-white font-bold text-2xl ">{isSignInForm ? "Sign in" : "Sign Up"}</h1>
                {!isSignInForm && (<input ref={name} placeholder="Full Name" className=" p-1 mt-4 w-full  rounded-sm bg-gray-700"></input>)}
                <input type="text" ref={email} placeholder="Email Address" className=" p-1 mt-4  w-full  rounded-sm bg-gray-700"></input>
                <input type="" ref={password} placeholder="password" className="p-1 mt-4 w-full rounded-sm bg-gray-700"></input>
                {errorMessage && (<p className="text-red-700 font-bold text- py-4 ">{errorMessage}</p>)}
                <button onClick={handleButtonClick} className="w-full bg-red-700 rounded-lg my-6 p-2">{isSignInForm ? "Sign in" : "Sign Up"}</button>
                <p className="" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now."}</p>
            </form>


        </div>
    )

}

export default Login;