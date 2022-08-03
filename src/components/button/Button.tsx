import { ButtonColorVariant, ButtonContainer } from './Button.styles'

interface IButtonProps {
  color?: ButtonColorVariant
}

export function Button({ color = 'primary' }: IButtonProps) {
  return <ButtonContainer variant={color}>Enviar</ButtonContainer>
}
