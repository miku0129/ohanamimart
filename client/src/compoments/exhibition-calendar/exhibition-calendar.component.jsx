import { useState, Fragment, useContext } from "react";

import Calendar from "react-calendar";
import moment from "moment";

import { ExhibitionsContext } from "../../context/exhibitions.context";

import "./exhibition-calendar.scss";

const ExhibitionCalendar = () => {
  const { exhibitions } = useContext(ExhibitionsContext);
  const datesOfEvent = exhibitions.map((exhibition) => exhibition.start_date);

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
          if (datesOfEvent.find((dateOfEvent) => dateOfEvent === moment(date).format("YYYY/M/D"))) {
            return "highlight1";
          } else if (
            moment(value).format("DD-MM-YYYY") ===
            moment(date).format("DD-MM-YYYY")
          ) {
            return "highlight8";
          }
        }}
      ></Calendar>
    </Fragment>
  );
};

export default ExhibitionCalendar;
