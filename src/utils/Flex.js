import styled from 'styled-components'
const Flex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${props => props.margin || '0'};
`
export default Flex