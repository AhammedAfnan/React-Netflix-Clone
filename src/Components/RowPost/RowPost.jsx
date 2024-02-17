import {useState,useEffect} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response) =>{
      console.log(response.data); 
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  },[props.url])
  const opts = {
    height : '390',
    width : '100%',
    playerVars : {
    //  https://developers.google.com/youtube/player_parameters
    autoplay : 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data && response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('No trailer');
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='row'>
      <h2 className='titles'>{props.title}</h2>
      <div className="posters"> 
      {movies.map((obj)=>
        <div>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster": "poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

      <p style={{ marginTop: "0.7rem", color:'white' }}>{obj?.title || obj?.name}</p>
      </div>
      )}
     </div>
 {  urlId  &&  <YouTube opts={opts} videoId={urlId.key}/>   }
    </div>
  )
}

export default RowPost