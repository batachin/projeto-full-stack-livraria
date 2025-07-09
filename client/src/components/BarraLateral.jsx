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
            <span className="logo-text">
              Dashboard
            </span>
            
          </h1>
          <li className="opcoes" id="home"><FaHouse /> <Link to="/">
            
            Home
          </Link></li>

          <li className="opcoes" id="profile"><MdCreateNewFolder /> <Link to="/create-book">
            
            Create Book
          </Link></li>

          <li className="opcoes" id="messagens"><FaBackward /><Link to='/edit-book/:id'>
            
            Edit Book
          </Link></li>

          <li className="opcoes" id="History"><FaClock /><Link to='/show-book/:id'>
            
            Show Book
          </Link></li>

          <li className="opcoes" id="tasks"><FaStickyNote /><Link to='/'>
            
            Tasks
          </Link></li>

          <li className="opcoes" id="communities"><FaUserFriends /><Link to='/'>
            
            Communities
          </Link></li>

          <li className="opcoes" id="settings"><FaGear /><Link to='/'>
            
            Settings
          </Link></li>

          <li className="opcoes" id="support" ><BsQuestionCircleFill /><Link to='/'>
            
            Support
          </Link></li>

          <li className="opcoes" id="privacy" ><IoShieldCheckmarkSharp /><Link to='/'>
            
            Privacy
          </Link></li>
        </div>
      </div>
    </>
  );
}
