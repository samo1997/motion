import React from 'react'
import { UserMainContainer, UserSectionContainer } from '../../style/UserProfile'
import Background from '../../assets/svgs/user_background.svg'
import { UserProfileContainer } from '../UserProfile/UserProfileContainer/index';

export const UserProfile = () => {
    return (
        <UserMainContainer>
            <img src={Background}/>
            <UserSectionContainer>
                {/* <UserProfileUpdateContainer> */}
                    <UserProfileContainer>

                    </UserProfileContainer>
                {/* </UserProfileUpdateContainer> */}
            </UserSectionContainer>
        </UserMainContainer>
    )
}