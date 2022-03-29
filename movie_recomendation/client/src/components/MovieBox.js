import axios from 'axios'
import React,{useEffect, useState} from 'react'

export default props => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imagePath, setImagePath] = useState("")
    const [rating, setRating] = useState(0)
    const [imdbId, setImdbId] = useState('')
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/76341?api_key=af5ff8bffc4eea4a393e2b9649bc8e5e')
            .then(res =>{
                console.log(res)
                setTitle(res.data.title)
                setDescription(res.data.overview)
                setImagePath(res.data.poster_path)
                setRating(res.data.vote_average)
                setImdbId(res.data.imdb_id)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    const MovieBox = {
        height: '400px',
        width: '1000px',
        backgroundColor: 'white',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderRadius: '10px' 

    }
    const styleRating = {
        color: '#f5c71a',
        fontSize: '40px'
    }

    return(
        <div>
            <div className=' shadow mx-auto mt-5 p-3' style={MovieBox}>
                <div className='row'>
                    <div className='col'>
                        <img className="pic" src={`https://image.tmdb.org/t/p/w500/${imagePath}`} alt="Movie Poster" />
                    </div>
                    <div className='col-7'>
                        <div className='row'>
                            <div className='col'>
                                    <h1>{title}</h1>
                            </div>
                            <div className='col'>
                                <h4 style={styleRating}>{rating} <span>✯</span></h4>
                            </div>
                        </div>
                        <p className="description" >{description}</p>
                        <a href={`http://imdb.com/title/${imdbId}`} target="_blank" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1fMrcYXKXfrU2wjA6x1O7e89FUiXnpFKIBt7PXDwKtrOd0wOUG0TEbO3PIiYWj9-mDI&usqp=CAU" className="h-25"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}