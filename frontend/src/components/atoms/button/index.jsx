import { CustonButton } from "../../../styles/atoms/button"

export const Button = ({ backgroundColor, color, text, ...rest }) => {
  return (
    <CustonButton
      backgroundColor={ backgroundColor }
      color={ color }
      { ...rest }
    >
      { text }
    </CustonButton>
  )
}