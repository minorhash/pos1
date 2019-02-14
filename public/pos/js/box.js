import posed from "react-pose";
import styled from "styled-components";

const Box = styled(posed.div({
  top: {y: 50},
  bottom: {y: 300}
}))`
  background-color: #f9415d;
  position: absolute;

  ${props => `
    height: ${props.size}px;
    width: ${props.size}px;
    left: calc(50% - ${props.size / 2}px);
  `}
`;

export default Box;
