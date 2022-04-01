import axios from 'axios'
import React,{useEffect,useState} from 'react'

export default props => {
    const [topMovies,setTopMovies] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=af5ff8bffc4eea4a393e2b9649bc8e5e&language=en-US&page=1`)
            .then(res =>{
                console.log(res)
                setTopMovies(res.data.results.slice(0,5))
            })
            .catch(err =>{
                console.log(err)
            })
    },[])
    return(
        <div>
            {
            topMovies.map((item,i) =>{
                return <div className=" top d-flex " key={i}> <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="picMain"/> <h3>{item.original_title}</h3> </div> 
                })
            }
        </div>
    )
}