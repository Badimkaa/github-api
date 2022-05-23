import styled from 'styled-components'
import Flex from '../../utils/Flex'

export const PaginatorWrapper = styled(Flex)`
// width: 1254px;
width: 100%;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
user-select:none;
color:#808080;
@media (max-width:490px) {
    font-size: 13px;
}
.arr {
    margin 0 12px;
    cursor:pointer;
}
.arr:hover path{
    fill:#0064EB;
}
.arr.right {
    transform:rotate(180deg);
}
`
export const RepoShowingNumbers = styled.div`
`
export const Page = styled.span`
width:21px;
height:25px;
text-align:center;
cursor:pointer;

border-radius: 3px;
background-color:${props => props.activePage ? '#0064EB' : 'unset'};
color:${props => props.activePage ? '#FFFFFF' : '#808080'};
`
export const Pages = styled(Flex)`
`