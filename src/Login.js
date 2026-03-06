import React, { useState } from 'react';
import './Login.css'; // 스타일 파일 (아래에 별도 생성)

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 간단한 검증 예시 (실제로는 API 호출)
    if (email === 'test@example.com' && password === 'password') {
      alert('로그인 성공!');
      setError('');
    } else {
      setError('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="login-container">
      <img src="https://images.dog.ceo/breeds/retriever-golden/n02099601_11136.jpg" alt="강아지" className="login-dog-image" />
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;