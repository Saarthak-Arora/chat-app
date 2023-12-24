import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";

const RightHeader = () => {
  return (
    <div className="rtheader">
      <div className="posav">
        <img
          className="dpimage"
          src="https://godhindus.com/wp-content/uploads/2023/01/Kanha-Images-1.jpg"
          alt="dp"
        />
      </div>
      <div className="namebar">
        <div className="nametext">
          <span>Kanaha</span>
          <div className="threedot"><MoreVertIcon /></div>
        </div>
        <div className="statusbar">
          <p>online...</p>
        </div>
      </div>
    </div>
  );
};

export default RightHeader;
