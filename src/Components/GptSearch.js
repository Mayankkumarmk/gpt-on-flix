import { BG_URL } from "../utils/constants";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <img
                src={BG_URL}
                alt="background"
                className="fixed -z-10 "
            />
            <GptSearchBar />
            <GptMoviesSuggestion />
        </div>
    )
}

export default GptSearch;