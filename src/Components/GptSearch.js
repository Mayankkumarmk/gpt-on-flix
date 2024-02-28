import { BG_URL } from "../utils/constants";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    src={BG_URL}
                    alt="background"
                    className="h-screen object-cover md:w-full md:h-screen lg:h-auto lg:w-full"
                />
            </div>
            <div className="pt-[30%] md:p-0">
                <GptSearchBar />
                <GptMoviesSuggestion />
            </div>
        </>
    )
}

export default GptSearch;