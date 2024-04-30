import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.jpg'
const NavBar = () => {

     const navItems = <>
     <li><Link to='/home'>Home</Link></li>
     <li><Link to='/menus'>Our menus</Link></li>
     <li><Link to='/reservation'>Reservation</Link></li>
     <li><Link to='/blog'>Blog</Link></li>
     <li><Link to='/signup'>Sign up</Link></li>
     
     </>

    return (
        <div className="navbar bg-slate-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-20 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={logo} />
        </div>
      </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login'>Login</Link>
        </div>
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={logo} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div>
    );
};

export default NavBar;