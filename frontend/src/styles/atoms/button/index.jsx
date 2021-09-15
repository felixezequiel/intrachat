import styled from "styled-components";
import { Colors } from "../../../colors";

export const CustonButton = styled.button`
  padding: 10px;
  background-color: ${ props => props.backgroundColor || 'gray' };
  color: ${ props => props.color || 'black' };

  width: 100%;

  border: 1px solid ${ Colors.blue };
  border-radius: .3em;
  :active {
    transform: scale(1.01);
  }
`