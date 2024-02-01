import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constant"


const Header = () => {

    const navigate = useNavigate()
    const dispatch  =  useDispatch();
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {

              const {uid,  email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email: email,photoURL:photoURL, displayName: displayName}));
              navigate("/browse")
            } else {
              dispatch(removeUser());
              navigate("/");
            }
        });  
        
        return () => unsubscribe();
    },[])


    return (


        <div className="flex justify-between z-10 absolute w-screen px-8 py-2 bg-gradient-to-b from-black" >
            <img
                className="w-44"
                src={LOGO}
                alt="logo"
            />
            {user && (<div className="flex p-2">

                <img
                    className="rounded-xl w-14 "
                    src={user.photoURL}
                    alt="profile logo"
                />
                
                <button onClick={handleSignOut} className=" pl-2 font-bold text-white">Sign out</button>
            </div>)
            }


        </div>
    )
}

export default Header