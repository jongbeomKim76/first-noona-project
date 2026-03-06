import React, { useState } from 'react';
import './Post.css';

function Post({ post, onLike }) {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: '댓글러1', content: '좋은 프로젝트네요!', timestamp: '2024-03-06 11:00' }
  ]);

  const handleComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: '현재 사용자',
        content: comment,
        timestamp: new Date().toLocaleString()
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <h3>{post.title}</h3>
        <span className="post-author">{post.author}</span>
        <span className="post-time">{post.timestamp}</span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-actions">
        <button className="action-btn" onClick={() => onLike(post.id)}>
          👍 좋아요 ({post.likes})
        </button>
        <button className="action-btn" onClick={() => setShowComments(!showComments)}>
          💬 댓글 ({comments.length})
        </button>
      </div>
      {showComments && (
        <div className="comments-section">
          <div className="comments-list">
            {comments.map(c => (
              <div key={c.id} className="comment">
                <strong>{c.author}:</strong> {c.content}
                <small> {c.timestamp}</small>
              </div>
            ))}
          </div>
          <div className="comment-input">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요..."
              onKeyPress={(e) => e.key === 'Enter' && handleComment()}
            />
            <button onClick={handleComment}>댓글 달기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;