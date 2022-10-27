import Countdown from "./components/Countdown/Countdown";

import classes from "./styles/App.module.scss";

const date = "2022-11-30T23:00:00";

const App = () => {
  return (
    <div className={classes.container}>
      <Countdown date={date} />
    </div>
  );
};

export default App;
