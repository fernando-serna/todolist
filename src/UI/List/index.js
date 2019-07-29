import React from 'react'
import { PropTypes } from 'prop-types'
import moment from 'moment'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'

import './List.css'

export const ListComponent = props => (
  <List className="list-wrapper">
    {props.taskList.map(t => (
      <React.Fragment key={t.id}>
        <ListItem className="item" style={{ backgroundColor: '#434a56' }}>
          <ListItemText
            primary={
              <Typography style={{ color: 'white' }}>{t.text}</Typography>
            }
            secondary={
              <Typography
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  color: 'grey'
                }}
              >
                Due at:&nbsp;
                {moment(t.date).format('h:mm a')}
                &nbsp;on&nbsp;
                {moment(t.date).format('MM/DD/YY')}
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => props.removeTask(t)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </React.Fragment>
    ))}
  </List>
)

ListComponent.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTask: PropTypes.func.isRequired
}
