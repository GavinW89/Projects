import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";


const Main = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({})
    const history = useHistory();
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/users/loggedinuser', {withCredentials:true})
            .then(res => {
                console.log(res)
                if(res.data.results){
                    setLoggedInUser(res.data.results)
                }
            })
            .catch(err => {
                console.log(err)
                history.push('/');
            })
    },[])

    return (
    <div className="pageContainer">
        <div className="topTier">
        <h2 className="welcome m-0"><em>Welcome {loggedInUser.name}!</em></h2>
        <p >Looking for movie recommendations? <Link to="/survey">Click here</Link></p>
        </div>
        <div className="bottomTier">
        </div>
    </div>
    );
};

export default Main;
