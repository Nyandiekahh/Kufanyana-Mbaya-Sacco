// src/components/Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
