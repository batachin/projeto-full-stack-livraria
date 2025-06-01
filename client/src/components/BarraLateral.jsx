import { FaIceCream } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";


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
          <button className="opcoes" id="home">
            <FaHouse />
            Home
          </button>

          <button className="opcoes" id="profile">
            <FaAddressCard />
            Profile
          </button>

          <button className="opcoes" id="messagens">
            <FaComment />
            Messagens
          </button>

          <button class="opcoes" id="History">
            <FaClock />
            History
          </button>

          <button className="opcoes" id="tasks">
            <FaStickyNote />
            Tasks
          </button>

          <button className="opcoes" id="communities">
            <FaUserFriends />
            Communities
          </button>

          <button className="opcoes" id="settings">
            <FaGear />
            Settings
          </button>

          <button className="opcoes" id="support">
            <BsQuestionCircleFill />
            Support
          </button>

          <button className="opcoes" id="privacy">
            <IoShieldCheckmarkSharp />
            Privacy
          </button>
        </div>
      </div>
    </>
  );
}
