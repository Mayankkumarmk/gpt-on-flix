const VideoTitle = ({title, overview}) => {
    return(
        <div className=" text-white pt-[20%] w-screen aspect-video  px-6 md:px-24 absolute bg-gradient-to-r from-black">
            <h1 className="text-2xl font-Bold md:text-6xl"> {title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="my-4 md:m-0">
                <button className=" py-1 px-3 md:py-4 md:px-12 text-xl  bg-white text-black rounded-lg hover:bg-opacity-80">Play</button>
                <button className="bg-gray-500 hidden md:inline-block  mx-2  p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>

            </div>
        </div>
    )

}

export default VideoTitle