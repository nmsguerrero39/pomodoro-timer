import React, { useState, useEffect } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-tomato");
  const [boxColor, setBoxColor] = useState("bg-tomatoOpacity");
  const [textColor, setTextColor] = useState("text-tomato");
  const [activeButton, setActiveButton] = useState(1);
  const [message, setMessage] = useState("Time to focus!");

  const [timer, setTimer] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const changeUI = (bgColor, boxColor, textColor, timer, message) => {
    setBgColor(bgColor);
    setBoxColor(boxColor);
    setTextColor(textColor);
    setTimer(timer);
    setMessage(message);
  };

  const buttons = [
    {
      id: 1,
      label: "Pomodoro",
      bgColor: "bg-tomato",
      boxColor: "bg-tomatoOpacity",
      textColor: "text-tomato",
      timer: 1500,
      message: "Time to focus!",
    },
    {
      id: 2,
      label: "Short Break",
      bgColor: "bg-short-break",
      boxColor: "bg-short-break-opacity",
      textColor: "text-short-break",
      timer: 300,
      message: "Time for a break!",
    },
    {
      id: 3,
      label: "Long Break",
      bgColor: "bg-long-break",
      boxColor: "bg-long-break-opacity",
      textColor: "text-long-break",
      timer: 900,
      message: "Don't forget to get back!",
    },
  ];

  return (
    <>
      <div
        className={`${bgColor} transition-colors duration-500 h-screen w-full flex flex-col items-center justify-center font-pomodoroFont text-white text-center`}
      >
        <div
          className={`${boxColor} transition-all duration-500 pt-6 pb-8 px-12 rounded-md`}
        >
          <ul className="flex font-medium text-lg items-center">
            {buttons.map((button) => (
              <li
                key={button.id}
                onClick={() => {
                  changeUI(
                    button.bgColor,
                    button.boxColor,
                    button.textColor,
                    button.timer,
                    button.message
                  );
                  setActiveButton(button.id);
                  setIsRunning(false);
                }}
                className={`mx-4 py-1 px-4 rounded-md cursor-pointer active:translate-y-1 ${
                  activeButton === button.id && "bg-black/15 font-bold"
                }`}
              >
                {button.label}
              </li>
            ))}
          </ul>
          <h1 className="font-bold text-9xl py-8">{formatTime(timer)}</h1>
          <button
            className={`uppercase ${textColor} transition-all duration-500 bg-white font-bold text-2xl py-3.5 px-16 rounded-md shadow-button-shadow active:shadow-none active:translate-y-2`}
            onClick={toggleTimer}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>
        <span className="text-2xl font-bold transition-all duration-500 my-6">
          {message}
        </span>
      </div>
    </>
  );
};

export default App;
