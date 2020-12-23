import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  td {
    border: 0.1rem solid lightgray;
    border-top: none;
  }

  .itens td {
    text-align: center;
  }

  .itens td:first-child {
    font-size: 1.5rem;
    font-weight: 700;
    color: gray;
    text-align: center;
    border-left: none;
  }

  .itens td:last-child {
    border-right: none;
  }

  td {
    padding: 1.3rem;
  }

  th {
    font-size: 1.5rem;
    padding: 1rem;
    border-bottom: 0.1rem solid lightgray;
  }

  th.dia {
    color: #21afe5;
    font-size: 2.2rem;
    font-weight: 900;
  }
`;
