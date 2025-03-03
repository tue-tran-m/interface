import './Signup.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";


const Signup = ({setUser}) => {

    const handleGoogleLogin = () => {
        setUser(true);
    };

    return (
         <div className="container">
            <div className="header">
                <div className="text">Register</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <FaRegUser className='icon' />
                    <input type="email" className="email" placeholder='Username'/>
                </div>
                <div className="input">
                    <MdOutlineEmail className='icon' />
                    <input type="email" className="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <MdOutlineLock className='icon' />
                    <input type="password" placeholder='Password' />
                </div>
                <div className="input">
                    <MdOutlineLock className='icon' />
                    <input type="password" placeholder='Confirm Password' />
                </div>
            </div>
            <div className="forgotPass">
                Already have an account? <span>Log In</span>
            </div>
            <div className="submitContainer">
                <button className="submit">Sign Up</button>
            </div>
            <div className="another">
                <div className='dash2'></div>
                <p>or sign up with</p>
                <div className='dash2'></div>
            </div>
            <div className='google'>
                <FcGoogle onClick={() => handleGoogleLogin()} />
            </div>

         </div>
        
    );
}
 
export default Signup;