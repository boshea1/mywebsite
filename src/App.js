// import './App.scss';
import styled, {keyframes} from 'styled-components'
import {bounce} from 'react-animations';
import {  useSpring, animated } from '@react-spring/web'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './App.css'
import video from './assets/rentalwebsitedemo.mp4'
import video1 from './assets/crown-clothingdemo.mp4'
import meandrubes from "./assets/meandrubes.jpeg" 
const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite; animation-iteration-count:1;`




function App() {

    const springs = useSpring({
      from: { x: '50vw' },
      to: { x: '20vw' },
    })
    const springs1 = useSpring({
      from: { x: '40vw' },
      to: { x: '30vw' },
    })
    const springs2 = useSpring({
      from: { x: '30vw' },
      to: { x: '40vw' },
    })
    const springs3 = useSpring({
      from: { x: '10vw' },
      to: { x: '50vw' },
    })

    
    return (
      <div className="App">
      <div className='inside'>
     <h1>My Portfolio Website</h1>
     <Bounce><h1 className='Mastering'>Mastering React one project at a time...</h1></Bounce>
     <div className='animate'>
     <animated.div
      style={{
        width: 80,
        height: 80,
        background: 'white',
        borderRadius: 8,
        ...springs,
      }}>
       <FontAwesomeIcon icon={faCss3Alt} className={'fa-3x'}/>
        </animated.div>
        <animated.div
      style={{
        width: 80,
        height: 80,
        background: 'white',
        borderRadius: 8,
        ...springs1,
      }}>
       <FontAwesomeIcon icon={faJs} className={'fa-3x'}/>
       </animated.div>
       <animated.div
      style={{
        width: 80,
        height: 80,
        background: 'white',
        borderRadius: 8,
        ...springs2,
      }}>
       <FontAwesomeIcon icon={faHtml5} className={'fa-3x'}/>
       </animated.div>
       <animated.div
      style={{
        width: 80,
        height: 80,
        background: 'white',
        borderRadius: 8,
        ...springs3,
      }}>
       <FontAwesomeIcon icon={faReact} className={'fa-3x'}/>
       </animated.div>
       </div>
   
      <div>
        <p>I have learned:</p>
        <div className='appear'>
        <ul  className='scrolling-text'>
        <li className='scrolling-text-content'>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>TailwindCSS</li>
        <li>Firebase Authentication</li>
        <li>Firebase Firestore</li>
        <li>Python</li>
        <li>amongst other technologies...</li>
        </ul>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      </div>
      <caption style={{textAlign:'center',display: 'block',
  margin: '0 auto'}}>
      <img src={meandrubes} alt="Ruby and I" />
      Ruby and I
      </caption>
      <div>
      
      <p>I am currently looking for Full Time work as a Junior React Developer...
      </p>
      <p>
      Preferably remote due to home circumstances, but hybrid work would be suitable as well.
      </p>
      <p>If your company has a specific stack that I haven't listed I am able to learn other technologies and frameworks quickly.
      </p>
      <p>
          My github is https://github.com/boshea1
          </p>
      </div>
      </div>

      <div className='inside2'>
          <h1>
          Portfolio
          <br/>
          </h1>
          <br/>
          <br/>
          <h1>
          RentalWebsite Demo
          </h1>
          <p>NextJS, TailwindCSS, Firebase Authentication</p>
          <br/>
          <video width="750" height="500" controls textAlign='center' >
      <source src={video} type="video/mp4"/>
     </video>
     <br/>
          <br/>
          <h1>
          Crown-clothing Demo
          </h1>
          <p>React, SCSS, Firebase Authentication, Easy-Peasy state management</p>
          <br/>
          <video width="750" height="500" controls textAlign='center' >
      <source src={video1} type="video/mp4"/>
     </video>
      </div>
      </div>
  );
}

export default App;
