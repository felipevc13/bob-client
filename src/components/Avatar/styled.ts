import styled from 'styled-components';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';

export type ImgProps = {
  fluid: GatsbyImageFluidProps;
};

export const AvatarWrapper = styled(Img)<ImgProps>`
  border-radius: 50%;
  height: 8rem;
  margin: auto;
  width: 8rem;
`;
