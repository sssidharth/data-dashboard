import React from "react";
import{ IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import  ForumIcon from '@mui/icons-material/Forum';
import  InfoIcon from '@mui/icons-material/Info';
import Badge from '@mui/material/Badge';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header(props) {
   return (
     <div className="header">
      <IconButton style={{background: '#F1F5F9', width: 32, height:32, marginRight: 12}}>
        <SearchIcon style={{color: '#64748B', fontSize: 16}}/>
      </IconButton>
      
      <IconButton style={{background: '#F1F5F9', width: 32, height:32, marginRight: 12}}>
      <Badge color="secondary" variant="dot">
        <ForumIcon style={{color: '#64748B', fontSize: 16}}/>
        </Badge>
      </IconButton>   
      <IconButton style={{background: '#F1F5F9', width: 32, height:32, marginRight: 12}}>
        <InfoIcon style={{color: '#64748B', fontSize: 16}}/>
      </IconButton>
      <div style={{height: '70%', borderRight: '1px solid #E2E8F0', marginRight: 20}}></div>
    <div style={{display: 'flex', alignItems: 'center', marginRight: 50}}>
      <p style={{fontSize: 14, color:'#475569'}}>{props.selectedUser? props.selectedUser.name : ''}</p>
      <KeyboardArrowDownIcon style={{color:'#94A3B8', width: 16, marginTop: 3, cursor: 'pointer'}}/>
    </div>
     </div>
   );
}

export default Header;