import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fortnite_img from './images/fortnite.png';
//import image_one from '.images/image1.png';
//import image_two from './images/image_2.png';
//import image_three from './images/image_3.png';
//error while importing these 3 images. so commented out to avoid error.



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div style={{backgroundColor:'black',width:''}}>
      <div className='starting-text'>
        <p>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</p>
      </div>
      <div>
        <img src={fortnite_img} width="200px" alt='Fortnite' style={{width: "1415px", height: "500px", top: "293px" ,left: "253px"}}></img>
      </div>
      <div className='second-text'>
        <p>
        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
      </div>
     
      <div className="visit-website">
        <button className='visit-button'>Visit Website</button>
      </div>
      <div className='contribution'>
        <h3>Our contribution</h3>
        <p>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
      </div>
      <div className='stats'>
        <div className='stats-1'>
          <h2>5M</h2>
          <p>Daily User Engagements </p>
        </div>
        <div className='stats-2'>
          <h2>$500</h2>
          <p>Revenue Surge for anPlatform </p>
        </div>
        <div className='stats-3'>
          <h2>10X</h2>
          <p>Daily User Engagements </p>
        </div>
       
      </div>
      <div className='h2-container'>
        <div>
        <h2>Interested in delving deeper into the project?</h2>
        </div>
        <div>
          <p>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
          <button>Ring Us on Skype</button>
          <button>Contact Us</button>
        </div>

      </div>
    
      
    </div>


  )
}

export default App
