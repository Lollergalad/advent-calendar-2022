import { useEffect, useState } from "react";

import christmasGift from "../../assets/images/christmas-gift.png";
import christmasTree from "../../assets/images/christmas-tree.png";
import snowGlobe from "../../assets/images/snow-globe.png";

import classes from "./Countdown.module.scss";

const Countdown = ({ date }) => {
  const [countdown, setCountdown] = useState(
    new Date(date).getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(new Date(date).getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  });

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
    <div className={classes.countdown}>
      <div className={classes.box}>
        <div className={classes.timePart}>{days < 10 ? `0${days}` : days}</div>
        <div className={classes.text}>days</div>
      </div>
      <div className={classes.divider}>
        <img src={christmasGift} alt="Christmas gift" />
      </div>
      <div className={classes.box}>
        <div className={classes.timePart}>
          {hours < 10 ? `0${hours}` : hours}
        </div>
        <div className={classes.text}>hours</div>
      </div>
      <div className={classes.divider}>
        <img src={christmasTree} alt="Christmas tree" />
      </div>
      <div className={classes.box}>
        <div className={classes.timePart}>
          {minutes < 10 ? `0${minutes}` : minutes}
        </div>
        <div className={classes.text}>minutes</div>
      </div>
      <div className={classes.divider}>
        <img src={snowGlobe} alt="Snow globe" />
      </div>
      <div className={classes.box}>
        <div className={classes.timePart}>
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className={classes.text}>seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
