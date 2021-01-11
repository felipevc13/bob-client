import styled from 'styled-components';
import * as FormStyle from '../ItemInput/styled';

export const Wrapper = styled.main`
  display: flex;
  width: 100%;

  ${FormStyle.WrapperInput} {
    margin-left: 6rem;
    flex: 1 1 70%;
  }

  ${FormStyle.Text} {
    margin-bottom: 4rem;
  }

  ${FormStyle.TitleWrapper} {
    margin-bottom: 3rem;
  }
`;

export const IconWrapper = styled.div`
  flex: 1 1 30%;
`;

export const Icone = styled.img`
  max-width: 12rem;
  min-width: 9rem;
  margin: 0 auto;
`;
