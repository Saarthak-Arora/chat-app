import '../style/leftBar.css'
import Contacts from './Contacts'
import Lnav from './Lnav'
import SearchContact from './SearchContact'

const LeftContactBar = () => {
  return (
    <div className='sidebarContainer'>
        <Lnav/>
        <SearchContact/>
        <Contacts/>
    </div>
  )
}

export default LeftContactBar