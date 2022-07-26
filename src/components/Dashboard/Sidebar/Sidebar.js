import React, { useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import logo from '../../../images/barbershop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faDiceFour, faListCheck, faMessage, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { useNavigate } from "react-router-dom";

const Sidebar = ({toggled, handleToggleSidebar}) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const user = sessionStorage.getItem('userEmail');
    
    useEffect(() => {
        fetch('https://frozen-headland-45377.herokuapp.com/isAdmin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:user})
        })
        .then(res => res.json())
        .then(data=>setIsAdmin(data));
    }, [])

    const navigate = useNavigate()
    return (
        <div className={`${toggled ? 'toggled' : ''} sidebarDiv`}>
        <ProSidebar toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
            <SidebarHeader>
                <img style={{width:'25%'}} src={logo} alt="" onClick={()=>navigate(`/dashboard`)} />
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    {/* {!isAdmin && <div> */}
                        <MenuItem onClick={()=>navigate(`book`)} icon={<FontAwesomeIcon icon={faCartShopping} />}>Book</MenuItem>
                        <MenuItem onClick={()=>navigate(`booking-list`)} icon={<FontAwesomeIcon icon={faListCheck} />}>Booking list</MenuItem>
                        <MenuItem onClick={()=>navigate(`add-review`)} icon={<FontAwesomeIcon icon={faMessage} />}>Review</MenuItem>
                    {/* </div>} */}
                    {isAdmin && <div>
                        <MenuItem onClick={()=>navigate(`order-list`)} icon={<FontAwesomeIcon icon={faListCheck} />}>Order list</MenuItem>
                        <MenuItem onClick={()=>navigate(`add-service`)} icon={<FontAwesomeIcon icon={faPlus} />}>Add Service</MenuItem>
                        <MenuItem onClick={()=>navigate(`make-admin`)} icon={<FontAwesomeIcon icon={faUserPlus} />}>Make Admin</MenuItem>
                        <MenuItem onClick={()=>navigate(`manage-service`)} icon={<FontAwesomeIcon icon={faDiceFour} />}>Manage Service</MenuItem>
                    </div>}
                </Menu>
            </SidebarContent>
        </ProSidebar>
        </div>
    );
};

export default Sidebar;