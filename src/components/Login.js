import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 간단한 모킹 로그인
    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ email, name: '테스트 유저' }));
      navigate('/feed');
    } else {
      setError('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="auth-btn">로그인</button>
        </form>
        <p className="auth-link">
          계정이 없으신가요? <a href="/signup">회원가입</a>
        </p>
      </div>
    </div>
  );
}

export default Login;