
import styled from 'styled-components'
import Flex from '../../utils/Flex';
export const StyledHeader = styled.header`
height: 72px;
width:100%;
padding: 16px 41px;
background-color:#0064EB;

@media (max-width:490px) {
    padding: 16px 13px;
}
`
export const HeaderWrapper = styled(Flex)`
max-width:1270px;
margin:0 auto;
`
export const Input = styled.input.attrs({ type: 'text' })`
width:100%;
margin-left:6px;
border:none;
font-weight: 400;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.01em;

&:focus{
    outline:none;
}
`
export const Image = styled.img`
@media (max-width:490px) {
    width:31px;
    heigh:30px;
}
`

export const StyledForm = styled(Flex)`
width:500px;
height:40px;
border-radius: 6px;
padding: 8px 14px;
margin-left:22px;
background-color:#FFFFFF;

@media (max-width:490px) {
    margin-left:11px;
}
`