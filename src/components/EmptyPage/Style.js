import styled from 'styled-components'
import Flex from '../../utils/Flex'

export const PageWrapper = styled(Flex)`
width:100%;
height:${props => props.wrapperHeight || window.innerHeight - 72}px;
user-select:none;
`
export const StyledPage = styled(Flex)`
// width:100%;
height:196px;
`

export const Image = styled.img`
user-select:none;
width:${props => props.imageWidth}px;
height:${props => props.imageHeight}px;
margin:${props => props.imageMargin}px;
`
export const Text = styled.p`
max-width:${props => props.textWidth}px;
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 140%;
text-align:center;
color: #808080;
margin:0;
`