import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import { darken } from 'polished';

export type WrapperProps = { hasIcon: boolean; cor: string } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>;

const wrapperModifiers = {
  cinza: () => css`
    background-color: gray;
    &:hover {
      background-color: darkgrey;
    }
  `,
  azul: () => css`
    background-color: '#21afe5';
  `,

  small: () => css`
    height: 3rem;
    font-size: 1.2rem;
  `,
  medium: () => css`
    height: 4rem;
    font-size: 1.4rem;
    padding: 0.8rem 3.2rem;
  `,
  large: () => css`
    height: 5rem;
    font-size: 1.6rem;
    padding: 1.6rem 4.8rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 0.8rem;
      }
    }
  `,
  minimal: () => css`
    background: none;
    color: #21afe5;

    &:hover {
      color: ${darken(0.3, '#21afe5')};
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ size, fullWidth, hasIcon, minimal, cor }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: #21afe5;
    color: #fafafa;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: 0.8rem;
    text-decoration: none;

    &: hover {
      background: ${minimal ? 'none' : `#21afe5`};
    }

    ${!!size && wrapperModifiers[size]()}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon()}
    ${!!minimal && wrapperModifiers.minimal()}
    ${cor === 'azul' && wrapperModifiers.azul()}
    ${cor === 'cinza' && wrapperModifiers.cinza()}
  `}
`;
