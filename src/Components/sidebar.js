import React, { useState } from "react";
import Logo from '../assets/Bitmap.png';
import DashboardLogo from '../assets/dashboard.png';
import ImportExportIcon from '@mui/icons-material/ImportExport';


function Sidebar(props) {
    const [selected, setSelected] = useState('dashboard');

    const handleMenu = (e, type) => {
        setSelected(type);
        e.preventDefault();
    }

   return (
     <div className="sidebar">
        <img src={Logo} style={{marginBottom: 36}} alt="app-logo"/>
        <p style={{color: '#64748B', fontWeight: 600, fontSize: 14, marginBottom: 12}}>Pages</p>
        <div onClick={(e) => handleMenu(e, 'dashboard')} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', 
        background: selected==='dashboard' ? '#0F172A' : 'none', cursor: 'pointer', width: '100%', height: 40, borderRadius: 2}}>
          <img src={DashboardLogo} alt='dashboard-logo' style={{marginLeft: 12}}/>
          <p style={{color: 'white', fontSize: 14, fontWeight: 500, marginLeft: 12}}>Dashboard</p>
        </div>
        <div onClick={(e) => handleMenu(e, 'customers')} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', 
        background: selected==='customers' ? '#0F172A' : 'none', cursor: 'pointer', width: '100%', height: 40, borderRadius: 2}}>
          <ImportExportIcon style={{color: '#4F46E5', width:24, marginLeft: 12}}/>
          <p style={{color: 'white', fontSize: 14, fontWeight: 500, marginLeft: 12}}>Customers</p>
        </div>
     </div>
   );
}

export default Sidebar;