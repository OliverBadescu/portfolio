import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Home() {
    return (
      <div className="home-container">
        <div className="intro-container">
          <h1 className="home-intro">hi, Oliver here 👋</h1>
          <p>20-year-old software developer from Romania</p>
          <p>I like to develop full-stack, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem.</p>
          <div className="links-container">
            <Button> Resume <i class="fa-solid fa-file-arrow-down"></i></Button>
            <Link to={'https://www.linkedin.com/in/badescu-oliver-abb68a253/'}><i class="fa-brands fa-linkedin-in"></i></Link>
            <Link to={'https://github.com/OliverBadescu'}><i class="fa-brands fa-github"></i></Link>
            <Link to={'mailto:olibadescu@gmail.com'}><i class="fa-regular fa-envelope"></i></Link>
          </div>
          
        </div>
        <div>
          <img src={profile} alt="Ted" className="profile-picture" />
        </div>
      </div>
    );
  }