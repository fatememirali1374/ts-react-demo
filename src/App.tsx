
import './App.css'
import TaskHeader from './components/props/TaskHeader'
import TaskList from './components/props/TaskList'
import User from './components/props/User'
import NoteList from './components/state/NoteList'

const user={
  firstName:"fateme",
  lastName:"mirali"
}
const taskList=[
  {id:1,
  title:"Task #1"},
  {id:2,
  title:"Task #2"},
  {id:3,
  title:"Task #3"},
  {id:4,
  title:"Task #4"},
]
function App() {


  return (
    <>
<TaskHeader name="fateme" numOfTasks={3} />
<User user={user}/> 
<TaskList taskList={taskList}/> 

<NoteList/>
    </>
  )
}

export default App
