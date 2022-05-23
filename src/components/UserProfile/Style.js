import styled from 'styled-components'
import Flex from '../../utils/Flex'

export const UserProfileWrapper = styled(Flex)`
height:432px;
gap:28px;
@media (max-width:850px) {
    gap:14px;
}
@media (max-width:490px) {
    height:310px;
}
`
export const UserName = styled.div`
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 130%;
margin-bottom:12px;
@media (max-width:850px) {
    font-size: 23px;
    line-height: 110%;
    margin-bottom:8px;
}
`
export const UserLink = styled.a`
display:block;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #0064EB;
text-decoration:none;
margin-bottom:25px; 
@media (max-width:850px) {
    font-size: 15px;
    line-height: 20px;
    margin-bottom:15px;
}
`
export const UserPhoto = styled.img`
width:280px;
height:280px;
border-radius:50%;
@media (max-width:850px) {
    width:180px;
    height:180px;
}
`
export const UserInfo = styled.div``
export const UserFollowBlock = styled(Flex)`
@media (max-width:490px) {
    justify-content:stretch;
    gap:15px;
}
`
export const DivFlex = styled(Flex)``
export const UserFollowersImage = styled.img`
width:24px;
height:24px;
margin-right:8px;
`
export const UserFollowersText = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
margin:0;
@media (max-width:850px) {
    font-size: 14px;
    line-height: 110%;
}
`