import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const Calendar = ({ date, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
