const VideoTitle = ({title, overview}) => {
    return(
        <div className=" text-white pt-[20%] w-screen aspect-video px-24 absolute bg-gradient-to-r from-black">
            <h1 className="font-Bold text-6xl"> {title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div>
                <button className="  p-4 px-12 text-xl  bg-white text-black rounded-lg hover:bg-opacity-80">Play</button>
                <button className="bg-gray-500 mx-2  p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>

            </div>
        </div>
    )

}

export default VideoTitle