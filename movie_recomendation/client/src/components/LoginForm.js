import axios from 'axios';
import React, {useState} from 'react';
import { useHistory, Link} from 'react-router-dom';
export default props => {
    const [error, setError] = useState({});
    const history = useHistory();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', form, {withCredentials:true})
            .then(res =>{
                console.log(res)
                history.push('/main')
            })
            .catch(err => {
                setError(err.response.data.error.errors)
            })
    }

    const ContainerStyle = {
        height: '650px',
        width: '700px',
        padding: '40px',
        marginTop: '60px',
        marginLeft: '40px',
        backgroundColor: 'white'
    }



    return(    
    <div className='container border border-light shadow-lg align-middle mx-auto' style={ContainerStyle}>
    <h1><u>Login</u></h1>
    <Link to='/'>Go back to registration</Link>
    <form onSubmit={onSubmitHandler}>
        <div className='form-group mt-3'>
            <label className='font-weight-bold h4'>Email:</label>
            <div className='input-group input-group-lg'>
            <input type="email" className='form-control border border-dark mt-2 mx-auto w-75' placeholder='name@example.com' name='email' onChange={onChangeHandler}/>
            </div>
        </div>
        <div className='form-group mt-3'>
            <label className='font-weight-bold h4'>Password:</label>
            <div className='input-group input-group-lg'>
            <input type="password" className='form-control border border-dark mt-2 mx-auto w-75' placeholder='Enter Password' name='password' onChange={onChangeHandler}/>
            </div>
        </div>
        <div>
            <input type='submit' className='btn btn-primary mt-4 btn-lg' value='Login'/>
        </div>
    </form>
    </div>
    )
}
