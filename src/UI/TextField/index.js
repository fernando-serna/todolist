import React, { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import uuidv4 from 'uuid'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { DatePickerComponent as DatePicker } from '../DatePicker'

import './TextField.css'

const useStyles = makeStyles(() => ({
  input: {
    color: 'white'
  }
}))

export const TextFieldComponent = props => {
  const classes = useStyles()
  const [task, setTask] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  const addTask = () => {
    props.addTask({ id: uuidv4(), text: task, date: selectedDate })
    setTask('')
  }

  useEffect(() => {
    const d = new Date()
    d.setHours(23, 59, 0)
    setSelectedDate(d)
  }, [])

  return (
    <div className="task-wrapper">
      <TextField
        id="task"
        label="Task"
        className="task-textfield"
        value={task}
        onChange={e => setTask(e.target.value)}
        margin="normal"
        variant="filled"
        inputProps={{
          className: classes.input
        }}
      />
      {selectedDate ? (
        <DatePicker
          className="task-date"
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
      ) : null}
      <Button
        color="primary"
        variant="contained"
        className="task-button"
        onClick={addTask}
        disabled={!task.length}
      >
        Add Task
      </Button>
    </div>
  )
}

TextFieldComponent.propTypes = {
  addTask: PropTypes.func.isRequired
}
