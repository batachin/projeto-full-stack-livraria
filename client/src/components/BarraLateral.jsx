import { FaIceCream } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import { FaBackward } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function barraLateral({toggleSidebar}) {
  return (
    <>
      <div className="barra-lateral">
      
  <RiCloseLargeFill className="menu-btn" onClick={toggleSidebar} />
        <div className="opcao">


          <h1 className="logo" id="dashboard">
            <FaIceCream />
            Dashboard
          </h1>
          <li className="opcoes" id="home"><Link to="/">
            <FaHouse />
            Home
          </Link></li>

          <li className="opcoes" id="profile"><Link to="/create-book">
            <MdCreateNewFolder />
            Create Book
          </Link></li>

          <li className="opcoes" id="messagens"><Link to='/edit-book/:id'>
            <FaBackward />
            Edit Book
          </Link></li>

          <li className="opcoes" id="History"><Link to='/show-book/:id'>
            <FaClock />
            Show Book
          </Link></li>

          <li className="opcoes" id="tasks"><Link to='/'>
            <FaStickyNote />
            Tasks
          </Link></li>

          <li className="opcoes" id="communities"><Link to='/'>
            <FaUserFriends />
            Communities
          </Link></li>

          <li className="opcoes" id="settings"><Link to='/'>
            <FaGear />
            Settings
          </Link></li>

          <li className="opcoes" id="support" ><Link to='/'>
            <BsQuestionCircleFill />
            Support
          </Link></li>

          <li className="opcoes" id="privacy" ><Link to='/'>
            <IoShieldCheckmarkSharp />
            Privacy
          </Link></li>
        </div>
      </div>
    </>
  );
}
