 import React from 'react';

const AudioTimer = ({ isRunning, setIsRunning, elapsedTime, setElapsedTime }) => {
  React.useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setElapsedTime((prev) => prev + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const hours = Math.floor(elapsedTime / 360000);
  const minutes = Math.floor((elapsedTime % 360000) / 6000);
  const seconds = Math.floor((elapsedTime % 6000) / 100);
  const milliseconds = elapsedTime % 100;

  return (
    <div className="text-[25px] mt-4 font-semibold text-white">
      <div className="time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        <span className="inline-block w-[23px]">
          {seconds.toString().padStart(2, "0")}
        </span>:
        <span className="inline-block w-[23px] ml-3">
          {milliseconds.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default AudioTimer;
