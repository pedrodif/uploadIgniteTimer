import styled, { css } from 'styled-components';

export type ButtonColorVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface IButtonConateinerProps {
  variant: ButtonColorVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<IButtonConateinerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  margin: 8px;
  color: ${props => props.theme.white};
  cursor: pointer;

  // Forma de acessar as props e pegar o valor que está contido na propriedade passada ao componente
  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */

  // Forma de acessar os valores que estão contidos no arquivo default.ts
  background-color: ${props => props.theme['green-500']}
`