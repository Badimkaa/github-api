import React from 'react'
import followers from '../../assets/images/followers.svg'
import following from '../../assets/images/followings.svg'
import { DivFlex, UserFollowBlock, UserFollowersImage, UserFollowersText, UserInfo, UserLink, UserName, UserPhoto, UserProfileWrapper } from './Style'

const roundNumber = (num) => {
    return num > 999 ? `${(num / 1000).toFixed(1)}k ` : num
}
const UserProfile = ({
    userPhoto,
    userName,
    userLink,
    userLogin,
    followersCount,
    followingCount
}) => {
    return (
        <UserProfileWrapper direction='column' >
            <UserPhoto src={userPhoto} />
            <UserInfo>
                <UserName>{userName || 'name'}</UserName>
                <UserLink target='_blank' href={userLink}>{userLogin}</UserLink>
                <UserFollowBlock justify='space-between'>
                    <DivFlex>
                        <UserFollowersImage src={followers} />
                        <UserFollowersText>{roundNumber(followersCount)} followers</UserFollowersText>
                    </DivFlex>
                    <DivFlex>
                        <UserFollowersImage src={following} />
                        <UserFollowersText>{roundNumber(followingCount)} following</UserFollowersText>
                    </DivFlex>
                </UserFollowBlock>
            </UserInfo>
        </UserProfileWrapper>
    )
}

export default UserProfile