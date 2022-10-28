import classes from "./Calendar.module.scss";

const Calendar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.controls}></div>
      <div className={classes.calendar}>
        {Array.from({ length: 24 }, (_, i) => i + 1).map((day) => (
          <div className={classes.day} key={day}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
