import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from '@material-ui/pickers'
import { makestyles, useTheme } from '@material-ui/core'

import './DatePicker.css'

export const DatePickerComponent = props => {
  const { selectedDate, handleDateChange } = props
  const theme = useTheme()

  useEffect(() => {
    console.log({ theme })
  }, [theme])

  return (
    <div className="date-wrapper">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          autoOk
          className="date-component"
          margin="normal"
          id="mui-pickers-date"
          label="Due Date"
          inputVariant="filled"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <TimePicker
          autoOk
          className="time-component"
          margin="normal"
          id="mui-pickers-time"
          label="Due Time"
          inputVariant="filled"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

DatePickerComponent.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  handleDateChange: PropTypes.func.isRequired
}
