const videos = [
    {name: 'Айбек Эверон',
    duration: '15',},

    {name: 'Даниил Криглер',
    duration: '15',},

    {name: 'Велинда Пелайо',
    duration: '15',},


    {
        name: "Hoxtober 27",
        duration: '15'
    }
]



export function VideoList() {
    return (
        <>
        <h1>Video List</h1>
        {
            videos.map((video)=> {
                return (
                    <div>
                        <p><b>Название:</b> {video.name}</p> 
                        <p>Длительность: {video.duration}</p>
                        <button>Лайк!</button>
                    </div>
                )
            })
        }
        </>
    )
}

export default VideoList;


