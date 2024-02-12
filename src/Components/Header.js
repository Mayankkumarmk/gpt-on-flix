import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, photoURL: photoURL, displayName: displayName }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [])

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }
    
    const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.target.value))
    }  

    return (


        <div className="flex justify-between z-10 absolute w-screen px-8 py-2 bg-gradient-to-b from-black" >
            <img
                className="w-44"
                src={LOGO}
                alt="logo"
            />
            {user && (
                <div className="flex p-2">
                   {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>)}
                    <button className="py-2 px-4 my-2 mx-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick} >{showGptSearch ? "HomePage" : "Gpt Search"}</button>
                    <img
                        className="rounded-xl w-14 "
                        src={user.photoURL}
                        alt="profile logo"
                    />

                    <button onClick={handleSignOut} className=" pl-2 font-bold text-white">Sign out</button>
                </div>
            )}


        </div>
    )
}

export default Header