import './TrackCard.css';
import { FaRegEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosShareAlt } from "react-icons/io";
import { FaPlay } from "react-icons/fa";


const TrackCard = () => {
    return ( 
        <div className="track-card">
            <div className="track-control">
                <img src="" alt="beach wave" />
                <FaPlay  className='statsIcon'/>
                {/* <audio controls>
                            <source src="" type="audio/mp3" className='audio'/>
                            Your brower does not support the audio element..
                </audio> */}
            </div>
            <div className="info-track">
                <span className='date'>February 1st, 2025</span>
                <h3>Rolling Ocean Swells</h3>
                <p className="track-description">
                    Deep, powerful waves rising and falling in the open sea, producing a soothing, continuous rumble.
                </p>
                <div className='tags'>
                    <span class="tag"><strong>Tags: </strong></span>
                    <span class="tag">Deep Wave,</span>
                    <span class="tag"> Open Sea, </span>
                    <span class="tag"> Continuous Flow, </span>
                    <span class="tag"> Distant Rumble, </span>
                    <span class="tag"> Slow Cresting</span>
                </div>
                <div className="stats">
                    <span class="stat"><FaRegEye className='statsIcon' /> 250</span>
                    <span class="stat"><IoMdDownload className='statsIcon' /> 53</span>
                    <span class="stat"><IoIosShareAlt className='statsIcon'/> 112</span>
                </div>

            </div>
        </div>
    );
}
 
export default TrackCard;