import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import moviesSlice from "./moviesSlice"
import gptSlice from "./gptSlice"
import ConfigSlice from "./configSlice"


const appStore = configureStore({
    reducer: {
        user: userSlice,   
        movies: moviesSlice,
        gpt: gptSlice,
        config: ConfigSlice
    }
})

export default appStore