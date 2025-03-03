import { useState, useEffect, useRef } from 'react';
import './Navbar.css'
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import { RxAvatar } from "react-icons/rx";


function Navbar({user, setUser}) {
    
    const [screen, setScreen] = useState(null);
    const [dropdown, setDropdown] = useState(false);

    const dropdownRef = useRef(null);

    const closeScreen = () => setScreen(null);

    const handleLogout = () => {
        setUser(false);
        setDropdown(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdown(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

    return (
        <>
            <header className={screen ? "blurred" : ""}>
                    <img src="" alt="logo" />

                    <nav className='navLinks'>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/popular">Popular</a></li>
                            <li><a href="/about">About Us</a></li>
                        </ul>
                    </nav>

                    {user ? 
                    (
                        <div className="user-info" ref={dropdownRef} onClick={() => setDropdown(!dropdown)}>
                            <RxAvatar className='avatar' />
                            <span className="username">Tue Tran</span>
                            {dropdown && (
                                <div className="dropdown-menu">
                                    <p className="username">Profile</p>
                                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </div>
                    ) :
                    (
                        <nav className="profile">
                            <ul>
                                <li className='login' onClick={() => setScreen("login")}>
                                    Log in
                                </li>
                                <li><div className='dash'></div></li>
                                <li className='signup' onClick={() => setScreen("signup")}>
                                    <div className='register'>Register</div>
                                </li>
                            </ul>
                        </nav>
                    )}
            </header>

            {/* Screen for Login */}
            {screen && (
                <div className="screenOverlay" onClick={closeScreen}>
                    <div className="content" onClick={(e) => e.stopPropagation()}>
                        {screen === "login" ? <Login setUser={setUser} /> : <Signup setUser={setUser}/>}
                        <button className="xClose" onClick={closeScreen}>×</button>
                    </div>
                </div>
            )}
        </>
    );
}
 
export default Navbar;