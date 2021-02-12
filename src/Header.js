import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar  ,IconButton} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {  useStateValue} from "./StateProvider";


import AddIcon from '@material-ui/icons/Add';
const Header = () => {
    const [{ user } , dispatch] =useStateValue()
    return (
        <div className="header">
            {/* LEFT */}
             <div className="header-left">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt=""/>
              <div className="header-input">
                  <SearchIcon/>
                  <input type="text"   placeholder="Saerch Facebook"/>
              </div>
             </div>
            {/* MIDDLE */}
             <div className="header-middle">
                <div className="header-option  header-option--active">
                    <HomeIcon  fontSize="large" />
                </div>
                <div className="header-option ">
                    <FlagIcon  fontSize="large" />
                </div>
                <div className="header-option">
                    < SubscriptionsIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <StorefrontIcon  fontSize="large" />
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon  fontSize="large" />
                </div>
             </div>
            {/* RIGHT*/}
             <div className="header-right">
                    <div className="header-info">
                             <Avatar  src={user.photoURL}/>
                             <h4>{user.displayName}</h4>      
                    </div>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>
             </div>
        </div>
    )
}

export default Header
