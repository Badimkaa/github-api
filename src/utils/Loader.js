import styledComponents from 'styled-components';
import Flex from './Flex';


export const Loader = styledComponents(Flex)`
border: 16px solid #f3f3f3; /* Light grey */
border-top: 16px solid #0064EB; 
border-radius: 50%;
width: 120px;
height: 120px;
animation: spin 2s linear infinite;
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @media (max-width:490px) {
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #0064EB; 
    width:60px;
    height:60px;
  }
`