import React from 'react'
import LeftContactBar from './LeftContactBar'
import RightChatBar from './RightChatBar'
import '../style/main.css'

const Main = () => {
  return (
    <div className='mainContainer'>
        <LeftContactBar/>
        <RightChatBar/>
    </div>
  )
}

export default Main