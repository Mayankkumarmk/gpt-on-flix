import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMoviesSuggestion";
import GptSearhBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <img
                src={BG_URL}
                alt="background"
                className="absolute -z-10"
            />
            <GptSearhBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearch;