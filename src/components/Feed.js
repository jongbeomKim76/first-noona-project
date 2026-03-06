import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Post from './Post';
import './Feed.css';

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: '개발자 A',
      title: 'React 프로젝트 공유',
      content: '최근 만든 React 앱을 공유합니다. 피드백 부탁드려요!',
      likes: 15,
      comments: 3,
      timestamp: '2024-03-06 10:30'
    },
    {
      id: 2,
      author: '코더 B',
      title: 'Node.js 백엔드 팁',
      content: 'Express로 API 구축 시 보안 고려사항들...',
      likes: 8,
      comments: 1,
      timestamp: '2024-03-06 09:15'
    }
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="feed-container">
      <Navbar />
      <div className="feed-content">
        <div className="feed-header">
          <h1>바이브 코딩 피드</h1>
          <button className="create-post-btn" onClick={() => navigate('/create-post')}>
            새 게시글 작성
          </button>
        </div>
        <div className="posts-container">
          {posts.map(post => (
            <Post key={post.id} post={post} onLike={handleLike} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;