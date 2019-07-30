import { createMuiTheme } from '@material-ui/core/styles'
import { deepPurple, green } from '@material-ui/core/colors'

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      ...deepPurple,
      light: '#434a56',
      main: '#22252b',
      dark: '#999999'
    },
    secondary: green
  },
  status: {
    danger: 'orange'
  },
  overrides: {
    MuiDialog: {
      paper: {
        background: '#434a56'
      }
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: '#383e47'
      }
    },
    MuiButton: {
      textPrimary: {
        color: 'black'
      }
    }
  }
})

export default muiTheme
