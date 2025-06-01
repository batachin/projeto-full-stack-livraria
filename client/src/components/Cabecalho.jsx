import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


export default function cabecalho({ toggleSidebar }) {
  return (
    <>
      <div className="header">
        <div className="header-high">
            <GiHamburgerMenu className="Header-btn" onClick={toggleSidebar}/>
            <input  className="pesquisa" type="text" placeholder="Search" />
          
          <div className="name">Morgan Oakley</div>
        </div>
        <div className="header-low">
          <div className="user">
            <div className="welcome">hi there,</div>
            <div className="username">Morgan Oakley (@Morgan)</div>
          </div>
          <div className="buttons">
            <button className="button">New</button>
            <button className="button">Upload</button>
            <button className="button">Share</button>
          </div>
        </div>
      </div>
    </>
  );
}
