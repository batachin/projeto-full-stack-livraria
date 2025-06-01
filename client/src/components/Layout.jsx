import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Cabecalho from './Cabecalho';
import BarraLateral from './BarraLateral';

function Layout() {
  const [isSiderbarCollapsed, setIsSiderbarCollapsed] = useState(true);
  const toggleSidebar = () => setIsSiderbarCollapsed(!isSiderbarCollapsed);

  return (
    <div className={isSiderbarCollapsed ? "layout" : "layout.close"}>
      <div className='layout-header'>
        <Cabecalho toggleSidebar={toggleSidebar} />
      </div>
      <div className='layout-menu'>
        {isSiderbarCollapsed && <BarraLateral toggleSidebar={toggleSidebar} />}
      </div>
      <div className='layout_content'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;