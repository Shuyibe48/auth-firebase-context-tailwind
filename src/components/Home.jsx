import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                {!user && <>
                    <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                    <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                </>}
                {user && <Link onClick={logOut} to='/login' className="btn btn-ghost normal-case text-xl">LogOut</Link>}
                {user && <span className='normal-case text-xl ms-auto me-12'>{user.email}</span>}
            </div>
        </div>
    );
};

export default Home;