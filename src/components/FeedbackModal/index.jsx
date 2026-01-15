import React from 'react';
import './styles.css';

export default function FeedbackModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="feedback-modal-backdrop" onClick={handleBackdropClick}>
      <div className="feedback-modal">
        <button className="feedback-modal-close" onClick={onClose} aria-label="关闭">
          ✕
        </button>
        <div className="feedback-modal-header">
          <span className="feedback-modal-icon">💬</span>
          <h3 className="feedback-modal-title">您的反馈对我很重要</h3>
        </div>
        <div className="feedback-modal-content">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSc8RCmuvNdwyya9M6ZgPbZ_psAzSIhVnWKaU6dlJisZdR3Xtw/viewform?embedded=true" 
            width="640" 
            height="450" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            title="反馈表单"
          >
            正在加载…
          </iframe>
        </div>
      </div>
    </div>
  );
}
