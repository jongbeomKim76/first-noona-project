import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => navigate('/feed')}>
        바이브 코딩
      </div>
      <div className="nav-links">
        <button onClick={() => navigate('/feed')}>홈</button>
        <button onClick={() => navigate('/search')}>검색</button>
        <button onClick={() => navigate('/profile')}>프로필</button>
        <span className="user-info">안녕하세요, {user?.name}님</span>
        <button onClick={handleLogout} className="logout-btn">로그아웃</button>
      </div>
    </nav>
  );
}

export default Navbar;