import React, { useState, useEffect } from 'react';
import './Memo.css';

function Memo() {
  const [memos, setMemos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 로컬 스토리지에서 메모 로드
  useEffect(() => {
    const savedMemos = JSON.parse(localStorage.getItem('memos')) || [];
    setMemos(savedMemos);
  }, []);

  // 메모 추가
  const addMemo = () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('제목과 메모를 모두 입력하세요!');
      return;
    }

    const newMemo = {
      id: Date.now(),
      title: title,
      content: content,
      date: new Date().toLocaleString('ko-KR')
    };

    const updatedMemos = [newMemo, ...memos];
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
    setTitle('');
    setContent('');
  };

  // 메모 삭제
  const deleteMemo = (id) => {
    const updatedMemos = memos.filter(memo => memo.id !== id);
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
  };

  // 로컬 스토리지에 저장
  const saveMemos = (memosToSave) => {
    localStorage.setItem('memos', JSON.stringify(memosToSave));
  };

  // 엔터 키 처리 (Ctrl+Enter)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      addMemo();
    }
  };

  return (
    <div className="memo-container">
      <h1>📝 메모앱</h1>
      
      <div className="input-section">
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요..."
          maxLength="30"
        />
      </div>

      <div className="input-section">
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메모를 입력하세요... (Ctrl+Enter로 추가)"
          rows="3"
        ></textarea>
        <button onClick={addMemo}>추가</button>
      </div>

      <div className="memo-list">
        {memos.length === 0 ? (
          <div className="empty-message">메모를 추가해보세요!</div>
        ) : (
          memos.map(memo => (
            <div key={memo.id} className="memo-item">
              <div className="memo-text">
                <div className="memo-title">{memo.title}</div>
                <div className="memo-content">{memo.content}</div>
                <div className="memo-date">{memo.date}</div>
              </div>
              <button className="delete-btn" onClick={() => deleteMemo(memo.id)}>
                삭제
              </button>
            </div>
          ))
        )}
      </div>

      <div className="memo-count">
        <span>{memos.length}</span>개의 메모
      </div>
    </div>
  );
}

export default Memo;