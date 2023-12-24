import { useNavigate } from "react-router-dom"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ContactCard = ({ dp, name, lastmsg, msgtime, nmsg }) => {

    const navigate = useNavigate();
 const openChatRoom = () => {
    // changedUser = user data change to clicked user

   // navigate(`/${changedUser}`)

 }

  return (
      <div className="ccardcontianer" onClick={openChatRoom}>
        <div className="dpdiv">
          <img className="dp" src={dp} alt="dp" />
        </div>
        <div className="msgdiv">
          <div className="msg">
            <span>{name}</span>
            <span>{msgtime}</span>
          </div>
          <div className="msgtime">
            <span className="truncate">{lastmsg}</span>
            {nmsg > 0 ? <span className="nmsg">{nmsg}</span> : ""}
          </div>
        </div>
          <div>

          {/* <MoreVertIcon className="round-background"/> */}
          </div>
      </div>
   
  );
};

export default ContactCard;
