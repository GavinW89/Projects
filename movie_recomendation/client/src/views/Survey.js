import React, { useEffect, useState } from "react";
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';

const Survey = (props) => {
        const [form,setForm] = useState({
            genre: "28",
            // subgenre: ""
        })
        const [apiGenre, setApiGenre] = useState([])
        const [error,setError] = useState({});
        const history = useHistory();
        const [loaded, setLoaded] = useState(false);
        const [movie,setMovie] = useState([])
    
        useEffect(()=>{
            axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=af5ff8bffc4eea4a393e2b9649bc8e5e&language=en-US')
                .then(res =>{
                    console.log("HERE IS YOUR GENRES" + res.data)
                    setApiGenre(res.data.genres)
                    setLoaded(!loaded)
                    
                })
                .catch(err=>console.log(err))
        },[])

        const onChangeHandler = (event) => {

            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
        }
    
        const onSubmitHandler = (event) => {
            event.preventDefault();
            console.log(form.genre + "HERES GENRE THAT YOU ARE PASSING +++++++")
            history.push(`/catchvibes/${form.genre}`)
        }

    
        return(
            <div className="survey d-flex justify-content-center">
            <div className="survHeader">
                <Link to="/">Back to Dashboard</Link>
                <h1>What genre are you in the mood for today?</h1>

                {
                    loaded&&
                    
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group my-3">
                            <select name="genre" onChange={onChangeHandler} >
                                {
                                    apiGenre.map((item, i) => {
                                        return <option key={i} value={item.id}>{item.name}</option>
                                    })
                                }
                            </select>
                        </div>

                        {/* <div className="form-group my-3">
                            <select name="subgenre" onChange={onChangeHandler} >
                            {
                                apiGenre.map((item, i) => {
                                    if(form.genre.id !== item.id){
                                        return <option key={i} value={item.id}>{item.name}</option>
                                    }
                                })
                            }
                        </select> */}
                        {/* </div> */}


                        <input type="submit" className="btnC btn-success btn-lg my-3" value="Catch a Vibe"/>
                    </form>
                }
            </div>
        </div>
    )
}

export default Survey