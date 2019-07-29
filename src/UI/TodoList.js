import React, { useState } from 'react'
import { TextFieldComponent as TextField } from './TextField'
import { ListComponent as List } from './List'

import './Todo.css'

export default function TodoList() {
  const [taskList, setTaskList] = useState([])

  const addTask = task => {
    setTaskList([task, ...taskList])
  }

  const removeTask = task => {
    const tasks = taskList.filter(t => t.id !== task.id)
    setTaskList([...tasks])
  }

  return (
    <div className="todolist-wrapper">
      <div className="todolist-input">
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Todo List</h1>
        <TextField addTask={addTask} />
      </div>
      <div className="todolist-output">
        <List taskList={taskList} removeTask={removeTask} />
      </div>
    </div>
  )
}
