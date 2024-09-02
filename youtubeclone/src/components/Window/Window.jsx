import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './Window.css';

const Window = () => {
  return (
    <div className='Window'>
      <div className="header">
       <div> <FaYoutube className='icon'/></div>
       <div className='youtube'>YOUTUBE</div>
        <div>
          <input type="text" placeholder='Search...' />
        </div>
        <div> <FaSearch className='icon1'/></div>
      </div>
      <div className="videos">
        <div>
          <img src="img1.png" alt="" />
          <p>React Tutorial in Tamil</p>
          <span>2 Years ago</span>
        </div>
        <div>
          <img src="./img2.png" alt="" />
          <p>React Tutorial in Tamil</p>
          <span>1 Year ago</span>
        </div>
        <div>
          <img src="./img3.png" alt="" />
          <p>Spring Tutorial in 90 minutes</p>
          <span>8 Months ago</span>
        </div>
        <div>
          <img src="./img4.png" alt="" />
          <p>Java Tutorial in 8 Hours</p>
          <span>1 Year ago</span>
        </div>
      </div>
      <div className="videos2">
        <div>
          <img src="img5.png" alt="" />
          <p>Python Tutorial in Tamil</p>
          <span>2 Years ago</span>
        </div>
        <div>
          <img src="./img6.png" alt="" />
          <p>C Programming Tutorial in Tamil</p>
          <span>1 Year ago</span>
        </div>
        <div>
          <img src="./img7.png" alt="" />
          <p>Tableau Tutorial in Tamil</p>
          <span>8 Months ago</span>
        </div>
        <div>
          <img src="./img8.png" alt="" />
          <p>PowerBI Full Course</p>
          <span>1 Year ago</span>
        </div>
      </div>
    </div>
  )
}

export default Window
