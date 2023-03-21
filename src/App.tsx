import { useState } from 'react'
import { Users } from './Users'
import { Todos } from './Todos'
import { Posts } from './Posts'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const USERS = 'Users'
const TODOS = 'Todos'
const POSTS = 'Posts'


function App() {
  const [count, setCount] = useState(0)
  const [selectedTab, setSelectedTab] = useState(USERS);

  console.log(count);
  return (
    <div className="App">
      <input type="radio" checked={selectedTab === USERS} onChange={() => setSelectedTab(USERS)}/> Users
      <input type="radio" checked={selectedTab === POSTS} onChange={() => setSelectedTab(POSTS)} /> Posts
      <input type="radio" checked={selectedTab === TODOS} onChange={() => setSelectedTab(TODOS)} /> Todos
      {/* <input type="text" value={text} onChange={e => setText(e.target.value)} className={isValid(text) ? "valid" : "invalid" }/> */}
      {/* <input type="text" value={text} onChange={e => setText(e.target.value)} data-isValid={isValid(text)}/> */}
      <button onClick={() => setCount(count + 1)} />
      {selectedTab === USERS && <Users />}
      {selectedTab === TODOS && <Todos />}
      {selectedTab === POSTS && <Posts />}

    </div>
  )
}

export default App
