import { GiHamburgerMenu } from "react-icons/gi";


export default function cabecalho({ toggleSidebar }) {
  return (
    <>
      <div className="header">
        <div className="header-high">
            <GiHamburgerMenu className="Header-btn" onClick={toggleSidebar}/>
            <input  className="pesquisa" type="text" placeholder="Search" />
            <div className="user-info">
              <img src="../public/images/user.png" alt="" className="image-high" />
              <div className="name">Morgan Oakley</div>
            </div>
  
        </div>
        <div className="header-low">
          <div className="user-info">
             <img src="../public/images/user.png" alt="" className="image-low" />
          <div className="user">
            
            <div className="welcome">hi there,</div>
            <div className="username">Morgan Oakley (@Morgan)</div>
          </div>
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
