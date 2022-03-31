import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import MovieBox from "../components/MovieBox";

const CatchVibes = (props) => {
    const [movies, setMovies] = useState([])
    const history = useHistory();
    const {genre} = useParams();
    
    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=af5ff8bffc4eea4a393e2b9649bc8e5e&language=en-US&page=1&with_genres=${genre}`)
            .then(res => {
                console.log(genre)
                setMovies(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
    <div className="pageContainer">
        <div className="d-flex">
        <Link className="btn btn-success" to="/survey">Pick a Different Genre</Link>
        <Link className="btn btn-success mx-3" to="/">Back to Dashboard</Link>
        </div>
        {
            movies.map((item,i) =>{
                return <MovieBox key={i} title={item.title} description={item.overview} imagePath={item.poster_path} rating={item.vote_average} id={item.id}/>
            })
        }
    </div>
    );
};

export default CatchVibes;
