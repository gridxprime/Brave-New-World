import {useState} from 'react'

const videos = [
  {
    name: 'Айбек Эверон',
    duration: '15',
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/002f8d38-fa23-4380-b956-9392b5b157b3/d23iows-627142a5-5cad-4dc2-a96d-fae711310d3e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAwMmY4ZDM4LWZhMjMtNDM4MC1iOTU2LTkzOTJiNWIxNTdiM1wvZDIzaW93cy02MjcxNDJhNS01Y2FkLTRkYzItYTk2ZC1mYWU3MTEzMTBkM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GdI1vAZVpyRyCb46ko_DpYXvPV3StXrakHHyM5B1npI'
  },

  {
    name: 'Даниил Криглер',
    duration: '15',
    url: 'https://i.pinimg.com/200x/fb/85/67/fb8567391d0064cea7227ba88147c8d7.jpg'
  },

  {
    name: 'Велинда Пелайо',
    duration: '15',
    url: 'https://tdj.gg/uploads/attachs/50201_ashe.png'
  },


  {
    name: "Hoxtober 27",
    duration: '15',
    url: 'https://m.media-amazon.com/images/M/MV5BMTI4ZmJjMGEtZTdhMC00YmE4LWE1OTctODRlZWI4ZGRmM2I2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX200_CR0,0,200,200_AL_.jpg'
  }
]



export function VideoList() {





  return (
    <>

      {
        videos.map((video) => {
          return (
            <>

              <Video video={video} />
              
            </>
          )
        })
      }
    </>
  )
}

export default VideoList;

const commentsY = ['Glad to know that', '22AR',
 'You forget thousand things everyday',
  'This country was built by and for gasoline',
   'So I just prove my patriotic duty by doing this stuff']

export function Video({video}) {

  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const [comments, setComments] = useState(commentsY)

  const addComment = (comm) => {
    setComments(prev => [...prev, comm])
  }

  const [commentValue, setCommentValue] = useState()

  return (
    <div className="video">
      <img src={video.url} alt="" />
      <p><b>Название:</b> {video.name}</p>
      <p>Длительность: {video.duration}</p>
      <br></br>
      <input value={commentValue} onChange={e => (setCommentValue(e.target.value)) } className='com__input' type="text" />
      <button onClick={()=>addComment(commentValue)} className='add__comment'>Добавить комментарий</button>
      <span className='comments'>{comments.map(comment => <p>{comment}</p>)}</span>

      <div className="buttons">
        <button onClick={() => {
          setLikes(p => p + 1)
        }} className="like">Лайк!</button>
        <span 
         id='like__counter'>{likes}</span>
        <button onClick={() => {
          setDislikes(p => p + 1)
        }}
         className="dislike">Дизлайк!</button>
        <span id='dislike__counter'>{dislikes}</span>

      </div>

    </div>
  )
}
