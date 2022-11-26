import { useEffect, useState } from "react";

import Calendar from "./components/Calendar/Calendar";
import Countdown from "./components/Countdown/Countdown";

import classes from "./styles/App.module.scss";

const date = "2022-12-01T00:00:00";

const App = () => {
  const [countdown, setCountdown] = useState(
    new Date(date).getTime() - new Date().getTime()
  );
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  useEffect(() => console.log({ isCalendarVisible }), [isCalendarVisible]);

  useEffect(() => {
    let interval;
    if (new Date(date).getTime() - new Date().getTime() > 0) {
      interval = setInterval(() => {
        if (new Date(date).getTime() - new Date().getTime() > 0) {
          setCountdown(new Date(date).getTime() - new Date().getTime());
        } else {
          setIsCalendarVisible(true);
          clearInterval(interval);
        }
      }, 1000);
    } else {
      setIsCalendarVisible(true);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      {isCalendarVisible ? <Calendar /> : <Countdown countdown={countdown} />}
    </div>
  );
};

export default App;
