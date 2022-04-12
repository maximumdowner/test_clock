import React, { useState, useEffect } from "react";
import { binaryFormat } from "./dayjs/formats";
import './App.css';
import {stopWatchBaseValue} from "./utils/constants";
import dayjs from "dayjs";

const App = () => {
  const [timer, setTimer] = useState(binaryFormat(new Date()));

  const updateCurrentTime = () => {
    return setTimer(() => binaryFormat(new Date()));
  }

  useEffect(() => {
    const update = setInterval(updateCurrentTime, 1000);

    // console.log(stopWatchBaseValue.getHours(), 'BASE VALUE HOURS');
    // console.log(stopWatchBaseValue, 'BASE DATE');
    const stopWatchToBeValue = dayjs(stopWatchBaseValue).subtract(60, 'hours');

    // console.log(stopWatchToBeValue, 'TO BE HOURS');

    // const final = dayjs(dayjs(stopWatchBaseValue)).subtract(stopWatchToBeValue);

    console.log(stopWatchBaseValue, stopWatchToBeValue)

    console.log(binaryFormat(dayjs(stopWatchBaseValue).diff(stopWatchToBeValue, 'hours')))

    // console.log('FINAL', binaryFormat(final))

    // console.log('TIMER', timer);
  }, [timer]);

  return (
    <div className="App">
      <span className='timer'>{timer}</span>
    </div>
  );
}

export default App;
