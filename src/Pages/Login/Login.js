import './Login.css';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Login = ({setUser}) => {

    const handleGoogleLogin = () => {
        setUser(true);
    };

    return (
         <div className="container">
            <div className="header">
                <div className="text">Log In</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <FaRegUser className='icon' />
                    <input type="email" className="email" placeholder='Enter your email or username'/>
                </div>
                <div className="input">
                    <MdOutlineLock className='icon' />
                    <input type="password" placeholder='Enter your password' />
                </div>
            </div>
            <div className="forgotPass">
                Lost Password? <span>Click Here!</span>
            </div>
            <div className="submitContainer">
                <button className="submit signupButton">Sign Up</button>
                <button className="submit">Log in</button>
            </div>
            <div className="another">
                <div className='dash2'></div>
                <p>or log in with</p>
                <div className='dash2'></div>
            </div>
            <div className='google' onClick={() => handleGoogleLogin()}>
                <FcGoogle />
            </div>
         </div>
        
    );
}
 
export default Login;