import styled from 'styled-components'

export const MyTasksContainer = styled.div`
  background-color: #131213;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  width: 100%;
`

export const MyTasksCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100vh;
  width: 100%;
`

export const MyTasksForm = styled.form`
  background-color: #1a171d;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 40%;
  padding: 26px;
`

export const FormHeading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 28px;
`

export const FormLabel = styled.label`
  color: #f8f8f8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 10px;
`

export const FormInput = styled.input`
  background-color: #f8f8f8;
  border: none;
  border-radius: 2px;
  height: 44px;
  width: 100%;
  padding: 10px;
  color: #1a171d;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 28px;
`

export const SelectInput = styled.select`
  background-color: #f8f8f8;
  border: none;
  border-radius: 2px;
  height: 44px;
  width: 100%;
  padding: 10px;
  color: #1a171d;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 28px;
`

export const SelectOption = styled.option``

export const AddTaskBtn = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  width: 120px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`

export const TagsTaskCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 26px;
`

export const TagsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px;
  margin-bottom: 12px;
`

export const TagTaskName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 22px;
`

export const TagItem = styled.li`
  list-style-type: none;
`

export const TagItemBtn = styled.button`
  color: ${props => {
    if (props.isCurrentId) {
      return '#ffffff'
    }
    return '#f8f8f8'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background-color: ${props => {
    if (props.isCurrentId) {
      return '#f3aa4e'
    }
    return 'transparent'
  }};
  border: ${props => {
    if (props.isCurrentId) {
      return 'none'
    }
    return '1px solid #f3aa4e'
  }};
  border-radius: 16px;
  height: 30px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  outline: none;
  margin-right: 12px;
`

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  margin-bottom: 12px;
`

export const TaskItem = styled.li`
  background-color: #1a171d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 12px;
  list-style-type: none;
  margin-bottom: 14px;
`

export const TaskName = styled.p`
  color: #f8f8f8;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`

export const TagsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f3aa4e;
  border: none;
  border-radius: 16px;
  height: 30px;
  padding-left: 14px;
  padding-right: 14px;
`

export const TagsName = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const NoTaskCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
`

export const NoTaskHeading = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
`
