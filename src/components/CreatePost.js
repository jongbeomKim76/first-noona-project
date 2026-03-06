import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './CreatePost.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      // 실제로는 API 호출
      console.log('새 게시글:', { title, content });
      navigate('/feed');
    }
  };

  return (
    <div className="create-post-container">
      <Navbar />
      <div className="create-post-content">
        <h2>새 게시글 작성</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="게시글 제목을 입력하세요"
              required
            />
          </div>
          <div className="form-group">
            <label>내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="프로젝트 설명, 코드 공유 등..."
              rows="10"
              required
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={() => navigate('/feed')} className="cancel-btn">
              취소
            </button>
            <button type="submit" className="submit-btn">
              게시하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;