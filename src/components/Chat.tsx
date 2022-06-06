import React, { FormEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { socket } from '../constants/socket';
import { chatsState } from '../store';
import '../style.css';

export default function Chat() {
  const [value, setValue] = useState('');
  const [chats, setChats] = useRecoilState(chatsState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      socket.emit('chat message', value);
      setValue('');
    }
  };

  useEffect(() => {
    socket.on('receive message', (msg) => {
      console.log(msg);
      setChats((prev) => [...prev, msg]);
    });

    return () => {
      socket.off();
    };
  }, []);

  return (
    <>
      <ul>
        {chats.map((chat, index) => (
          <li key={index}>{chat}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
