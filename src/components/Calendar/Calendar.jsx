import { useEffect, useState } from "react";
import classNames from "classnames";

import classes from "./Calendar.module.scss";

const calendarDays = [
  {
    day: 1,
    validFrom: new Date("2021-11-01"),
  },
  {
    day: 2,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-02")
  },
  {
    day: 3,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-03")
  },
  {
    day: 4,
    validFrom: new Date("2022-12-01"),
    // validFrom: new Date("2021-12-04")
  },
  {
    day: 5,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-05")
  },
  {
    day: 6,
    validFrom: new Date("2022-12-01"),
    // validFrom: new Date("2021-12-06")
  },
  {
    day: 7,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-07")
  },
  {
    day: 8,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-08")
  },
  {
    day: 9,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-09")
  },
  {
    day: 10,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-10")
  },
  {
    day: 11,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-11")
  },
  {
    day: 12,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-12")
  },
  {
    day: 13,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-13")
  },
  {
    day: 14,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-14")
  },
  {
    day: 15,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-15")
  },
  {
    day: 16,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-16")
  },
  {
    day: 17,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-17")
  },
  {
    day: 18,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-18")
  },
  {
    day: 19,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-19")
  },
  {
    day: 20,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-20")
  },
  {
    day: 21,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-21")
  },
  {
    day: 22,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-22")
  },
  {
    day: 23,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-23")
  },
  {
    day: 24,
    validFrom: new Date("2021-11-01"),
    // validFrom: new Date("2021-12-24")
  },
];

const Calendar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={classes.container}>
      {/* <div className={classes.controls}></div> */}
      <div className={classes.calendar}>
        {calendarDays.map((calendarDay) => {
          const { day, validFrom } = calendarDay;
          const isActive = validFrom <= currentTime;
          return (
            <div className={classes.dayContainer} key={day}>
              <div
                className={classNames(classes.day, {
                  [classes["day--active"]]: isActive,
                })}
              >
                <div className={classes.number}>{day}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
