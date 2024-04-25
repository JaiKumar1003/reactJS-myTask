import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  MyTasksContainer,
  MyTasksCard,
  MyTasksForm,
  FormHeading,
  FormLabel,
  FormInput,
  SelectInput,
  SelectOption,
  AddTaskBtn,
  TagsTaskCard,
  TagTaskName,
  TagsList,
  TagItem,
  TagItemBtn,
  TaskList,
  TaskItem,
  TaskName,
  TagsCard,
  TagsName,
  NoTaskCard,
  NoTaskHeading,
} from './styledComponents'

class MyTasks extends Component {
  state = {
    taskSaveList: [],
    taskList: [],
    taskName: '',
    tagsName: '',
    currentId: '',
    isClicked: false,
  }

  componentDidMount() {
    const {tagsList} = this.props
    this.setState({tagsName: tagsList[0].optionId})
  }

  renderNoTask = () => (
    <NoTaskCard>
      <NoTaskHeading>No Tasks Added Yet</NoTaskHeading>
    </NoTaskCard>
  )

  renderTaskList = () => {
    const {taskSaveList, taskList} = this.state

    return (
      <>
        <TagTaskName>Task</TagTaskName>
        {taskSaveList.length === 0 ? (
          this.renderNoTask()
        ) : (
          <TaskList>
            {taskList.map(eachItem => {
              const {id, taskName, tagsName} = eachItem
              return (
                <TaskItem key={id}>
                  <TaskName>{taskName}</TaskName>
                  <TagsCard>
                    <TagsName>{tagsName}</TagsName>
                  </TagsCard>
                </TaskItem>
              )
            })}
          </TaskList>
        )}
      </>
    )
  }

  renderTagsList = () => {
    const {tagsList} = this.props
    const {currentId, taskSaveList} = this.state

    return (
      <>
        <TagTaskName>Tags</TagTaskName>
        <TagsList>
          {tagsList.map(eachItem => {
            const {displayText, optionId} = eachItem

            const filteredList = taskSaveList.filter(
              eachOption => eachOption.tagsName === optionId,
            )

            const onClickTagBtn = () => {
              this.setState({
                isClicked: true,
                taskList: filteredList,
                currentId: optionId,
              })
            }

            const isCurrentId = currentId === optionId

            return (
              <TagItem key={optionId}>
                <TagItemBtn
                  isCurrentId={isCurrentId}
                  onClick={onClickTagBtn}
                  type="button"
                >
                  {displayText}
                </TagItemBtn>
              </TagItem>
            )
          })}
        </TagsList>
      </>
    )
  }

  onChangeTags = event => {
    this.setState({tagsName: event.target.value})
  }

  updatedTaskList = () => {
    const {taskSaveList, isClicked, currentId} = this.state

    const filteredList = taskSaveList.filter(
      eachItem => eachItem.tagsName === currentId,
    )

    if (isClicked) {
      this.setState({taskList: filteredList})
    } else {
      this.setState({
        taskList: [...taskSaveList],
      })
    }
  }

  onChangeTask = event => {
    this.setState({taskName: event.target.value})
  }

  onSubmitForm = event => {
    const {tagsList} = this.props
    const {taskName, tagsName} = this.state
    event.preventDefault()
    if (taskName !== '') {
      const uniqueId = uuidv4()
      this.setState(
        prevState => ({
          taskSaveList: [
            ...prevState.taskSaveList,
            {id: uniqueId, taskName, tagsName},
          ],
          taskName: '',
          tagsName: tagsList[0].optionId,
        }),
        this.updatedTaskList,
      )
    }
  }

  renderMyTaskForm = () => {
    const {tagsList} = this.props
    const {taskName, tagsName} = this.state
    return (
      <MyTasksForm onSubmit={this.onSubmitForm}>
        <FormHeading>Create a task!</FormHeading>
        <FormLabel htmlfor="TASK">Task</FormLabel>
        <FormInput
          id="TASK"
          value={taskName}
          onChange={this.onChangeTask}
          type="text"
          placeholder="Enter the task here"
        />
        <FormLabel htmlfor="TAGS">Tags</FormLabel>
        <SelectInput id="TAGS" value={tagsName} onChange={this.onChangeTags}>
          {tagsList.map(eachItem => {
            const {optionId, displayText} = eachItem

            return (
              <SelectOption key={optionId} value={optionId}>
                {displayText}
              </SelectOption>
            )
          })}
        </SelectInput>
        <AddTaskBtn type="submit">Add Task</AddTaskBtn>
      </MyTasksForm>
    )
  }

  render() {
    return (
      <MyTasksContainer>
        <MyTasksCard>
          {this.renderMyTaskForm()}
          <TagsTaskCard>
            {this.renderTagsList()}
            {this.renderTaskList()}
          </TagsTaskCard>
        </MyTasksCard>
      </MyTasksContainer>
    )
  }
}

export default MyTasks
