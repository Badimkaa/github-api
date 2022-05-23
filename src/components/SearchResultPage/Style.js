import styled from 'styled-components'
import Flex from '../../utils/Flex'


export const SearchResultWrapper = styled(Flex)`
max-width:1304px ;
padding: ${props => props.pt || '40'}px 25px 0px;
margin: 0 auto;
gap:85px;
@media (max-width:850px) {
    gap:20px;
}
@media (max-width:490px) {
    flex-direction:column;
    padding:10px 10px 0;
}
`
export const DivFlex = styled(Flex)`
width:877px;
height:567px;
@media (max-width: 490px) {
    width:100%;
    height:260px;
}
`