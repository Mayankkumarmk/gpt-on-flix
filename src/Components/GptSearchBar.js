import { useSelector } from "react-redux";
import lang from "../utils/languageConstants"
import { useRef } from "react";
const GptSearhBar = () => {

    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);

    const handleGptSearchClick= () => {

    }
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input type = "text" ref={searchText} className="col-span-9 p-4 m-4" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button 
                    className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
} 

export default GptSearhBar;