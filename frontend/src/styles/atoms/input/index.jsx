import styled from "styled-components";
import { Colors } from "../../../colors";

export const CustonInput = styled.input`
  width: 100%;
  padding: 12px 10px;

  border: 1px solid ${ Colors.whiteBlue };
  border-radius: .3em;
  :focus {
    outline: none;
    box-shadow: 0px 0px 8px ${ Colors.whiteBlue };
  }
`