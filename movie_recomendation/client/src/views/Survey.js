import React, { useEffect, useState } from "react";
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';
import GenreList from "../components/GenreList";

const Survey = (props) => {
        const [form,setForm] = useState({
            genre: "28",
            genreKey: 0,
            subgenre: []
        })
        const[genreOne, setGenreOne] = useState()
        const [genreSetTwo, setGenreSetTwo] = useState([])
        const [error,setError] = useState({});
        const history = useHistory();
        const [loaded, setLoaded] = useState(false);
        const onChangeHandler = (event) => {
            // if(event.target.name === "genreOne"){
            //     setForm({
            //         genre: event.target.value,
            //         genreKey: key
            //     })
            // }else{
            //     const newArr = GenreList.splice(form.genreKey,1) // genre was still apiGenre which terminal said wasnt defined 
            //     setForm({subgenre: newArr})
            // }
            // console.log(form.genreKey  + "HERES THE KEY +++++++++++++++++++++")
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
            console.log(form)
        }
    
        const onSubmitHandler = (event) => {
            event.preventDefault();
            history.push(`/catchvibes/${form.genre}`)
        }

    
        return(
            <div className="survey d-flex justify-content-center">
            <div className="survHeader">
                <Link to="/">Back to Dashboard</Link>
                <h1>What genre are you in the mood for today?</h1>
                    
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group my-3">
                            <select name="genre" onChange={onChangeHandler} > //key goes in "()"
                                {
                                    GenreList.map((item, i) => {
                                        return <option key={i} value={item.id}>{item.name}</option>
                                    })
                                }
                            </select>
                        </div>


                        <input type="submit" className="btnC btn-success btn-lg my-3" value="Catch a Vibe"/>
                    </form>
            </div>
        </div>
    )
}

export default Survey