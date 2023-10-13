import { useState, Fragment } from "react";

import Calendar from "react-calendar";
import moment from "moment";

import "./exhibition-calendar.scss";

const mark = ["04-10-2023", "03-10-2023", "05-10-2023"];
//todo: markの配列に exhibitions contextからイベント開催日を持ってきて加工する

const ExhibitionCalendar = () => {
  const [value, setValue] = useState(new Date());
  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <Fragment>
      <Calendar
        style={{ height: 500 }}
        onChange={onChange}
        value={value}
        tileClassName={({ date }) => {
          // console.log("date", moment(date).format("DD-MM-YYYY"))
          if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
            console.log("date", moment(date).format("DD-MM-YYYY"));

            return "highlight1";
          }
        }}
      ></Calendar>
    </Fragment>
  );
};

export default ExhibitionCalendar;
