import styled from 'styled-components'
import Flex from '../../utils/Flex'

export const Wrapper = styled(Flex)`
position:relative;
top:-22px;
width:877px;
@media (max-width:490px) {
    width:300px;
}

`
export const RepoContainer = styled(Flex)`
gap:16px;
@media (max-width:850px) {
   gap:12px;
}

`
export const Repo = styled.div`
width:100%;
height:112px;
padding: 24px 32px;
background-color:#FFFFFF;
border-radius:6px;

@media (max-width:850px) {
    padding:12px 16px;
}
`

export const RepoLink = styled.a`
display:inline-block;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #0064EB;
text-decoration:none;
margin-bottom:16px;
@media (max-width:850px) {
    font-size: 20px;
    line-height: 25px;
    margin-bottom:2px;
}
`
export const RepoDescription = styled.div`
max-height: 42px;
font-weight: 400;
font-size: 16px;
line-height: 19px;
overflow:hidden;
@media (max-width:850px) {
    font-size:14px;
    line-height:17px;
    max-height: 70px;
}
`
export const RepoTitle = styled.div`
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 130%;
margin-bottom:29px;
@media(max-width:850px) {
    font-weight: 600;
    font-size: 26px;
    line-height: 100%;
    margin-bottom:23px;
}
@media (max-width:490px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 8%;
    margin-bottom:20px;
    }
`