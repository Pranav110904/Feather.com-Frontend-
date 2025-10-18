import React from "react";
import AudioTimer from "./AudioTimer";
//import { ReactMic } from "react-mic";

const ReactRecorder = () => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [voice, setVoice] = React.useState(false);
  const [recordBlobLink, setRecordBlobLink] = React.useState(null);
  const [micLevel, setMicLevel] = React.useState(0); // for sensitivity display

  const onStop = (recordedBlob) => {
    setRecordBlobLink(recordedBlob.blobURL);
    console.log(recordedBlob);
    setIsRunning(false);
  };

  const startHandle = () => {
    setElapsedTime(0);
    setIsRunning(true);
    setVoice(true);
  };

  const stopHandle = () => {
    setIsRunning(false);
    setVoice(false);
  };

  const clearHandle = () => {
    setIsRunning(false);
    setVoice(false);
    setRecordBlobLink(null);
    setElapsedTime(0);
  };

  return (
    <div className="max-w-sm border py-4 px-6 mx-auto bg-black rounded-xl shadow-md mt-8 text-center">
      <h2 className="text-[22px] font-semibold text-white mb-2">
        Audio Recorder
      </h2>

      <AudioTimer
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
      />

      {/* ReactMic component */}
      <div className="relative mt-4">
        {/* <ReactMic
          record={voice}
          className="sound-wave w-full"
          onStop={onStop}
          onData={(recordedData) => {
            // Adjusting mic level for sensitivity
            const avg = recordedData.buffer
              ? recordedData.buffer
                  .map((x) => Math.abs(x))
                  .reduce((a, b) => a + b, 0) / recordedData.buffer.length
              : 0;
            setMicLevel(avg * 1000);
          }}
          strokeColor="#00ff88"
          backgroundColor="#222"
          mimeType="audio/webm"
        />*/}

        {/* Sensitivity Glow */}
        {voice && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: `0 0 ${Math.min(micLevel, 40)}px ${
                micLevel > 10 ? "#00ff88" : "#00ff8855"
              }`,
              borderRadius: "12px",
              transition: "box-shadow 0.1s ease-out",
            }}
          />
        )}
      </div>

      {/* Controls */}
      <div className="mt-4 flex justify-center gap-3">
        {!voice ? (
          <button
            onClick={startHandle}
            className="bg-white text-black rounded-md py-1 px-4 font-semibold"
          >
            Start
          </button>
        ) : (
          <button
            onClick={stopHandle}
            className="bg-white text-black rounded-md py-1 px-4 font-semibold animate-pulse"
          >
            Stop
          </button>
        )}

        {recordBlobLink && (
          <button
            onClick={clearHandle}
            className="text-white font-medium text-[16px]"
          >
            Clear
          </button>
        )}
      </div>

      {/* Playback */}
      {recordBlobLink && (
        <audio controls src={recordBlobLink} className="mt-6 w-full" />
      )}
    </div>
  );
};

export default ReactRecorder;
