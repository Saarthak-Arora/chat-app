import FilePresentIcon from "@mui/icons-material/FilePresent";
import SendIcon from "@mui/icons-material/Send";

const ChatText = () => {
  return (
    <div className="chattext">
      <div className="uploadfile">
        <FilePresentIcon />
      </div>
      <div className="textarea">
        <textarea className="typetext"></textarea>
      </div>
        <div className="sendbutton">
        <SendIcon className="sendicon" />
        </div>
    </div>
  );
};

export default ChatText;
