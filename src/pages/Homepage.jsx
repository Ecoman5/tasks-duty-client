import React from 'react'
import Header from '../components/Header'
import '../styles/home.css'
import imggg from '../assets/imgone.png'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className='hmmm'>
        <div>
          <div className="d-md-flex justify-content-around mx-1 my-2 align-items-center">
            <div className="home-manage"> 
              <h3>
                Manage your Tasks on <br />
                <span>TaskDuty</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et,
                at platea tempus duis non eget. Hendrerit tortor fermentum
                bibendum mi nisl semper porttitor. Nec accumsan.
              </p>
              <Link to="/all" className="text-decoration-none">
                <button>Go to My Tasks</button>
              </Link>
            </div>
            <div className="home-img">
              <img src={imggg} alt="" width='100%' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage