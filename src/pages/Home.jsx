import profile from '../assets/profile.jpg';
import zaraLogo from '../assets/zara-logo.png'
import ulbsLogo from '../assets/ulbs-logo.png';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <>
      <div className="home-container">
        <div className="intro-container">
          <h1 className="home-intro">hi, Oliver here 👋</h1>
          <p>20-year-old software developer from Romania</p>
          <p>
            I like to develop full-stack, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus, rem.
          </p>
          <div className="links-container">
            <Button>
              <a href="/resume.pdf" download className="download-resume">
                <span>Resume</span>{' '}
                <i className="fa-solid fa-file-arrow-down"></i>
              </a>
            </Button>
            <Link to="https://www.linkedin.com/in/badescu-oliver-abb68a253/">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to="https://github.com/OliverBadescu">
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link to="mailto:olibadescu@gmail.com">
              <i className="fa-regular fa-envelope"></i>
            </Link>
          </div>
        </div>
        <div>
          <img src={profile} alt="Oliver" className="profile-picture" />
        </div>
      </div>

      <main className="main-container">
        <div className="work-education">
          <Button
            className={`tab-button ${activeTab === 'work' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work
          </Button>
          <Button
            className={`tab-button ${
              activeTab === 'education' ? 'active-tab' : ''
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </Button>
        </div>

        <div className="tab-content">
        {activeTab === 'work' && (
          <div className="work-content">
            <ul className="experience-list">
              
              <li>
                <div className="logo-container">
                  <img src={zaraLogo} alt="Zara logo" className="logo" />
                </div>
                <div className="experience-item-title">
                  <time className="dates">Sep 2021 – Dec 2022</time>
                  <p className="company-name">Zara</p>
                  <p className="position">Sales Associate</p>
                  <ul>
                    <li>Served as Sales Associate in high-traffic retail store</li>
                    <li>Assisted customers with styling advice</li>
                    <li>Managed stock inventory and restocked displays daily</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="education-content">
            <ul className="education-list">
              <li>
                <div className="logo-container">
                  <img src={ulbsLogo} alt="Lucian Blaga Sibiu logo" className="logo" />
                </div>
                <div className="experience-item-title"> 
                  <time className="dates">2023 – Present</time>
                  <p className="company-name">University of Lucian Blaga Sibiu</p>
                  <p className="position">B.Sc. Computer Science</p>
                  <ul>
                    <li>Completed advanced coursework in data structures and algorithms</li>
                    <li>Developed a web-based student management system as part of a team project using React and Node.js</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}
        </div>
      </main>
    </>
  );
}
