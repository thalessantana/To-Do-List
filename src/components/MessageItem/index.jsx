import React, { useState, useEffect } from 'react';
import './index.css';

const MessageItem = ({ message }) => {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const now = new Date().toLocaleString();
    setTimestamp(now);
  }, []);

  return (
    <li className="message-item">
      <p>{message}</p>
      <span className="timestamp">{timestamp}</span>
    </li>
  );
};

export default MessageItem;
