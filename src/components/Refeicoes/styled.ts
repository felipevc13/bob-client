import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: flex;
  padding: 4rem;
  flex-direction: column;
`;

export const RefeicoesTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  height: 1.2rem;
  display: block;
  margin-bottom: 5rem;
`;

export const ResultWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  ${media.lessThan('large')`
  flex-direction: column;
  
  `}
`;

export const CalendarWrapper = styled.div`
  background-color: white;
  height: 35rem;
  width: 40rem;
  margin-right: 5rem;

  ${media.lessThan('large')`
  width: 40rem;
  height: 40rem;
  margin: 0 auto;
  `}
`;

export const TableWrapper = styled.div`
  background-color: blue;
  height: 30rem;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.12);

  ${media.lessThan('large')`
  width: 100%;
  margin-top: 6rem;
  `};
`;

export const FormsWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.12);
  height: 30rem;
  width: 100%;
  padding: 3rem;
  border-radius: 1rem;
`;
