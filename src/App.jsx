import { useState } from "react";

import Countdown from "./components/Countdown/Countdown";

import snowman from "./assets/images/snowman.png";
import wreath from "./assets/images/winter-wreath.png";

import classes from "./App.module.scss";

const date = "2022-11-30T23:00:00";

const App = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.countdownContainer}>
        <div className={classes.snowmanContainer}>
          <img src={snowman} alt="Snowman" />
        </div>
        <Countdown date={date} />
        <div className={classes.wreathContainer}>
          <img src={wreath} alt="Winter wreath" />
        </div>
      </div>
    </div>
  );
};

export default App;
