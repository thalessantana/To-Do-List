import { useState, useEffect } from 'react';
import { MessageLi } from './styles';
import { MessageItem } from './styles';
import { Timestamp } from './styles';

const Message = ({ message }) => {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const now = new Date().toDateString
    ();
    setTimestamp(now);
  }, []);

  return (
    <MessageLi>
      <MessageItem>{message}</MessageItem>
      <Timestamp>{timestamp}</Timestamp>
    </MessageLi>
  );
};

export default Message;
