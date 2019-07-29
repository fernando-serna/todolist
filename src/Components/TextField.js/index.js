import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

export const TextFieldComponent = () => {
  const classes = useStyles()
  const [task, setTask] = React.useState('')

  return (
    <div>
      <TextField
        id="task"
        label="Task"
        className={classes.textField}
        value={task}
        onChange={e => setTask(e.target.value)}
        margin="normal"
        variant="filled"
      />
      <Button color="primary" variant="outlined" className={classes.button}>
        Add Task
      </Button>
    </div>
  )
}
