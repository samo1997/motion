import React, { useEffect, useState } from 'react'
import { NavigationContainer, LeftContainerHeader, RightContainerHeader, MotionIcon, MotionItem, MotionLink, PostsIcon, PostsItem, PostsLink, FriendsIcon, FriendsItem, FriendsLink, BellItem, BellLink, BellIcon, ProfileItem, ProfileLink, ProfileIcon, MenuItem, MenuLink, MenuIcon } from '../../style/Header'
import MotionLogo from '../../assets/svgs/logo.svg'
import PostsLogo from '../../assets/images/posts_logo.png'
import IconFriends from '../../assets/svgs/icon-friends.svg'
import Bell from '../../assets/svgs/notification_bell.svg'
import Jennifer from '../../assets/svgs/Jennifer.svg'
import Menu from '../../assets/svgs/menu.svg'
import { useHistory, useLocation } from 'react-router-dom'
import { Notification } from './Notification/index'
import { MenuDropdown } from './MenuDropdown/index'

export const Header = () => {
    const [inHover, setHover] = useState(false);
    const [currentState, setCurrentState] = useState(true)
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        currentState && location.pathname === "/home/friends" ? setCurrentState(!currentState) : setCurrentState(currentState);
    }, [location, currentState]);

    function FriendsOnClickHandler() {
        if (location.pathname === "/home/friends") {
            setCurrentState(currentState)
        } else {
            setCurrentState(!currentState)
            history.push("/home/friends");
        }       
    }

    function PostsOnClickHandler() {
        if (location.pathname === "/home/feed") {
            setCurrentState(currentState)
        } else {
            setCurrentState(!currentState)
            history.push("/home/feed");
        }   
    }
    function UserProfileClickHandler() {
        if (location.pathname === "/home/user/profile") {
            setCurrentState(currentState)
        } else {
            setCurrentState(!currentState)
            history.push("/home/user/profile");
        }
    }
    return (<>
        <NavigationContainer >
            <LeftContainerHeader>
                <MotionItem onClick={PostsOnClickHandler} ><MotionIcon src={MotionLogo}/><MotionLink href="#">Motion</MotionLink></MotionItem>
                <PostsItem onClick={PostsOnClickHandler} id={`${currentState}`} ><PostsIcon id={`${currentState}`} src={PostsLogo}/><PostsLink href="#" >Posts</PostsLink></PostsItem>
                <FriendsItem onClick={FriendsOnClickHandler} id={`${!currentState}`}><FriendsIcon id={`${!currentState}`} src={IconFriends}/><FriendsLink href="#" >Find Friends</FriendsLink></FriendsItem>
            </LeftContainerHeader>
            <RightContainerHeader>   
                <BellItem><BellLink href="#"><BellIcon src={Bell}/><Notification id="note" /></BellLink></BellItem>
                <ProfileItem onClick={UserProfileClickHandler} id={`${!currentState}`}><ProfileLink href="#"><ProfileIcon src={Jennifer}/></ProfileLink></ProfileItem>
                <MenuItem onClick={() => setHover(!inHover)}><MenuLink href="#"><MenuIcon src={Menu}/></MenuLink></MenuItem> 
                {inHover && <MenuDropdown />}
            </RightContainerHeader> 
        </NavigationContainer>
    </>)
}




