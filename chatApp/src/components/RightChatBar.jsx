import '../style/rightBar.css'
import ChatDisplay from './ChatDisplay'
import ChatText from './ChatText'
import RightHeader from './RightHeader'


const RightChatBar = () => {
  return (
    <div className='rightbarContainer'>
        <RightHeader/>
        <ChatDisplay/>
        <ChatText/>
    </div>
  )
}

export default RightChatBar