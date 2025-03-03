import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { GiSoundWaves } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { FcFilledFilter } from "react-icons/fc";
import RecentlyCard from './Components/RecentlyCards/RecentlyCard';
import TrackCard from './Components/TrackCards/TrackCard';
import Category from './Components/Category/Category';
import About from './About/About';

function App() {

  const [user, setUser] = useState(false);

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <div className="introduction">
        <GiSoundWaves className='sound-icon' />
        <p className='description'><strong>SoundscapeGen</strong> lets you create custom
        <p></p>soundscapes by simply describing what you want to <p></p> hear.</p>
      </div>

      <div className="search-box">
        <input type="text" className="text" placeholder='Enter what you want to hear' />
        <button>
          <IoSearchOutline className='search-icon' />
        </button>
      </div>
      
      {user &&
        <div className="recently-listen">
          <h2>Recently Listen</h2>
          <div className="dash3"></div>
          <div className="listen-container">
                  <RecentlyCard />
                  <RecentlyCard />
                  <RecentlyCard />
                  <RecentlyCard />
                  <RecentlyCard />
                  <RecentlyCard />
                  <RecentlyCard />
          </div>
        </div>
      }

      <div className="popular">
        <h2>Popular Sounds</h2>
        <div className="dash3"></div>
        <h3 className='category-title'>Category</h3>
        <div className="popular-container">
            <Category />
          <div className="category-tracks">
            <div className="track-subcate-container">
              <div className="chosenCategory">
                <p className='chosen'>Nature</p>
                <p className='chosen'>Ocean Waves</p>
              </div>
              <FcFilledFilter className="filterIcon" />
            </div>
            <div className="tracks">
              <TrackCard />
              <TrackCard />
              <TrackCard />
              <TrackCard />
              <TrackCard />
            </div>
          </div>
        </div>
      </div>

      <About />
    </>
  );
}

export default App;
