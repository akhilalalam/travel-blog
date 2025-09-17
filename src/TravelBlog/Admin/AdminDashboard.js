import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { loginstatus } from '../../App';
import AdminLogin from './AdminLogin';

const AdminDashboard = () => {
    const { login, setlogin} = useContext(loginstatus)
     if (login) {
         return (
          <section className= 'container mt-5'>
            <div className='card shadow-lg p-4'>
                <h2  className='text-centre text-primary mb-4'>Admin Dashboard</h2>
                <aside className='d-flex justify-content-center flex-wrap gap-3 mt-4'>
                    <Link to={'addblog'}>
                    <button className='btn btn-info text-white px-4'>Add Blog</button>
                    </Link>
                    <Link to={'viewblog'}>
                    <button className=' btn btn-success px-4'>View Blog</button>
                    </Link>
                    <Link to={'logout'}>
                    <button className='btn btn-danger px-4' onClick={() =>setlogin(false)}>Logout</button>
                    </Link>
                </aside>
                <div className='col-lg-9'>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
   else{
      return<AdminLogin />
   }
}

export default AdminDashboard