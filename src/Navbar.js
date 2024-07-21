import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GuideModal from './GuideModal';
import SignInModal from './SignInModal';
import CreateActivityModal from './CreateActivityModal';
import './Navbar.css';

function Navbar() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isCreateActivityOpen, setIsCreateActivityOpen] = useState(false);

  const openGuide = () => setIsGuideOpen(true);
  const closeGuide = () => setIsGuideOpen(false);

  const openSignIn = () => setIsSignInOpen(true);
  const closeSignIn = () => setIsSignInOpen(false);

  const openCreateActivity = () => setIsCreateActivityOpen(true);
  const closeCreateActivity = () => setIsCreateActivityOpen(false);

  return (
    <div>
      <GuideModal isOpen={isGuideOpen} onRequestClose={closeGuide} />
      <SignInModal isOpen={isSignInOpen} onRequestClose={closeSignIn} />
      <CreateActivityModal isOpen={isCreateActivityOpen} onRequestClose={closeCreateActivity} />

      <nav className="navbar">
        <div className="navbar-logo">ConnectCanada</div>
        <ul className="navbar-links">
          <li className="navbar-item"><Link to="#" onClick={openCreateActivity}>Create</Link></li>
          <li className="navbar-item"><Link to="#" onClick={openGuide}>Guide</Link></li>
          <li className="navbar-item"><Link to="#" onClick={openSignIn}>Sign In</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
