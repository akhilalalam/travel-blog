import  { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginstatus } from '../../App'

const AdminLogin = () => {
    const {login,setlogin} = useContext(loginstatus)
    const [details, setDetails] = useState({ email: '', password: ''})
    const navigate = useNavigate()

    const changeData = (e)  => {
        setDetails({...details,[e.target.name]: e.target.value})
    }
    const submithandler = (e) => {
        e.preventDefault()
        console.log(details);
        const { email, password } = details
        if (email === 'admin@travels.com' && password === 'admin123') {
            alert('login successful')
            setlogin(true)
            navigate('/dashboard')
        }
        else {
            alert('invalid credentials')
        }
    }
    return (
        <div className='container p-5'>
        <div className='col-lg-6 mx-auto shadow p-5 text-center'>
            <h2 className='mb-5'>AdminLogin</h2>
            <form onSubmit={submithandler}>
                <input type='email' name='email' value={details.email} onChange={changeData} placeholder='Email Adress' className='form-control mb-3'/>
                <input type='password' name='password' value={details.password} onChange={changeData} placeholder='Password' className='form-control mb-3'/>
                <input type='submit' className='form-control mb-3' value="Login"/>
            </form>
        </div>
        </div>

    )
}

export default AdminLogin